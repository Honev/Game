/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
  Help: {
    title: '지적재산권 TMI 01',
    subtitle: 'The 건강한, 소화가 잘 되는',
    body: `
			<p>‘The 건강한’과 '소화가 잘 되는'이라는 단어는 제품의 기능을 설명하는 역할을 하는 단어이기 때문에 특정 사업자가 독점할 수 없습니다.</p>
		`,
  },
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
  Welcome: {
    title: 'Welcome',
    body: 'This is the Monogatari VN Engine',
    icon: '',
  },
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {});

// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {});

// Define the music used in the game.
monogatari.assets('music', {});

// Define the voice files used in the game.
monogatari.assets('voices', {});

// Define the sounds used in the game.
monogatari.assets('sounds', {});

// Define the videos used in the game.
monogatari.assets('videos', {});

// Define the images used in the game.
monogatari.assets('images', {});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {});

// Define the Characters
monogatari.characters({
  sung: {
    name: '성이름',
    color: '#43fbfb',
    directory: 'jhondo',
    sprites: {
      angry: 'angry_jhondo.png',
      happy: 'happy_jhondo.png',
      normal: 'main_jhondo.png',
      sad: 'sad_jhondo.png',
      surprised: 'surprised_jhondo.png',
      sleepy: 'sleepy_jhondo.png',
      tired: 'tired_jhondo.png',
      scream: 'scream_jhondo.png',
      happy_tired: 'happy_tired_jhondo.png',
      too_tired: 'too_tired_jhondo.png',
      very_surprised: 'very_surprised_jhondo.png',
      smile: 'smile_jhondo.png',
    },
  },

  hyeonwoo: {
    name: '이현우',
    color: '#4360fb',
    sprites: {
      normal: 'main_hyeonwoo.png',
    },
  },
  jihyeon: {
    name: '김지현',
    color: '#6dff96',
    sprites: {
      happy: 'smile_jihyeon.png',
      normal: 'main_jihyeon.png',
      sad: 'sad_jihyeon.png',
      surprised: 'surprised_jihyeon.png',
    },
  },
  jung: {
    name: '정지영',
    color: '#ffa9fc',
    sprites: {
      happy: 'smile_jiyoung.png',
      normal: 'main_jiyoung.png',
    },
  },
  park: {
    name: '박준호',
    color: '#fde591',
    sprites: {
      normal: 'main_junjo.png',
    },
  },
  somin: {
    name: '최소민',
    color: '#fd91f9',
    sprites: {
      angry: 'hot_somin.png',
      happy: 'smile_somin.png',
      normal: 'main_somin.png',
      sad: 'sad_somin.png',
      confused: 'confused_somin.png',
    },
  },
  kim: {
    name: '김성민',
    color: '#9491fd',
    sprites: {
      normal: 'main_sungmin.png',
    },
  },
  uj: {
    name: '백유진',
    color: '#c791fd',
    sprites: {
      happy: 'smile_yujin.png',
      normal: 'main_yujin.png',
    },
  },
});

