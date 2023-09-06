/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
  Tmi1: {
    title: '지적재산권 TMI 01',
    subtitle: 'The 건강한, 소화가 잘 되는',
    body: `
			<p>‘The 건강한’과 '소화가 잘 되는'이라는 단어는 제품의 기능을 설명하는 역할을 하는 단어이기 때문에 특정 사업자가 독점할 수 없습니다.</p>
		`,
  },
  Tmi2: {
    title: '지적재산권 TMI 02',
    subtitle: '메종',
    body: `
			<p>‘메종'이라는 단어는 업계에서 널리 쓰이는 단어이기 때문에 특정 사업자가 독점할 수 없습니다.</p>
		`,
  },
  Tmi3: {
    title: '지적재산권 TMI 03',
    subtitle: '만료된 저작권',
    body: `
			<p>저작권의 기한이 만료된 저작권은 누구나 사용할 수 있습니다.</p>
		`,
  },
  Tmi4: {
    title: '지적재산권 TMI 04',
    subtitle: '버려진 브랜드',
    body: `
			<p>버려진지 3년이 지난 브랜드는 누구나 사용할 수 있습니다. 버려진 브랜드를 찾아 내 것으로 만들어보세요!</p>
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
monogatari.assets('music', {
  cute: 'cute.mp3',
});

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
      smile: 'smile_jhondo.png',
      very_surprised: 'very_surprised_jhondo.png',
    },
  },

  lee: {
    name: '이현우',
    color: '#4360fb',
    directory: 'hyeonwoo',
    sprites: {
      normal: 'main_hyeonwoo.png',
    },
  },
  jh: {
    name: '김지현',
    color: '#6dff96',
    directory: 'jihyeon',
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
    directory: 'jiyoung',
    sprites: {
      happy: 'smile_jiyoung.png',
      normal: 'main_jiyoung.png',
    },
  },
  park: {
    name: '박준호',
    color: '#fde591',
    directory: 'junho',
    sprites: {
      normal: 'main_junjo.png',
    },
  },
  sm: {
    name: '최소민',
    color: '#fd91f9',
    directory: 'somin',
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
    directory: 'sungmin',
    sprites: {
      left: 'main_sungmin.png',
      right: 'right_sungmin.png',
    },
  },
  uj: {
    name: '백유진',
    color: '#c791fd',
    directory: 'yujin',
    sprites: {
      happy: 'smile_yujin.png',
      normal: 'main_yujin.png',
    },
  },
});

monogatari.script({
  // The game starts here.
  Start: [
    'play music cute with volume 65 loop',
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
    'show character sung scream with fadeIn',
    '',
    'sung 지금출발하면 늦진 않을거거든!',
    '(그녀는 순식간에 준비를 마치더니 식빵 한 조각을 물고 뛰쳐나갔다)',
    '쾅!',
    'jump ep1Scene2',
  ],

  No1: [
    'show character sung scream with fadeIn',
    '',
    'sung 알고있거든!',
    '(그녀는 순식간에 준비를 마치더니 식빵 한 조각을 물고 뛰쳐나갔다)',
    '쾅!',
    'jump ep1Scene2',
  ],

  ep1Scene2: [
    'show scene url("assets/scenes/room_morning_memory.png")',
    '약 1년 전.',
    'show image e_world_truck.png center with fadeIn',
    '',
    '횡단보도를 건너던 나는 신호위반 트럭에 치여 의식불명 상태가 되었다.',
    'hide image e_world_truck.png with fadeOut',
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
    '',
    '오전 8:52',
    '(조금 많이 늦긴 했지만.. 다행히 지각은 면했네)',
    'show character sung tired at left',
    '',
    'sung 하아.. 아슬아슬했어..',
    'hide character sung tired',
    'show character kim right at right',
    '',
    'kim 성이름씨. 곧 회의 시작합니다. 얼른 들어오세요.',
    'hide character kim right',
    'show character sung happy at left',
    '',
    'sung 네 팀장님..!',
    '그녀는 서둘러 회의실로 들어갔다.',
    'hide character sung happy',
    'jump ep1Scene4',
  ],

  ep1Scene4: [
    'show scene url("assets/scenes/office_morning.png")',
    '',
    '(회의실에는 1팀과 2팀 사람들이 모두 모여있었다.)',
    'show character kim left at left',
    '',
    'kim 좋은 아침입니다.',
    'hide character kim left',
    'show character jung happy at right',
    'jung 아, 팀장님 오셨어요!',
    'kim 이쪽은 오늘부터 2팀에서 근무할 성이름씨입니다. 면접때 보신 분도 있을거에요.',
    'sung 안녕하세요! 오늘부터 출근하게된 성이름입니다. 잘부탁드립니다!',
    '짝짝짝',
    'kim 이름씨는 저기 지현씨 옆에 앉으면 됩니다.',
    'sung 넵!',
    'jh 반가워요! 전 김지현, 2팀 디자이너에요. 팀 소개는 회의 끝나고 하도록 할게요.',
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
    'show scene url("assets/scenes/office_morning.png")',
    'sung 고양이가 좋아하는 츄르는 어떨까요?',
    'uj ?',
    'sung ?',
    'jh 말이 안되는건 아닌데 너무 무난한것같네요.',
    'sung 그런가요..',
    'uj 처음엔 장난인줄 알았어요.',
    'sung 죄송합니다...',
    'kim 아이디어잖아요? 괜찮아요. 계속 진행해보죠.',
    'jump normalEnd01',
  ],

  No2: [
    'show scene url("assets/scenes/office_morning.png")',
    'sung The 건강한 츄르는 어떨까요?',
    'jung The 건강한이라는 말은 어디서 들어본것 같은데요?',
    'sung 물건이나 기능을 직접적으로 설명하는 단어는 브랜드 이름에 누구나 자유롭게 사용할 수 있다고 알고있습니다.',
    'sung 그래서 여기저기 많이 쓰이기도 하고 건강하다는 말이 제품 컨셉이랑도 맞는 것 같아서요!',
    'uj 그.. 소화가 잘되는 우유 그런 느낌인거죠?',
    'show messege Tmi1',
    'sung 네 그런거죠!',
    'kim 다른 사람들은 어떻게 생각합니까?',
    'jung 괜찮은거같아요.',
    'park 조금 무던하지 않나.. 싶지만 제품 기능이 강조되긴 하겠네요.',
    'kim 나도 괜찮다고 생각해요. 시장에 나와있는 제품들에 비해서 건강함을 어필할 수 있을것같네요.',
    'sung (휴 다행이다!)',
    'jump ep1Scene5',
  ],

  ep1Scene5: [
    '잠시 후',
    'show character kim left at left with fadeIn',
    'kim 고양이 간식은 이쯤하고 패션브랜드 얘기를 해보죠.',
    'hide character kim with end-fadeOut',
    'show character park normal at right with fadeIn',
    'park 자료를 읽어보니 클라이언트가 브랜드 컨셉을 보면 하이앤드 느낌의 가성비 브랜드로 백화점 내에서 독자적인 위치를 원하는것 같군요. ',
    'park 꽤나 고난도의 작업이 될 것 같은데 앞 프로젝트와 동시 진행이 가능할까요?',
    'hide character park with fadeOut',
    // 'show character somin normal at right', -- park+somin img
    'sm 올해 초에 했던거 생각하면 가능할 것 같긴 해요.',
    'park 그렇군요.',
    'sm 음.. 그나저나 B사에서는 ZARA나 H&M 정도의 느낌을 원하는게 아닐까요?',
    'park 확실히. ‘ZARA’정도의 퀄리티에 가격대면 소비자들도 합리적인 소비라고 느낄 수 있겠네요.',
    'jh 그럼 저희도 ZARA나 H&M처럼 심플한 네이밍으로 가보는건 어때요?',
    '그녀의 시선이 이름에게로 꽂혔다.',
    '그녀는...',
    {
      Choice: {
        Dialog: '',
        Yes: {
          Text: '고개를 끄덕인다.',
          Do: 'jump Yes3',
        },
        No: {
          Text: '좋아요!',
          Do: 'jump No3',
        },
      },
    },
  ],

  Yes3: ['show character sung happy', 'sung (끄덕끄덕끄덕)', 'jump ep1Scene6'],

  No3: ['show character sung happy', 'sung 좋아요!', 'jump ep1Scene6'],

  ep1Scene6: [
    'show character lee',
    'lee 하이엔드 브랜드중에 유독 ‘메종’이라는 단어가 붙은 브랜드가 많던데 저희도 사용해보는건 어떨까요?',
    // 'somin 그거 아무나 써도 되는거에요?', --lee+somin img
    'sm 그거 아무나 써도 되는거에요?',
    'lee 그건.. 잘 모르겠네요.',
    'show scene url("assets/scenes/office_talking.png")',
    '(이건.. 내가 도움을 줄 수 있겠는데?)',
    '(야. 성이름!)',
    'show scene url("assets/scenes/office_morning.png")',
    'show character sung surprised at left',
    'sung 녜?!',
    'uj ?',
    'sung 아, 그.. 러니까..!',
    'sung 그.. 메종이라는 단어 말인데요..!',
    {
      Choice: {
        Dialog: '',
        Yes: {
          Text: '저작권에 문제가 된다.',
          Do: 'jump Yes4',
        },
        No: {
          Text: '저작권에 문제가 되지 않는다.',
          Do: 'jump No4',
        },
      },
    },
  ],

  Yes4: [
    'show character sung happy at left',
    'sung 저작권에 문제가 되지 않을까요?',
    'uj 메종은 프랑스어로 집이라는 뜻인데 오트쿠튀르 매장을 의미하기도 해요.',
    'uj 업계에서 누구나 쓸 수 있어야 하는 단어라 저작권에 문제되진 않을거에요.',
    'jh 어감도 괜찮고 고급 느낌을 주면서 가격경쟁력을 갖춘다면 다른 브랜드에 비해 빠르게 주목받을 수 있을것같네요.',
    'sung 저도 좋은것같습니다.',
    'show scene url("assets/scenes/office_talking.png")',
    'show character sung angry at left',
    'sung ...',
    'sung (조금 더 신중해야겠어..)',
    'jump normalEnd01',
  ],

  No4: [
    'show character sung smile at left',
    'sung 저작권 관련해서는 문제가 되지 않는걸로 알고있습니다.',
    'jung 그래요? 이유가 있나요?',
    'sung 네!',
    'sung 각 분야에서 자주 쓰이는 단어는 어느 한 기업에서 독점할 수 없다고 알고있습니다. 그 분야에서 브랜드를 운영하는 사람은 누구나 그 단어를 쓸 수 있어야 하기 때문이죠.',
    'show messege Tmi2',
    'uj 설명 고마워요. 그럼 우선 메종은 킵 해두는걸로 할까요?',
    'jung 좋은 것 같아요.',
    'sung ',
    'sung (힛)',
    'jump goodEnd01',
  ],

  normalEnd01: [
    'show scene url("assets/scenes/office_morning.png")',
    '4시간 후',
    'show character kim left at left',
    'kim 응? 벌써 시간이 이렇게..',
    'kim 밥먹고 이어서 합시다.',
    'hide character kim left',
    // '단체캐릭터 이미지',
    '수고하셨습니다..',
    'show scene url("assets/scenes/company_afternoon.png")',
    '정신없이 하루가 지나갔다.',
    '업무를 마친 그녀가 얼빠진 표정으로 사무실에서 걸어나왔다.',
    'show character sung too_tired with fadeIn',
    '디자인이 나랑 맞는걸까..',
    'hide character sung too_tired',
    '',
    '',
    'Episode 01, Normal Ending, 행복 끝 고생 시작',
    'show scene url("assets/scenes/end.png") with fadeIn',
    'end',
  ],

  goodEnd01: [
    '',
    '2시간 후',
    'show character kim left at left',
    'kim 오늘 회의는 여기서 마치죠. 다들 수고많았어요.',
    'hide character kim left',
    '수고하셨습니다',
    'uj 아, 이름씨는 이따 오후에 잠깐 나좀 봐요.',
    'sung 네? 네!',
    'show scene url("assets/scenes/office room_afternoon.png") with fadeIn',
    '',
    'uj 아까 네이밍 설명할때 말한 내용은 어떻게 알게됐어요?',
    'sung 아.. 제가 졸전 진행하면서 관련 공부를 좀 해서 알게되었습니다.',
    '(좋아 적당히 잘 둘러댔군.)',
    'uj 첫날부터 꽤 인상깊었어요. 앞으로도 잘해봅시다.',
    'sung 네! 감사합니다 팀장님!',
    '',
    '',
    'Episode 01, Good Ending, 디자이너로서의 첫 걸음',
    'show scene url("assets/scenes/end.png") with fadeIn',
    'jump ep2Scene1',
  ],

  ep2Scene1: [
    'show scene url("assets/scenes/room_morning.png")',
    '',
    '며칠 뒤',
    '커어어',
    '(슬슬 일어나야 할 시간인데..)',
    '커어어어',
    '(알람소리)',
    '커어어..얽..!',
    '그녀는 놀라운 속도로 알람을 껐다.',
    '(반속보소;;)',
    'show character sung too_tired',
    'sung 으으...',
    '(일주일동안 열정이 넘치더니 결국 이 모습이 되었다..)',
    'sung 으으어어어',
    '(그래도.. 출근 해야겠지?)',
    'sung ...',
    'sung ...너 나빠',
    'hide character sung too_tired',
    'show scene url("assets/scenes/company_morning.png")',
    '오전 8:43',
    'jh 좋은 아침입니..드아?',
    'sung 오셨어요...',
    'jh 이름씨... 괜찮아요..?',
    'sung 네..! ',
    'jh 요즘 일정이 빡빡하긴 하지만 건강은 챙기면서 해요 우리',
    '(오.. 감동멘트..)',
    'sung 네..! 감사합니다!',
    'kim 오늘 회의는 09시 반에 시작합시다.',
    'jh 알겠습니다.',
    '띵-',
    'lee 커피 사왔습니다!',
    'show character sung tired',
    '!!!!!',
    'hide character sung tired',
    'show scene url("assets/scenes/end.png") with fadeIn',
    'show scene url("assets/scenes/room_morning.png")',
    'show character sung happy',
    '그녀는 카페인이 들어가자 정신이 돌아온것같았다.',
    'jump ep2Scene2',
  ],

  ep2Scene2: [
    'show scene url("assets/scenes/office_morning.png")',
    '잠시 후',
    '이전까지 진행상황을 백유진 팀장이 간략히 정리했다.',
    'uj ..그래서 WBS에서 확인했겠지만 일정변동이 생겨서 다음주까지 PT준비를 마쳐야합니다.',
    'kim 이번 PT 끝나면 잠깐 숨 돌릴 틈이 생길것같으니까 조금만 더 힘내봅시다.',
    'jh 그럼 먼저 저희 팀이 맡은 메종 트라사 메인 아이템 선정부터 진행하겠습니다.',
    'jh 메종 트리사는 다양한 패션 아이템을 취급하기 때문에 어제 B사 담장자 쪽에서 어떤 아이템을 메인으로 내세울지 의견을 보내달라고 했습니다.',
    'jh 현재 B사에서 선정한 후보 아이템은 지갑과 블레이저, 스니커즈입니다.',
    'lee 스니커즈 디자인은 컨버스랑 똑같네요..?',
    'jh 아, 그건 무인양품에서도 똑같이 판매중인 디자인이라 괜찮아요.',
    'lee 무인양품에서 컨버스에 사용권을 구매한건 아닐까요?',
    'show scene url("assets/scenes/office_talking.png")',
    '(지현씨가 어떻게 설명해줘야 할지 고민중인것같은데..)',
    '(야!)',
    'show character sung normal',
    'sung ?',
    '(소곤소곤)',
    'show scene url("assets/scenes/office_morning.png")',
    // 'show character sung+jh+lee',
    'sung 그.. 스니커즈 디자인 말인데요..',
    {
      Choice: {
        Dialog: '',
        Yes: {
          Text: '누구나 사용할 수 있어요.',
          Do: 'jump Yes5',
        },
        No: {
          Text: '컨버스에 물어보면 되지 않을까요?',
          Do: 'jump No5',
        },
      },
    },
  ],

  Yes5: [
    'sung 아무나 사용할 수 있는걸로 알고 있어요.',
    'jh 그렇죠?',
    'sung 네. 기간이 저작권은 누구나 사용할 수 있습니다.',
    'show messege Tmi3',
    'lee 그럼 문제될 일은 없겠네요.',
    'sung 그럴거에요.',
    'uj 하지만 역시 스니커즈로는 브랜드를 강조하기 어려워보이네요.',
    'jh 스니커즈를 제외하고 블레이저를 포함한 셋업 1종과 지갑을 따로 나누어 제시하면 어떨까요?',
    'uj 괜찮은 것 같아요.',
    'show scene url("assets/scenes/office_talking.png")',
    'sung ',
    'sung (헤헤)',
    'jump ep2Scene3',
  ],

  No5: [
    'sung 컨버스 측에 물어보면 되지 않을까요?',
    'uj 이름씨. 우린 시간이 그렇게 많지 않아요.',
    'sung 네.. 그렇죠..',
    'jh 그렇지만 다시 봐도 스니커즈는 브랜드를 강조하는데 적합해보이지는 않네요.',
    'uj 같은 생각이에요.',
    'sung 저도 그렇게 생각합니다.',
    'uj 다른 상품도 더 살펴보죠.',
    'jump ep2Scene3',
  ],

  ep2Scene3: [
    'show scene url("assets/scenes/office_morning.png")',
    '',
    '잠시 후',
    'sm 그럼 이번에는 1팀이 진행중인 "The 건강한 츄르"에 대한 내용인데요.',
    'sm 저번에 전달한 패키지 시안 중 스틱의 디자인이 P사에서 판매중인 스틱 패키지와 유사하다는 의견이 나와서 디자인에 대해서 논의가 필요한 상황입니다.',
    'jung 어머, 담당자분이 괜찮다고 메일 보내주셨는데 바뀌었나보네요?',
    'sm 네.. 비교해보니까 텍스트 위치랑 컬러가 비슷해서 헷갈릴 수도 있겠더라고요.',
    'jh 저번에도 비슷한 일이 있지 않았나요?',
    'sm 네.. 그때는 전체적으로 변경해야 하는 상황이라 다른 안으로 변경해서 진행했는데 이번에는 스틱 디자인만 수정하면 될것같아요.',
    'jung 컬러나 폰트를 변경하기는 좀 그렇고 위치를 좀 수정해서 설득해 볼까요?',
    'kim 비슷한 사례가 있기도 하고.. 이미지 위치랑 배치만 조금 수정해서 오늘 중으로 다시 얘기해보죠.',
    '',
    '이후 회의는 순조롭게 진행되어 끝났다.',
    'kim 자 그럼 회의는 여기서 마치고 식사하고 옵시다.',
    '수고하셨습니다!',
    'show scene url("assets/scenes/road_01.png") with fadeIn',
    '빠르게 점심을 해결하고 회사로 돌아오는 길.',
    '푹푹찌는 무더위에 늦은 점심시간이라 그런지 거리는 꽤 한산했다.',
    '여름이었다.',
    'show character sung scream',
    'sung 아~ 덥다~',
    'sm 그러게.. 올해는 유독 덥네..',
    'sm 회사는 좀 어때?',
    'sung 언니도 그렇고 회사사람들도 그렇고 잘 챙겨줘서 금방 적응한것같아요.',
    'sm 다행이네.',
    'sm 2팀 사람들도 다 좋은 분들이니까 모르는거 있으면 바로 물어보고 애매한 질문은 나한테 물어봐도 돼.',
    'sung 고마워요 언니. 처음 입사했는데 언니가 학교 선배라고 해서 얼마나 반가웠는지 몰라요.',
    'sm 그러게 ㅎㅎ 나도 후배님일줄은 몰랐지?',
    'sm 슬슬 들어가자.',
    'sung 넹',
    'jump ep2Scene4',
  ],

  ep2Scene4: [
    'show scene url("assets/scenes/office_morning.png")',
    '',
    '배부른 상황에 더운 곳에 있다가 시원한 곳에 오면 잠이 오기 마련이다.',
    '문제는 그곳이 사무실이라는거.',
    'show character sung scream',
    'sung 하아암...',
    'show character sung normal',
    'sung (퇴근 전까지 마무리하고 싶은데..)',
    '띠링-',
    '메일이 수신되었다는 알림이 왔다.',
    'show character sung happy',
    'sung 엥 누구지?',
    '의뢰인: 안녕하세요! 외주나라에서 보고 연락드렸습니다.',
    'sung 아..내가 외주나라 계정을 아직 살려뒀었구나?',
    'sung 궁금한데 슬쩍 확인이나 해볼까..',
    '안녕하세요! 외주나라에서 보고 연락드렸습니다. 제가 지금 서비스를 준비중인데요. 아무리 생각해도 알맞는 서비스 네임이 생각이 안납니다.. 내일까지 수락해주시면 외주비용 50% 선입금 해드리겠습니다. 자세한 내용은 첨부파일 참고해주시면 됩니다...',
    'sung 오.. 용돈좀 벌 수 있으려나.',
    'show character sung surprised',
    'sung 그런데 선입금 50%? 많이 급하신가..',
    'sung 어떡할까?',
    {
      Choice: {
        Dialog: '',
        Yes: {
          Text: '다음에 하자.',
          Do: 'jump normalEnd02_1',
        },
        No: {
          Text: '퇴근하고 확인해보자.',
          Do: 'jump No6',
        },
      },
    },
  ],

  normalEnd02_1: [
    'show character sung happy',
    'sung 지금 프로젝트 하는것도 바빠. 다음에 하자.',
    'hide character sung happy',
    'show scene url("assets/scenes/company_afternoon.png") witn fadeIn',
    '정신없는 하루가 지나고..',
    '퇴근시간이 꽤 지나서야 업무를 마친 그녀는 지친 얼굴로 짐을 챙겼다.',
    'show character sung happy_tired',
    'sung 팀장님 퇴근하시나요?',
    'uj 나는 조금만 이따 갈려고요. 먼저 퇴근해요.',
    'sung 넵! 다음주에 뵙겠습니다!',
    'hide character sung happy_tired',
    '',
    '',
    'Episode 02, Normal Ending, 고단한 하루',
    'show scene url("assets/scenes/end.png") with fadeIn',
    'end',
  ],

  No6: [
    'show character sung happy',
    'sung 퇴근하고 확인해보자.',
    'jump ep2Scene5',
  ],

  ep2Scene5: [
    'show scene url("assets/scenes/company_afternoon.png") witn fadeIn',
    '정신없는 하루가 지나고..',
    '퇴근시간이 꽤 지나서야 업무를 마친 그녀는 지친 얼굴로 짐을 챙겼다.',
    'show character sung happy_tired',
    'sung 팀장님 퇴근하시나요?',
    'uj 나는 조금만 이따 갈려고요. 먼저 퇴근해요.',
    'sung 넵! 다음주에 뵙겠습니다!',
    'show scene url("assets/scenes/end.png") with fadeIn',
    'show scene url("assets/scenes/room_night.png") with fadeIn',
    '머리를 대충 말린 그녀가 책상앞에 앉았다.',
    'show character sung happy',
    'sung 하~ 이제 좀 살것같네.',
    'sung 그럼 이제 투잡을 뛰어볼까?',
    '의뢰 내용을 정리해보면 의뢰인은 서비스를 기획중인데 서비스와 어울리는 네이밍과 브랜딩 방향을 제시해 달라는 것이었다.',
    'sung 그런데.. 이런 작업을 왜 나한테 의뢰한거지?',
    '(의뢰비가 싸서..?)',
    'show character sung happy',
    'sung !',
    'show character sung angry',
    'sung ...성불하고싶어?',
    '(죽고싶은 사람이 세상에 어디 있겠습니까 하핫..)',
    'show character sung normal',
    'sung 후.. 의뢰인이 기획중인 서비스는 반려동물 서비스같은데 적당한 이름이 뭐가있을까?',
    '(애완동물 관련 서비스를 찾아보는건...)',
    'show character sung scream',
    '저기! 집중좀 하게 조용히좀 해줄래?',
    '(넵...)',
    'show character sung smile',
    'sung 그치만 괜찮은 제안이었어 ㅎ',
    '(???)',
    'show scene url("assets/scenes/room_night_memory.png") with fadeIn',
    '그 후로 몇시간이 흘렀지만 이렇다 할 아이디어가 떠오르지 않아 고통스러워 하는 그녀였다.',
    'show character sung too_tired',
    'sung 으.. 으으...',
    '이대로 가다가는 주말 내내 잠만 퍼질러 자게 생겼다.',
    '힌트를 주자.',
    '(야. 이건 어때?)',
    'sung ?',
    {
      Choice: {
        Dialog: '',
        Yes: {
          Text: '펫플',
          Do: 'jump Yes7',
        },
        No: {
          Text: '야옹멍멍귀여워',
          Do: 'jump normalEnd02_2',
        },
      },
    },
  ],

  Yes7: [
    '(펫플 어때?)',
    'sung 펫플?',
    'sung 그거 나 고딩때 망한 서비스 이름인데.',
    '(그래서 말한거야.)',
    '(버려진 브랜드는 3년이 지난 후에 누구나 사용할 수 있거든.)',
    '(먼저 가져가는 사람이 임자가 되는거지.)',
    'show messege Tmi4',
    'sung 뭐? 정말?',
    '(그럼 내가 거짓말하는거 봤어?)',
    'show character sung happy_tired',
    'sung 응!',
    '(됐어 때려쳐.)',
    'sung 헤헤 장난장난. 그럼 내일 좀 더 알아보고 오늘은 이만 자야겠다.',
    'show character sung smile',
    'sung 고마워 ㅎ',
    '...',
    '나는...',
    {
      Choice: {
        Dialog: '',
        Yes: {
          Text: '잘자',
          Do: 'jump goodEnd02_1',
        },
        No: {
          Text: '그래',
          Do: 'jump goodEnd02_2',
        },
      },
    },
  ],

  normalEnd02_2: [
    '(야옹멍멍귀여워)',
    'sung ...',
    '(...)',
    '어쩐지 경멸의 시선이 느껴지는것 같다.',
    'sung 에휴.',
    '(아이디어가.. 안 떠오르는것 같아서..)',
    'sung 그거 EBS에서 방영하는 프로그램 이름 이미 있어.',
    '(그...래? 몰랐네..)',
    'sung 됐다.. 피곤한데 잠이나 잘래.',
    'hide character sung too_tired',
    '그녀는 침대에 몸을 던졌다.',
    'show scene url("assets/scenes/end.png") with fadeIn',
    '',
    'sung 잘자.',
    '',
    'Episode 02, Normal Ending, 고단한 하루',
    'end',
  ],

  goodEnd02_1: [
    '(..잘자)',
    'sung 너도',
    'show scene url("assets/scenes/end.png") with fadeIn',
    'Episode 02, Good Ending, 꿈을 향해',
    'end',
  ],

  goodEnd02_2: [
    '(..그래)',
    'sung (무뚝뚝하기는 ㅎ)',
    'show scene url("assets/scenes/end.png") with fadeIn',
    'Episode 02, Good Ending, 꿈을 향해',
    'end',
  ],
});
