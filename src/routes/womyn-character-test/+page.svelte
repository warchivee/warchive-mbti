<script lang="ts">
	import { base } from '$app/paths';

	import title from '$lib/images/title.png';
	import mobileTitle from '$lib/images/mobile-title.png';
	
	import Screen from '$components/Screen.svelte';
	import Footer from '$components/Footer.svelte';
	import BaseHead from '$components/BaseHead.svelte';
</script>

<BaseHead />

<Screen>
	<div>
		<picture>
			<source srcset={mobileTitle} media="(max-width: 768px)" />
			<source srcset={title} media="(min-width: 769px)" />
			<img src={title} alt="타이틀 이미지" />
		</picture>

		<h3 class="font-gothic">
			서사도, 세계관도 각양각색인 여성서사의 주인공들.<br />
			나와 가장 성향이 비슷한 인물은 과연 누구일까?
		</h3>
	</div>

	<a class="play-btn-text" href={`${base}/womyn-character-test/question`}
		><span>테스트 시작하기</span></a
	>
	<a class="play-btn" href={`${base}/womyn-character-test/question`}>
		<i class="fa-solid fa-circle-play"></i>
	</a>
</Screen>
<Footer />

<style>
	div {
		flex: 1;
		margin-top: 7rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	img {
		width: 100%;
		max-width: 500px;
	}

	h3 {
		font-weight: 300;
		margin: 2rem 0;
		line-height: 130%;
	}

	@media (max-width: 750px) {
		div {
			margin-top: 0rem;
		}

		h3 {
			font-size: 1.2rem;
		}
	}

	@media (max-width: 500px) {
		h3 {
			font-size: 1rem;
		}
	}

	.play-btn {
		position: absolute;
		opacity: 20%;
	}

	.play-btn > i {
		color: #b169dd;
		font-size: 6.25rem;
		cursor: pointer;
	}

	.play-btn:hover {
		opacity: 50%;
	}

	.play-btn-text {
		padding: 10px 20px;
		background-color: transparent;
		cursor: pointer;
		z-index: 1;
	}

	a > span {
		font-size: 1rem;
		font-weight: bold;
		box-shadow: inset 0 -13px 0 rgba(211, 136, 255, 0.2);
	}
</style>