monogatari.script({
  // The game starts here.
  Start: [
    'show scene url("assets/scenes/sky.png")',
    'show notification Welcome',
    {
      Input: {
        Text: '이름을 입력해주세요',
        Validation: function (input) {
          return input.trim().length > 0;
        },
        Save: function (input) {
          this.storage({
            player: {
              name: input,
            },
          });
          return true;
        },
        Revert: function () {
          this.storage({
            player: {
              name: '',
            },
          });
        },
        Warning: '이름을 입력해주세욧!',
      },
    },
    'show scene url("assets/scenes/room_morning.png")',
    '오전 8:02',
    '우당탕탕',
    '??? 으아악!!!',
    '무언가 분주하게 움직이는 소리가 들린다.',
    '??? 지각이다!!!',
    '나는 한숨을 쉬며 말했다.',
    {
      Choice: {
        Dialog: '',
        Yes: {
          Text: '첫 출근부터 지각인거냐..',
          Do: 'jump Yes1',
        },
        No: {
          Text: '지금 출발하면 늦진 않을걸?',
          Do: 'jump No1',
        },
      },
    },
  ],

  Yes1: [
    'show character sung scream',
    'sung 지금출발하면 늦진 않을거거든!',
    '(그녀는 순식간에 준비를 마치더니 식빵 한 조각을 물고 뛰쳐나갔다)',
    '쾅!',
    'jump ep1Scene2',
  ],

  No1: [
    'show character sung scream',
    'sung 알고있거든!',
    '(그녀는 순식간에 준비를 마치더니 식빵 한 조각을 물고 뛰쳐나갔다)',
    '쾅!',
    'jump ep1Scene2',
  ],

  ep1Scene2: [
    'show scene url("assets/scenes/room_morning_memory.png")',
    '약 1년 전.',
    '횡단보도를 건너던 나는 신호위반 트럭에 치여 의식불명 상태가 되었다.',
    '그런데 어째서인지 내 의식은 유령이 된것 처럼 돌아다닐 수 있게 된 상태였고, 나는 병원을 돌아다니다 목디스크로 입원한 대학생 성이름을 만났다.',
    '그녀는 병원 안에서 유일하게 나를 볼 수 있고 대화가 되는 사람이었다.',
    '의외로 빠르게 친해진 덕분에 그녀에게로부터 많은 이야기를 듣게 되었다.',
    '그녀는 S대 디자인대학 졸업반으로 졸업작품을 하다 목디스크가 터져 입원을 한 상태였다.',
    '마침 내 전공도 디자인이었기 때문에 나는 유령이 된 김에 내 몸이 깨어날 때 까지 그녀를 도와주기로 약속했다.',
    '그리고 1년 뒤, 졸업하자마자 운좋게 소규모의 디자인팀에 들어온 그녀는 첫 출근부터 지각을 하게 생겼다..',
    '(저래서 일을 잘 할수 있으려나..)',
    '나는 한숨을 내쉬며 그녀를 따라갔다.',
    'jump ep1Scene3',
  ],

  ep1Scene3: [
    'show scene url("assets/scenes/company_morning.png")',
    '오전 8:52',
    '(조금 많이 늦긴 했지만.. 다행히 지각은 면했네)',
    'sung 하아.. 아슬아슬했어..',
    'kim 성이름씨. 곧 회의 시작합니다. 얼른 들어오세요.',
    'sung 네 팀장님..!',
    '그녀는 서둘러 회의실로 들어갔다.',
    'jump ep1Scene4',
  ],

  ep1Scene4: [
    'show scene url("assets/scenes/office_morning.png")',
    '',
    '(회의실에는 1팀과 2팀 사람들이 모두 모여있었다.)',
    'kim 좋은 아침입니다.',
    'jung 아, 팀장님 오셨어요!',
    'kim 이쪽은 오늘부터 2팀에서 근무할 성이름씨입니다. 면접때 보신 분도 있을거에요.',
    'sung 안녕하세요! 오늘부터 출근하게된 성이름입니다. 잘부탁드립니다!',
    '짝짝짝',
    'kim 이름씨는 저기 지현씨 옆에 앉으면 됩니다.',
    'sung 넵!',
    'jihyeon 반가워요! 전 김지현, 2팀 디자이너에요. 팀 소개는 회의 끝나고 하도록 할게요.',
    'sung 넵!',
    'kim 그럼 회의를 시작하죠.',
    'kim 첫번째 사안은 A사에서 새로 선보이는 고양이 간식 브랜딩입니다.',
    'kim 네이밍을 포함한 전반적인 브랜딩 추후 편의점이랑 대형마트에 납품될 예정이고 특별히 친환경 재료로 만들었다는 것을 강조해달라고 하더군요.',
    'kim 두번째 사안은 B사에서 런칭 준비중인 패션 브랜드입니다.',
    'kim 네이밍부터 시작하기로 이야기가 되었고 추후 S백화점에 입점할 예정이라고 합니다.',
    'kim 언제나처럼 회의 시간은 따로 정해져있지 않고 길어진다 싶으면 중간에 잠시 휴식시간을 가질겁니다.',
    'kim 먼저 고양이 간식부터 시작해보죠. 네이밍이나 패키징 등 여러 의견 다 좋습니다.',
    'sung (두근두근)',
    '시간이 얼마나 흘렀을까..?',
    '여러 아이디어가 오갔지만 고양이 간식의 네이밍에 대해서는 의견이 나오지 않았다.',
    'show scene url("assets/scenes/office_talking.png")',
    '(내가 나설 차례인가.. 야, 성이름!)',
    'sung ?',
    '(내가 아이디어 하나 줄게 손 들어봐)',
    'sung 저.. 이런 네이밍은 어떨까요?',
    {
      Choice: {
        Dialog: '',
        Yes: {
          Text: '고양이가 좋아하는 츄르',
          Do: 'jump Yes2',
        },
        No: {
          Text: 'The 건강한 츄르',
          Do: 'jump No2',
        },
      },
    },
  ],

  Yes2: [
    'sung 고양이가 좋아하는 츄르는 어떨까요?',
    'uj ?',
    'sung ?',
    'jihyeon 말이 안되는건 아닌데 너무 무난한것같네요.',
    'sung 그런가요..',
    'uj 처음엔 장난인줄 알았어요.',
    'sung 죄송합니다...',
    'kim 아이디어잖아요? 괜찮아요. 계속 진행해보죠.',
    'jump normalEnd01',
  ],

  No2: [
    'sung The 건강한 츄르는 어떨까요?',
    'jung The 건강한이라는 말은 어디서 들어본것 같은데요?',
    'sung 물건이나 기능을 직접적으로 설명하는 단어는 브랜드 이름에 누구나 자유롭게 사용할 수 있다고 알고있습니다.',
    'sung 그래서 여기저기 많이 쓰이기도 하고 건강하다는 말이 제품 컨셉이랑도 맞는 것 같아서요!',
    'uj 그.. 소화가 잘되는 우유 그런 느낌인거죠?',
    'show messege Help',
    'sung 네 그런거죠!',
    'kim 다른 사람들은 어떻게 생각합니까?',
    'jung 괜찮은거같아요.',
    'park 조금 무던하지 않나.. 싶지만 제품 기능이 강조되긴 하겠네요.',
    'kim 나도 괜찮다고 생각해요. 시장에 나와있는 제품들에 비해서 건강함을 어필할 수 있을것같네요.',
    'sung (휴 다행이다!)',
    'jump ep1Scene5',
  ],

  ep1Scene5: [],

  normalEnd01: [],
});
