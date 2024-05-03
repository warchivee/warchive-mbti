import 구경이 from '$lib/images/thumbnails/구경이.jpg';
import 맥스 from '$lib/images/thumbnails/맥스.jpg';
import 엘사 from '$lib/images/thumbnails/엘사.jpg';
import 앤 from '$lib/images/thumbnails/앤.jpg';
import 코코 from '$lib/images/thumbnails/코코.jpg';
import 캣니스 from '$lib/images/thumbnails/캣니스.jpg';
import 요코 from '$lib/images/thumbnails/요코.jpg';
import 어머니 from '$lib/images/thumbnails/어머니.jpg';
import 이명옥 from '$lib/images/thumbnails/이명옥.jpg';
import 엠마 from '$lib/images/thumbnails/엠마.jpg';
import 파르페 from '$lib/images/thumbnails/파르페.jpg';
import 박자언 from '$lib/images/thumbnails/박자언.jpg';
import 메리다 from '$lib/images/thumbnails/메리다.jpg';
import 에일로이 from '$lib/images/thumbnails/에일로이.jpg';
import 미스미미코토 from '$lib/images/thumbnails/미스미미코토.jpg';
import 설 from '$lib/images/thumbnails/설.jpg';

import 왕년에용사님 from '$lib/images/intro/왕년에용사님.webp';
import 전력질주 from '$lib/images/intro/전력질주.jpg';
import 고깔모자의아틀리에 from '$lib/images/intro/고깔모자의아틀리에.webp';
import 십이국기 from '$lib/images/intro/십이국기.webp';
import 언내추럴 from '$lib/images/intro/언내추럴.jpg';
import 합법해적파르페 from '$lib/images/intro/합법해적파르페.webp';

export const typesByPath: Record<string, string> = {
	max: 'INTJ',
	gugyeong: 'INTP',
	elsa: 'INFJ',
	anne: 'INFP',
	coco: 'ISTJ',
	katniss: 'ISTP',
	yoko: 'ISFJ',
	mikoto: 'ISFP',
	mother: 'ENTJ',
	myeongok: 'ENTP',
	emma: 'ENFJ',
	parfait: 'ENFP',
	aloy: 'ESTJ',
	seol: 'ESTP',
	jaeon: 'ESFJ',
	merida: 'ESFP'
};

export const pathsByType: Record<string, string> = {
	INTJ: 'max',
	INTP: 'gugyeong',
	INFJ: 'elsa',
	INFP: 'anne',
	ISTJ: 'coco',
	ISTP: 'katniss',
	ISFJ: 'yoko',
	ISFP: 'mikoto',
	ENTJ: 'mother',
	ENTP: 'myeongok',
	ENFJ: 'emma',
	ENFP: 'parfait',
	ESTJ: 'aloy',
	ESTP: 'seol',
	ESFJ: 'jaeon',
	ESFP: 'merida'
};

export const results: Record<
	string,
	{
		name: string;
		title: string;
		keyword: string;
		description: string;
		src?: string;
		intro: string;
		genre?: string;
		image: string;
		imgSrc?: string;
	}
