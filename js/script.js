/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
  Help: {
    title: 'Help',
    subtitle: 'Some useful Links',
    body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
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
  },
  hyeonwoo: {
    name: '이현우',
    color: '#4360fb',
  },
  jihyeon: {
    name: '김지현',
    color: '#6dff96',
  },
  jiyoung: {
    name: '정지영',
    color: '#ffa9fc',
  },
  junho: {
    name: '박준호',
    color: '#fde591',
  },
  somin: {
    name: '최소민',
    color: '#fd91f9',
  },
  kim: {
    name: '김성민',
    color: '#9491fd',
  },
  yujin: {
    name: '백유진',
    color: '#c791fd',
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
          Do: 'jump Yes',
        },
        No: {
          Text: '지금 출발하면 늦진 않을걸?',
          Do: 'jump No',
        },
      },
    },
  ],

  Yes: [
    'sung 지금출발하면 늦진 않을거거든!',
    '(그녀는 순식간에 준비를 마치더니 식빵 한 조각을 물고 뛰쳐나갔다)',
    '쾅!',
    'jump ep1Scene2',
  ],

  No: [
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
  ],
});
