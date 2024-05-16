<script lang="ts">
    export let category;
    export let question;
    export let index;

    let stored: number[][][] = [];
    
    import { page } from '$app/stores';

    import checkImg from '$lib/images/mockexam/systems/check.png';
    import redCheckImg from '$lib/images/mockexam/systems/red_check.png';
    import redCheckLineImg from '$lib/images/mockexam/systems/red_check_line.png';
    import correctMarkImg from '$lib/images/mockexam/systems/correct_mark.png';
    import wronMarkImg from '$lib/images/mockexam/systems/wrong_mark.png';
    import testimg from '$lib/images/mockexam/testimg.png';
    
    import { userAnswers } from '../../store/exam';

    const isReviewPage = $page?.route?.id?.includes('/review');

    function numberToCircle(number: number) {
        const circleMap = ['①', '②', '③', '④', '⑤'];
        if (number >= 1 && number <= 5) {
            return circleMap[number - 1];
        } else {
            return number;
        }
    }
    
    const unsubscribeUserName = userAnswers.subscribe(value => {
        stored = value;
    });

    function writeRadioAnswer(category: number, quest: number, answ: number) {
        if (stored.length <= category || !stored[category]) {
            stored[category] = [[]];
        }
        if (stored[category].length <= quest || !stored[category][quest]) {
            stored[category][quest] = [];
        }
        stored[category][quest] = [answ];
        userAnswers.set(stored);
    }

    function writeCheckboxAnswer(category: number, quest: number, answ: number) {
        if (stored.length <= category || !stored[category]) {
            stored[category] = [[]];
        }
        if (stored[category].length <= quest || !stored[category][quest]) {
            stored[category][quest] = [];
        }
        const index = stored[category][quest].indexOf(answ);
        if (index !== -1) {
            stored[category][quest].splice(index, 1);
        } else {
            stored[category][quest].push(answ);
            stored[category][quest].sort((a, b) => a - b);
        }
        userAnswers.set(stored);
    }

    function checkQuestion(selects: number[], corrects: number[]) {
        return selects.every((a) => corrects.includes(a));
    }

    function isCorrectAnswer(answers:number[], answerIndex: number) {
        return answers.includes(answerIndex+1);
    }
        
</script>

<div class="question">
    <img class='mark {isReviewPage ? 'show' : ''}' src={checkQuestion([], question.correctAnswers) ? correctMarkImg : wronMarkImg} alt='맞음'/>
    <div class="main-context">
        <p>{index}. {@html question.text}</p>
        {#if question.image}
            <img class={`${question.image.type === 1 ? 'vertical' : 'horizon'}`} src={question.image.add || testimg} alt="문제 이미지">
        {/if}
    </div>
        
    {#if question.example}
        <div class="sub-context">
            <p class={`${question.example.type === 1 ? 'center' : 'lefted'}`}>{@html question.example.text}</p>
        </div>
    {/if}
    
    <div class="answers">
        {#each question.answers as answer, answerIndex}
            <div class='answer {isReviewPage && isCorrectAnswer(question.correctAnswers, answerIndex) ? 'correct' : ''}' >
                <input 
                    type='{question.correctAnswers.length > 1 ? 'checkbox' : 'radio'}' 
                    name='question-{index}-answers' 
                    id="{index}-{answerIndex + 1}"
                    on:change={(event) => (
                        question.correctAnswers.length > 1
                        ? writeCheckboxAnswer(category, index - 1, answerIndex + 1)
                        : writeRadioAnswer(category, index - 1, answerIndex + 1)
                    )} />
                <img class='check' src='{checkImg}' alt='체크표시' />
                <img class='correct_img check' src='{redCheckImg}' alt='체크표시' />
                <img class='correct_img line' src='{redCheckLineImg}' alt='체크표시' />
                <label for="{index}-{answerIndex + 1}">{numberToCircle(answerIndex + 1)}</label>
                <label for="{index}-{answerIndex + 1}">{answer.text}</label>
            </div>
        {/each}
    </div>
    
</div>

<style>
    * {
        text-align:justify;
    }

    .question {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
        margin-bottom: 50px;

        .mark {
            position: absolute;
            display: none;
            width: 150px;
            top: -20px;
            left: -30px;
        }

        .mark.show {
            display: block;
        }
    }

    .main-context {
        width: 100%;
        display: flex;
        flex-direction: column;
        height: fit-content;
        justify-content: center;
        align-items: center;
        text-align: justify;
        gap: 1rem;

        img.horizon{
            width: 300px;
        }

        img.vertical {
            width: 200px;
        }
    }

    .sub-context {
        margin-top: 10px;
        border:1px solid black;

        .center{
            text-align: center;
        }
    }

    .answers {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 10px;

        .answer {
            display: flex;
            width: fit-content;
            gap: 0.2rem;
            position: relative;

            input {
                display: none;
            }

            label {
                cursor: pointer;
            }

            img {
                display: none;
                position: absolute;
                left: 0;
            }

            img.check {
                width: 20px;
            }

            img.line {
                bottom: 0;
                height: 1px;
                width: 110%;
            }
            
            input:checked + img:not(.correct_img) {
                display: block;
            }
        }

        .answer.correct {
            img.correct_img {
                 display: block;
            }
        }
    }
</style>