> = {
	INTJ: {
		name: '맥스',
		title: 'Life is strange',
		keyword: '#통찰력 #논리적 #시니컬 #정의로움',
		description: `통찰력이 뛰어나고 논리적인 당신.<br />모든 일에 질문을 던지고, 그 일을 해결하는 데에 다른 사람의 판단보다는 자신의 논리를 중요시합니다.<br />다소 시니컬한 면모도 있지만 내면에는 정의감이 기본적으로 깔려 있지요. <br />시간을 되감는 초능력을 가진 Life is strange의 주인공, 맥스와 아주 닮았는걸요?`,
		src: 'https://www.youtube.com/embed/AURVxvIZrmU',
		intro: `플레이어의 선택에 따라 이야기와 결말이 달라지는 어드벤처 게임, Life is Strange. 시간을 되돌리는 능력을 지닌 주인공 맥스는 절친인 클로이와 함께 어느 실종 사건을 조사하면서 그들이 살고 있는 마을의 어두운 면을 발견하게 되는데… 당신의 선택은 게임을 과연 어떤 방향으로 이끌어갈 것인가?`,
		genre: 'game',
		image: 맥스
	},
	INTP: {
		name: '구경이',
		title: '구경이',
		keyword: '#프로의심러 #탐구심 #마이웨이 #돌직구',
		description: `프로 의심러, 비상한 두뇌, 히키코모리. <br />정의 실현…은 둘째치고, 복잡한 문제를 풀어내는 희열을 위해 온몸을 던져 맹렬하게 달려가는, 세상에 없던 탐정 구경이. <br />당신은 그런 구경이에게 동질감을 느끼고 있지 않은가요? <br />게임폐인 여성 탐정과 여성 연쇄살인범의 숨 막히는 추격전.<br /> 이 문장에 가슴이 떨렸다면 ‘구경이’를 보러 갑시다.`,
		src: 'https://www.youtube.com/embed/oHmvy2tKHrU',
		intro: `목 늘어난 티셔츠에 트렌치코트, 거기에 떡진 머리까지 더하면 바로 이 드라마의 주인공 구경이. 경찰을 그만둔 후 세상과 단절된 채 게임 폐인으로 살아가던 그가 사이코패스 연쇄 살인마를 쫓기 시작한다. 이영애가 열연하는 블랙코미디 느와르 범죄 수사 드라마.`,
		image: 구경이
	},
	INFJ: {
		name: '엘사',
		title: '겨울왕국',
		keyword: '#책임감 #인내심 #이지적 #독립적',
		description: `강한 책임감과 인내심으로 왕국을 짊어졌으나 결국 자신을 받아들이고 오롯이 홀로 선 엘사. <br />타인과의 화합을 추구하는 동시에 독립적인 성향도 가진 당신을 떠올리게 하네요.<br /> 어린 시절 작은 방에서 홀로 성장해야 했던 엘사 <br />왕에서, 왕의 자리를 내려놓고 자신만의 머무를 곳을 찾기까지. 그의 여정을 ‘겨울왕국’과 ‘겨울왕국2’에서 함께 지켜봅시다.`,
		src: 'https://www.youtube.com/embed/bbh1NIpDo-c',
		intro: `어떤 것이든 얼려버리는 능력을 타고난 엘사는 자신의 힘이 동생 안나를 다치게 할까 봐 스스로를 가두고 살았다. 하지만 왕위 계승식 날 안나의 결혼 선언에 감정이 격해진 엘사가 능력을 조절하지 못해 아렌델 왕국은 얼어붙고 만다. 왕국을 되돌리기 위해 모험을 떠난 안나는 과연 아렌델을 구할 수 있을까? 디즈니 공주 영화의 새 지평을 연 작품! 통한의 장녀송 'Let it go'를 외치며 겨울 왕국으로 떠나보자.`,
		image: 엘사
	},
	INFP: {
		name: '앤',
		title: '빨간 머리 앤',
		keyword: '#상상력 #에너지 #도전정신 #이상주의자',
		description: `상상력이 뛰어나고 에너지가 넘치는 당신. <br />머릿속에서 끊임없이 수많은 이야기를 만들어 낼 수 있는 당신은 그야말로 빨간머리 앤! <br />고전 명작에 현대적 해석을 더한 수작, 빨간 머리 앤에서 다채로운 앤의 상상력과 도전정신을 엿보는 건 어떨까요? <br />자신의 길을 걸어나가는 앤과 친구들의 이야기에 틀림없이 빠져들 거예요.`,
		src: 'https://www.youtube.com/embed/S5qJXYNNINo',
		intro: `원작 출간 후 100여 년이 지나 리메이크된 드라마, 빨간 머리 앤. 원작의 사랑스러움에 현대의 페미니즘이 더해져 걸작이 탄생했다. 왕성한 호기심과 행동력으로 똘똘 뭉친 앤과 새롭게 추가된 캐릭터들이 모여 여자는 코르셋을 차고 결혼을 하지 않으면 살아갈 수 없던 1900년대에 반기를 드는 작품. 원작을 알고 있다면 더욱 추천! 기존의 캐릭터들이 어떻게 변화했는지, 어떤 오리지널 캐릭터들이 추가되었는지 안다면 한층 즐겁게 이 작품을 즐길 수 있다.`,
		image: 앤
	},
	ISTJ: {
		name: '코코',
		title: '고깔모자의 아틀리에',
		keyword: '#책임감 #도덕심 #정의감',
		description: `마법은 사람을 행복하게 해주는 것이라는 신념을 가진 코코. <br />그는 자신이 벌인 일에 대한 무거운 책임을 늘 마음에 품고, 목표를 향해 한 걸음 한 걸음 나아가는 어린 마법사입니다.<br /> 자신의 정의를 구현하는 것에 신경을 쓰고 도덕 관념을 따르는 청렴한 당신, 코코와 닮지 않았나요? <br />코코가 성장하는 모습을 ‘고깔모자의 아틀리에’에서 함께 지켜봅시다.`,
		imgSrc: 고깔모자의아틀리에,
		intro: `‘마법’은 마법사 외에는 손댈 수 없는 것. ‘마법’은 아름답지만 비밀스러운 것. 그런 마법을 우연히 알아버린 주인공 코코. 그는 이제 마법사가 되어야만 한다. 자신이 저지른 일을 마음에 품고 앞으로 꿋꿋하게 나아가는 어린 마법사 코코, 그리고 그와 함께하는 동료들의 환상적인 마법 세계 이야기.`,
		image: 코코
	},
	ISTP: {
		name: '캣니스',
		title: '헝거 게임',
		keyword: '#합리적 #이성적 #도전정신 #동료애',
		description: `눈 앞에 닥친 일을 합리적으로 처리하고, 빠르게 변하는 상황에 적응하는 데 능숙한 당신.<br /> ‘헝거 게임’ 시리즈의 캣니스가 떠오르네요! <br />그는 자신의 바운더리 내 사람들에 대한 책임감이 강하고, 심지어 자신의 목숨이 걸린 일에서도 객관적으로 자신의 위치를 판단하죠.<br /> 언뜻 냉철하고 과묵해보이지만 소중한 사람들에게는 헌신적인 그. <br />여기에 뛰어난 피지컬까지 합쳐진 매력적인 캣니스를 ‘헝거 게임’ 시리즈에서 만나보세요.`,
		src: 'https://www.youtube.com/embed/PbA63a7H0bo',
		intro: `수도 캐피톨의 지배 하에 있는 독재 국가 판엠. 캐피톨은 권력을 유지하기 위해 서로를 죽이는 생존 전쟁 '헝거 게임'을 개최한다. 24명의 참가자 중 살아남을 수 있는 건 단 한 명. 어린 동생 대신 참가자로 나선 캣니스는 헝거 게임을 시작으로 거대한 권력에 맞서 싸우게 된다. 영웅으로 거듭나는 주인공과 다양한 여성 인물들을 확인할 수 있는 영화!`,
		image: 캣니스
	},
	ISFJ: {
		name: '요코',
		title: '십이국기',
		keyword: '#진솔함 #다정함 #인내심 #책임감',
		description: `진솔하고, 가볍지 않은 당신. <br />그런 믿음직스러운 당신에게는 어느 날 갑자기 이세계로 떨어져 모험을 하게 된 요코의 성장서사를 추천해요.<br /> 부드럽고 다정하면서도 책임감 있고 인내심이 강한 캐릭터거든요.<br /> 처음부터 멋지기만 하진 않아요. 시작은 초라하고, 보수적이고, 변화를 받아들이려 하지 않죠. <br />하지만 그런 캐릭터가 서서히 성장하는 이야기는 정말 매력적인걸요!`,
		src: '',
		imgSrc: 십이국기,
		intro: `30년 전 출판된 이세계물의 원조 격이자 정수. 청바지조차 입지 못할 정도로 조신한 숙녀가 되기를 강요하는 가부장적인 아버지와 순종적인 어머니 아래에서 자란, 심약한 고교생 요코는 갑작스럽게 이세계에 떨어진다. 그것도 여성이 임신, 출산을 하지 않는데다 세상의 권력 절반을 차지한 세계에! 수없이 괴물에게 쫓기고 배신당하고 살해당할 위기를 겪으며 육체적, 정신적으로 점차 성장하는 요코. 그의 생존과 눈부신 성장을 지켜보자.`,
		image: 요코
	},
	ISFP: {
		name: '미스미 미코토',
		title: '언내추럴',
		keyword: '#정신력 #온화함 #다정함',
		description: `누구와도 두루두루 잘 지내지만, 바운더리 내의 사람이 아니면 내면을 쉽게 보이지 않는 일면도 있죠. <br />강한 정신력과 온화함을 가진 다정한 당신은 프로페셔널한 법의학자 미스미 미코토!<br /> ‘절망할 시간이 있으면 맛있는 거 먹고 잘래’라는 대사에서 미코토의 강한 정신력을 엿볼 수 있답니다. <br />이 대사가 어떤 장면에서 나오는 지 알고 싶다면? 언내추럴에서 확인할 수 있어요!`,
		src: 'https://www.youtube.com/embed/HksIP72Rpvo',
		imgSrc: 언내추럴,
		intro: `사람은 누구나 죽는다. 수많은 죽음 중에 이유를 아는 죽음은 얼마나 될까? 자연스럽지 않은 죽음을 연구하는 '부자연사 규명 연구소’를 배경으로 하는 법의학 수사 드라마 언내추럴. 매회 등장하는 부자연스러운 죽음과 그 뒤에 숨겨진 아픔 앞에서 우리는 어떤 마음으로 부조리한 세상을 살아가야 하는지 묻게 된다. 늘 온몸을 던져 진실에 다가가는 우리의 주인공은 이렇게 말한다. "절망할 시간이 있으면 맛있는 거 먹고 잘래."`,
		image: 미스미미코토
	},
	ENTJ: {
		name: '어머니',
		title: '내 이름은 마더',
		keyword: '#정신력 #통솔력 #리더십 #엄격함',
		description: `강인한 육체와 정신력, 통솔력, 그리고 단호한 리더십을 가진 ‘어머니’. <br />기존의 전형적인 가부장제 하의 어머니 캐릭터 도식과는 전혀 다른 이 ‘어머니’는 체계적이고 엄격한 면모를 가진 당신과 닮았습니다.<br /> 이 ‘어머니’와 딸의 관계는 지금까지 봐왔던 그 어떤 모녀지간과도 다를 거에요. <br />서서히, 그리고 단단하게 쌓아올리는 그들의 유대는 당신의 마음을 뜨겁게 끓어오르게 하리라 확신합니다.<br /> 넷플릭스 오리지널 영화 ‘내 이름은 마더’.`,
		src: 'https://www.youtube.com/embed/SRzCVC_B1Zs',
		intro: `은둔 생활을 하던 전직 군 출신의 암살자 ‘어머니’. 그는 갓 태어난 딸을 지키기 위해 모든 것을 걸고 세상에서 사라지기를 결심한다. 그러나 십수년 후, 딸이 누군가에게 납치되었다는 사실을 알게 되는데… ‘어머니’는 과연 딸을 무사히 지킬 수 있을까? 제니퍼 로페즈 주연의 긴장감 넘치는 액션 스릴러! 통쾌한 액션씬, 속 시원한 전개를 찾고 있다면? 지금 바로 ‘내 이름은 마더’ 를 클릭해보자.`,
		image: 어머니
	},
	ENTP: {
		name: '이명옥',
		title: '왕년엔 용사님',
		keyword: '#솔직함 #열정적 #자신감 #적응력',
		description: `평범한 고등학생인 내가 이 세계에서는 용사님이라고? <br />어느 날 갑자기 떨어져버린 이세계에서 살아남아 심지어 세상을 구해버린 용사, 명옥. <br />위풍당당하고 경쾌한 명옥은 그야말로 용사의 귀감이죠.<br /> 왕년엔 용사였던 나는 어느새 중년이 되었는데도 이세계에서는 2년밖에 흐르지 않았다는데…? <br />시간을 뛰어넘어 다시 한 번, 용사가 될수 있을까? ‘왕년엔 용사님’에서 확인해보세요. <br />명옥과 닮은 당신 역시 용사의 길을 걷게 될 수도 있으니까요!`,
		imgSrc: 왕년에용사님,
		intro: `평범해 보이던 우리 엄마가 사실은 마왕을 물리친 용사였다니! 중년의 동네 슈퍼 주인 ‘명옥’. 이 세계를 구해냈지만, 그에게 돌아온 건 달콤한 보상이 아닌 절망이었다. 수많은 선택의 기로 속에 치열하게 고민하고, 무너지고, 후회해도 나아가며 제 몫의 삶을 살아가며 ‘나’를 찾아내는 여성들의 성장 서사.
도전하고 싶지만 두려운 게 있다면? 변화하고 싶지만 후회할까 두렵다면? 그럼에도 한 발짝 나아가고 싶다면, 명옥과 함께 모험을 떠나보자.`,
		image: 이명옥
	},
	ENFJ: {
		name: '엠마',
		title: '약속의 네버랜드',
		keyword: '#온화함 #카리스마 #평화추구 #긍정적',
		description: `온화하면서도 모두를 한 방향으로 이끄는 부드러운 카리스마를 가진 당신. <br />선을 추구하며 평화를 사랑하는 엠마와 비슷하네요. <br />끔찍하고 어두운 현실 속에서도 좌절하지 않고, 이상적인 세계를 꿈꾸고 그것을 위해 위험하고 어려운 일도 주저하지 않고 나서는 엠마. <br />언제나 에너지 넘치는 엠마를 따라가 보세요. <br />엠마와 동료들이 추구하는 이상의 네버랜드는 과연 어떤 곳일까요?
`,
		src: 'https://www.youtube.com/embed/yYWEjgvNWtg',
		intro: `누가 말했는가, 소년만화의 주인공은 남자 캐릭터뿐이라고! 낙원과도 같은 고아원. 하지만 그곳은 낙원이 아니었다. 누구보다 강한 주인공 엠마는 가족과도 같은 고아원의 아이들을 지키기 위해 앞으로 나아간다. 가족의 죽음을 가슴에 품고서. 두뇌 싸움과 액션, 두 마리 토끼를 전부 잡은 다크판타지 모험 만화.`,
		image: 'https://i.ibb.co/2ZWNvxV/image.jpg'
	},
	ENFP: {
		name: '파르페',
		title: '합법해적 파르페',
		keyword: '#에너지 #정많음 #정의로움 #감성적',
		description: `‘친구같은 건 만들지 않습니다.’ 라고 말하곤 하지만 실제로는 파르페에게 도움을 받은 사람이 얼마나 많은지! <br />가는 곳마다 일을 벌이고 곤경에 처한 사람은 쉬이 넘어가질 못하는 에너지 넘치는 파르페. <br />왕국의 숨겨진 공주이자 제 1왕위 계승자인 파르페는 대체 왜 합법해적이 된 걸까요? <br />‘합법해적 파르페’에서 확인해보세요.`,
		intro: `백포도 왕국의 하나뿐인 공주님인 소다의 초상화가 훼손되었다! 해군 대위 반은 이 사건의 범인이자 왕국의 숨겨진 공주 파르페를 우연히 구하게 된다. 소다를 죽이겠다고 날뛰던 파르페는 우여곡절 끝에 합법해적선에 끌려가 한 치 앞도 예상 못 할 모험을 떠나게 된다. 이 모험이 향하는 곳은 어디일까?`,
		image: 파르페,
		imgSrc: 합법해적파르페
	},
	ESTJ: {
		name: '에일로이',
		title: 'horizon zero dawn',
		keyword: '#현실적 #목표지향적 #카리스마 #전투적',
		description: `어머니를 숭상하는 모계 부족에서 추방당한 전사, 에일로이. <br />자라면서 좋은 취급을 받은 적이 없었음에도 그런 현실을 극복하기 위해 수행을 반복하고 시련을 뛰어넘은, 현실적이고 목표지향적인 인물입니다. <br />한번 멸망한 세계에서 살아남아 자신을 찾아가는 에일로이의 이야기는 ‘horizon zero dawn’ 시리즈에서 만나보세요.`,
		src: 'https://www.youtube.com/embed/u4-FCsiF5x4',
		genre: 'game',
		intro: `우리가 알고 있는 지구가 아니다. 이곳은 인류의 문명이 쇠퇴하고 기계가 지배하는 머나먼 미래의 지구. 일족으로부터 추방당한 전사 에일로이는 자신의 과거와 운명을 밝히고 미래의 재앙을 막기 위해 고군분투한다. 고대 인류 문명을 파헤치면서 매력적인 기계 동물들을 사냥해 보자. 전세계 판매량 2,000만장을 돌파한 화제의 게임.`,
		image: 에일로이
	},
	ESTP: {
		name: '설',
		title: '전력 질주',
		keyword: '#적극적 #사교적 #관대함 #선입견없음',
		description: `이상기후로 인해 무너져가는 건물에서 탈출하는 두 여성의 연대를 그린 소설, ‘전력 질주’. <br />그 주인공 중 한명인 설은 달리기로 유명한 SNS 인플루언서입니다. <br />당신과 닮은 설은 화사하고, 사교적이고, 관대한 성격의 소유자입니다. <br />또다른 주인공인 진에게는 완전히 질투의 대상이죠. <br />무너지는 건물의 잔해를 함께 뛰어넘는 설과 진. <br />서로 다른 트라우마를 이겨내고 연대의 손을 잡은 여성들의 이야기를 ‘전력 질주’에서 확인해 보세요.`,
		imgSrc: 전력질주,
		image: 설,
		intro: `쏟아져 내리는 비, 갑작스레 무너져 내리는 스포츠 센터. 발목을 잡아당기는 무거운 물살, 한 치 앞도 보이지 않는 어둠. 헤엄치는 진, 달리는 설. 목숨을 걸고 있는 힘껏 몸을 움직이던 둘은 어느새 서로를 위해 마음이 움직이기 시작하는데…`
	},
	ESFJ: {
		name: '박자언',
		title: '극락왕생',
		keyword: '#친절함 #인내심 #동정심 #포용력 #도덕적',
		description: `당신을 떠올리게 하는 자언은 친절하고, 인내심과 동정심이 많으며 인간은 물론이고 인간이 아닌 존재까지 따뜻하게 품어주는 포용력을 가진 인물입니다. <br />그들이 어떤 감정을 느끼고 있는지에 대해 관심이 많고, 공감능력도 뛰어나죠.<br /> 한편으로는 사회 질서를 유지하고 안전을 중요시하는 보수적인 면도 있습니다. <br />그렇기에 자언을 닮은 당신의 주변에는 당신을 소중히 여기는 사람들이 많지 않은가요? <br />자언의 이야기가 궁금하다면 ‘극락왕생’에서 만나보세요.`,
		src: 'https://www.youtube.com/embed/TL1kbO_8Jbg',
		intro: `"당산역 귀신에 대해 들어본 적 있어?" 당산역으로 넘어갈 때 귓가에 '낭만 고양이'를 불러달라는 귀신이 나오는다는 소문이 있다. 지옥의 호법신 도명은 당산역 귀신을 잡으려 했지만 오히려 그를 극락왕생 시키라는 임무를 받는다. 가장 중요한 한 해를 다시 살게 된 귀신, 자언은 도명과 함께 기묘한 존재들이 벌이는 사건을 해결해 나간다. 과연 자언은 극락왕생할 수 있을까?`,
		image: 박자언
	},
	ESFP: {
		name: '메리다',
		title: '메리다와 마법의 숲',
		keyword: '#자유로움 #분위기메이커 #도전정신 #열정적',
		description: `드레스와 구두보다 말을 타고 활을 쏘는 게 좋아. <br />공주 수업도, 결혼도 받아들일 수 없어. <br />자유로운 영혼을 가진 당신은 그야말로 메리다. <br />그 어떤 모임이라도 당신만 있다면 분위기가 처질 일은 없어요. 분위기 메이커인 당신이 있으니까요! <br />자신의 운명을 개척해 나가는 메리다는 ‘메리다와 마법의 숲’에서 만날 수 있어요.`,
		src: 'https://www.youtube.com/embed/HzG2PeKJIF4',
		intro: `결혼하기 싫어서 엄마를 곰으로 만든 공주가 있다? 왕국의 공주 메리다는 결혼을 강요하는 어머니 엘리노어를 피해 도망간 숲속에서 마녀를 만나 엄마를 막을 주술을 부탁한다. 근데 그 주술이 좀 많이... 잘못되었다! 그냥 자유롭게 살고 싶었을 뿐이었던 메리다는 혼란과 음모에 빠진 왕국을 바로잡기 위해 더 이상 도망치지 않고 맞서기 시작한다.`,
		image: 메리다
	}
};

export default results;
