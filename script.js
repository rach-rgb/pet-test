const tests = {
  mbti: {
    id: "mbti",
    eyebrow: "Cat Habit Type",
    title: "우리 고양이 MBTI",
    lead: "평소 습성을 고르면 성향 코드와 집사 맞춤 해석을 보여드려요.",
    resultLabel: "Result",
    shareTitle: "우리 고양이 MBTI 테스트",
    filePrefix: "cat-mbti",
    defaultResult: "INFP",
    questions: [
      {
        text: "처음 온 손님이 집에 들어왔을 때 우리 고양이는?",
        choices: [
          { text: "멀리서도 궁금해서 슬쩍 다가간다", scores: { E: 1 } },
          { text: "안전한 곳에 숨어 상황을 지켜본다", scores: { I: 1 } }
        ]
      },
      {
        text: "하루 중 가장 좋아하는 시간은?",
        choices: [
          { text: "집사와 놀거나 말을 거는 시간", scores: { E: 1 } },
          { text: "혼자 조용히 쉬거나 창밖을 보는 시간", scores: { I: 1 } }
        ]
      },
      {
        text: "새 장난감을 꺼냈을 때 반응은?",
        choices: [
          { text: "사용법을 파악하듯 냄새부터 꼼꼼히 맡는다", scores: { S: 1 } },
          { text: "일단 뛰어들고 새로운 놀이법을 만든다", scores: { N: 1 } }
        ]
      },
      {
        text: "가구 배치가 바뀌면?",
        choices: [
          { text: "바뀐 위치를 하나씩 확인한 뒤 적응한다", scores: { S: 1 } },
          { text: "새로운 동선과 숨을 곳을 바로 탐험한다", scores: { N: 1 } }
        ]
      },
      {
        text: "집사가 바쁠 때 고양이는?",
        choices: [
          { text: "필요하면 딱 요구하고 안 되면 자기 일을 한다", scores: { T: 1 } },
          { text: "곁에 붙어 기분을 살피거나 관심을 기다린다", scores: { F: 1 } }
        ]
      },
      {
        text: "간식 시간이 늦어졌을 때는?",
        choices: [
          { text: "분명하게 항의하고 해결될 때까지 요구한다", scores: { T: 1 } },
          { text: "서운한 표정으로 집사 주변을 맴돈다", scores: { F: 1 } }
        ]
      },
      {
        text: "평소 생활 리듬은 어떤 편인가요?",
        choices: [
          { text: "자는 자리, 밥 시간, 순찰 코스가 꽤 일정하다", scores: { J: 1 } },
          { text: "그날 기분에 따라 자고 놀고 숨는 곳이 바뀐다", scores: { P: 1 } }
        ]
      },
      {
        text: "문이 닫혀 있으면?",
        choices: [
          { text: "정해진 권리처럼 열어 달라고 요구한다", scores: { J: 1 } },
          { text: "잠깐 시도하다가 다른 흥밋거리를 찾는다", scores: { P: 1 } }
        ]
      },
      {
        text: "우다다 시간이 찾아오면?",
        choices: [
          { text: "집사도 알 수 있을 만큼 패턴이 있다", scores: { S: 1, J: 1 } },
          { text: "예고 없이 시작하고 예고 없이 끝난다", scores: { N: 1, P: 1 } }
        ]
      },
      {
        text: "집사에게 애정을 표현하는 방식은?",
        choices: [
          { text: "옆에 와서 부비고 골골송으로 알려준다", scores: { E: 1, F: 1 } },
          { text: "같은 공간에 조용히 머무는 것으로 충분하다", scores: { I: 1, T: 1 } }
        ]
      }
    ],
    calculate(scores) {
      return [
        ["E", "I"],
        ["S", "N"],
        ["T", "F"],
        ["J", "P"]
      ].map(([left, right]) => (scores[left] || 0) >= (scores[right] || 0) ? left : right).join("");
    },
    profiles: {
      ISTJ: ["정시 순찰 관리자", "루틴과 영역을 중요하게 여기는 침착한 고양이예요. 안정된 환경에서 가장 편안해하고, 정해진 규칙이 깨지면 바로 알아차립니다.", ["규칙적", "관찰형", "신중함"]],
      ISFJ: ["다정한 담요 수호자", "조용하지만 집사의 기분을 잘 살피는 타입이에요. 익숙한 공간과 사람에게 깊게 마음을 주고, 편안한 스킨십을 좋아합니다.", ["온화함", "배려형", "안정 선호"]],
      INFJ: ["창가의 철학자", "혼자만의 시간이 필요하지만 마음을 연 집사에게는 깊은 애착을 보여요. 분위기 변화를 민감하게 느끼는 섬세한 고양이입니다.", ["섬세함", "직관형", "깊은 애착"]],
      INTJ: ["작전 설계 냥박사", "새로운 상황을 조용히 분석하고 가장 효율적인 동선을 찾아내요. 관심 없는 척해도 집안 흐름은 이미 다 파악하고 있습니다.", ["전략적", "독립형", "분석가"]],
      ISTP: ["침착한 사냥 기술자", "필요할 때만 움직이는 실전파예요. 장난감의 약점을 빠르게 파악하고, 혼자 노는 시간도 야무지게 즐깁니다.", ["실전형", "쿨함", "집중력"]],
      ISFP: ["햇살 낮잠 예술가", "기분 좋은 촉감과 편안한 공간을 사랑해요. 자기만의 속도가 분명하고, 마음이 맞는 순간에는 부드럽게 애정을 표현합니다.", ["감각적", "자유로움", "부드러움"]],
      INFP: ["몽글몽글 감성냥", "낯가림이 있어도 속마음은 따뜻한 타입이에요. 집사의 작은 변화에도 반응하고, 자기만의 상상 놀이에 몰입합니다.", ["감성형", "상상력", "조용한 애정"]],
      INTP: ["호기심 많은 연구냥", "이상한 소리, 새 물건, 닫힌 서랍을 그냥 지나치지 못해요. 독립적이지만 궁금한 대상에는 오래 집중하는 탐구형입니다.", ["탐구형", "논리적", "호기심"]],
      ESTP: ["우다다 액션 스타", "일단 뛰고 보는 에너지 넘치는 고양이예요. 놀이 반응이 빠르고, 집안 곳곳을 무대로 삼아 존재감을 보여줍니다.", ["활동적", "순발력", "장난꾸러기"]],
      ESFP: ["집안 분위기 메이커", "관심과 놀이를 즐기는 밝은 타입이에요. 집사가 웃는 포인트를 잘 알고, 순간순간을 신나게 즐깁니다.", ["사교적", "흥부자", "애교"]],
      ENFP: ["상상력 폭발 탐험가", "새로운 놀이와 낯선 공간을 좋아하는 창의적인 고양이예요. 예측 불가한 귀여움으로 집사의 하루를 바꿔놓습니다.", ["창의적", "탐험가", "즉흥적"]],
      ENTP: ["장난 발명가", "하지 말라는 건 왜인지 꼭 확인해보는 타입이에요. 머리가 빠르고 놀이 규칙을 자기 방식대로 바꾸는 재치가 있습니다.", ["재치", "도전적", "영리함"]],
      ESTJ: ["우리집 총괄 매니저", "밥, 문, 화장실, 순찰까지 기준이 분명해요. 원하는 것이 있으면 정확하게 요구하고 집안 질서를 관리합니다.", ["확실함", "관리형", "요구 명확"]],
      ESFJ: ["집사 전담 케어냥", "사람 곁에서 안정감을 얻고 애정 표현도 풍부한 편이에요. 함께 있는 시간을 좋아하고, 가족 구성원의 변화를 잘 알아차립니다.", ["친화적", "다정함", "관계 중심"]],
      ENFJ: ["따뜻한 골골 리더", "애정 표현과 존재감이 모두 큰 타입이에요. 집사를 이끌듯 다가오고, 함께하는 루틴을 행복하게 만듭니다.", ["리더형", "표현력", "따뜻함"]],
      ENTJ: ["카리스마 영역 대표", "자기 영역과 요구가 분명한 고양이예요. 판단이 빠르고 자신감 있게 행동해 집사가 자연스럽게 따르게 됩니다.", ["카리스마", "주도적", "결단력"]]
    }
  },
  "past-life": {
    id: "past-life",
    eyebrow: "Past Life Match",
    title: "고양이 전생 테스트",
    lead: "성격과 기호를 고르면 우리 고양이의 전생 모습을 알려드려요.",
    resultLabel: "전생에 우리 고양이의 직업은?",
    shareTitle: "고양이 전생 테스트",
    filePrefix: "cat-past-life",
    defaultResult: "MOON_LIBRARIAN",
    questions: [
      {
        text: "가장 마음에 들어 하는 자리는?",
        choices: [
          { text: "햇살이 오래 머무는 창가", scores: { calm: 2, noble: 1 } },
          { text: "집 안에서 제일 높은 선반", scores: { bold: 2, noble: 1 } },
          { text: "이불 속이나 박스 안쪽", scores: { cozy: 2, mystery: 1 } },
          { text: "현관과 복도가 한눈에 보이는 곳", scores: { guardian: 2, curious: 1 } }
        ]
      },
      {
        text: "좋아하는 놀이 스타일은?",
        choices: [
          { text: "깃털을 끝까지 추적하는 사냥 놀이", scores: { hunter: 2, bold: 1 } },
          { text: "공이나 장난감을 굴리며 혼자 연구하기", scores: { curious: 2, craft: 1 } },
          { text: "집사와 눈 맞추며 천천히 놀기", scores: { social: 2, cozy: 1 } },
          { text: "갑자기 튀어나와 놀라게 하기", scores: { performer: 2, mystery: 1 } }
        ]
      },
      {
        text: "처음 보는 물건을 발견하면?",
        choices: [
          { text: "냄새부터 맡고 안전을 확인한다", scores: { guardian: 2, calm: 1 } },
          { text: "발로 톡톡 치며 반응을 본다", scores: { curious: 2, craft: 1 } },
          { text: "당당하게 차지하고 앉는다", scores: { noble: 2, bold: 1 } },
          { text: "거리를 두고 신비롭게 관찰한다", scores: { mystery: 2, calm: 1 } }
        ]
      },
      {
        text: "간식 취향에 가장 가까운 것은?",
        choices: [
          { text: "익숙한 맛만 꾸준히 좋아한다", scores: { cozy: 2, calm: 1 } },
          { text: "새로운 맛이면 일단 확인한다", scores: { curious: 2, bold: 1 } },
          { text: "마음에 드는 간식만 고급스럽게 먹는다", scores: { noble: 2, mystery: 1 } },
          { text: "간식보다 주목받는 순간을 즐긴다", scores: { performer: 2, social: 1 } }
        ]
      },
      {
        text: "집사가 늦게 들어오면?",
        choices: [
          { text: "문 앞에서 기다렸다는 듯 확인한다", scores: { guardian: 2, social: 1 } },
          { text: "시큰둥한 척하다가 곧 다가온다", scores: { noble: 1, cozy: 2 } },
          { text: "새벽까지 우다다로 마음을 표현한다", scores: { performer: 2, bold: 1 } },
          { text: "조용히 옆에 와서 존재감을 남긴다", scores: { calm: 2, mystery: 1 } }
        ]
      },
      {
        text: "하루 분위기를 한 단어로 고르면?",
        choices: [
          { text: "느긋함", scores: { calm: 2, cozy: 1 } },
          { text: "모험", scores: { hunter: 1, bold: 2 } },
          { text: "품격", scores: { noble: 2, guardian: 1 } },
          { text: "수수께끼", scores: { mystery: 2, curious: 1 } }
        ]
      },
      {
        text: "집 안에서 맡은 역할은?",
        choices: [
          { text: "모두의 상태를 살피는 관리자", scores: { guardian: 2, social: 1 } },
          { text: "새로운 재미를 만드는 발명가", scores: { craft: 2, curious: 1 } },
          { text: "분위기를 바꾸는 주인공", scores: { performer: 2, noble: 1 } },
          { text: "평화를 지키는 낮잠 전문가", scores: { cozy: 2, calm: 1 } }
        ]
      },
      {
        text: "가장 잘 어울리는 밤의 모습은?",
        choices: [
          { text: "달빛 아래 조용히 생각에 잠긴 모습", scores: { mystery: 2, calm: 1 } },
          { text: "어둠 속을 빠르게 순찰하는 모습", scores: { hunter: 2, guardian: 1 } },
          { text: "폭신한 자리에서 꿈꾸는 모습", scores: { cozy: 2, social: 1 } },
          { text: "혼자만의 무대처럼 뛰어노는 모습", scores: { performer: 2, bold: 1 } }
        ]
      }
    ],
    calculate(scores) {
      const seed = Object.entries(scores).reduce((total, [key, value]) => {
        return total + key.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) * value;
      }, 0);
      const profileKeys = Object.keys(this.profiles);
      const topScore = Math.max(...Object.values(scores));
      const topKeys = Object.keys(scores).filter((key) => scores[key] === topScore).sort();
      const index = (seed + topKeys.join("").length) % profileKeys.length;
      return profileKeys[index];
    },
    profiles: {
      MOON_LIBRARIAN: ["달빛 도서관 사서", "전생에는 조용한 달빛 도서관에서 오래된 이야기를 지키던 존재였어요. 지금도 낯선 소리와 작은 변화에 깊이 귀 기울입니다.", ["관찰력", "고요함", "지혜"]],
      ROYAL_ADVISER: ["왕궁 책사", "사람들이 우왕좌왕할 때 가장 효율적인 길을 알려주던 왕궁의 책사였어요. 지금도 집 안 동선과 규칙을 누구보다 잘 압니다.", ["전략가", "품격", "판단력"]],
      NIGHT_SENTINEL: ["밤의 성문지기", "어둠이 내려오면 성문을 지키던 든든한 수호자였어요. 현관 소리와 복도 움직임에 민감한 이유가 여기에 있습니다.", ["수호본능", "책임감", "침착함"]],
      SUN_PRINCE: ["햇살 왕자", "전생에는 따뜻한 정원에서 사랑받던 왕자였어요. 햇살 좋은 자리와 부드러운 대접을 당연하게 여기는 귀한 타입입니다.", ["자존감", "따뜻함", "여유"]],
      TEA_HOUSE_HOST: ["찻집 주인", "작은 찻집에서 손님을 살피고 분위기를 고르던 주인이었어요. 편안한 공간과 익숙한 사람을 특히 소중히 여깁니다.", ["다정함", "안정감", "센스"]],
      FOREST_RANGER: ["숲의 순찰대장", "숲길과 나무 사이를 오가며 영역을 지키던 순찰대장이었어요. 높은 곳에 올라 집 안을 내려다볼 때 가장 빛납니다.", ["탐색력", "용감함", "영역감"]],
      STAGE_MAGICIAN: ["무대 마술사", "사람들의 시선을 한순간에 빼앗던 마술사였어요. 갑자기 나타나고 사라지는 장난에도 타고난 연출력이 있습니다.", ["장난기", "존재감", "순발력"]],
      HARBOR_CAPTAIN: ["항구 선장", "바람과 파도를 읽으며 항구를 오가던 선장이었어요. 새로운 냄새와 물건에 당당히 접근하는 모험심이 강합니다.", ["모험심", "리더십", "대담함"]],
      SECRET_ALCHEMIST: ["비밀 연금술사", "작은 병과 도구를 살피며 신기한 조합을 만들던 연금술사였어요. 장난감의 원리를 파악하려는 호기심이 남아 있습니다.", ["호기심", "실험정신", "집중력"]],
      CLOUD_PILOT: ["구름 비행사", "하늘길을 누비던 자유로운 비행사였어요. 가끔 예고 없이 우다다를 시작하는 건 아직도 구름길을 달리는 기분이라서예요.", ["자유로움", "속도감", "즉흥성"]],
      GARDEN_POET: ["정원 시인", "꽃과 햇살을 보며 짧은 시를 짓던 시인이었어요. 조용한 애정 표현과 섬세한 취향을 가진 낭만적인 고양이입니다.", ["감성", "섬세함", "낭만"]],
      PALACE_DANCER: ["궁중 무희", "왕궁의 불빛 아래 우아하게 움직이던 무희였어요. 걸음걸이와 꼬리 끝까지 묘하게 시선을 끄는 매력이 있습니다.", ["우아함", "표현력", "리듬감"]],
      MAP_MAKER: ["별자리 지도 제작자", "밤하늘을 보며 길을 그리던 지도 제작자였어요. 낯선 공간도 금세 파악하고 자기만의 경로를 만들어냅니다.", ["공간감", "탐구심", "직관"]],
      BAKERY_TASTER: ["빵집 시식 담당", "따뜻한 빵 냄새가 가득한 가게에서 맛을 감별하던 귀한 손님이었어요. 포근한 자리와 익숙한 맛을 특히 좋아합니다.", ["포근함", "미식가", "평화"]],
      CASTLE_ARCHER: ["성벽 궁수", "높은 성벽에서 멀리까지 살피던 명사수였어요. 작은 움직임도 놓치지 않고 장난감을 정확히 노리는 재능이 있습니다.", ["집중력", "민첩함", "예리함"]],
      MARKET_NEGOTIATOR: ["시장 협상가", "북적이는 시장에서 원하는 것을 똑똑하게 얻어내던 협상가였어요. 간식과 문 열기를 요구할 때 설득력이 남다릅니다.", ["영리함", "표현력", "실속"]],
      TEMPLE_GUARDIAN: ["사원의 수호신", "고요한 사원을 지키며 사람들에게 평온을 주던 수호신이었어요. 조용히 곁에 있는 것만으로 공간의 분위기를 안정시킵니다.", ["평온", "수호", "신비"]],
      CIRCUS_STAR: ["서커스 스타", "박수와 환호를 즐기던 무대의 스타였어요. 집사의 웃음 포인트를 알고 일부러 귀여운 타이밍을 만드는 타입입니다.", ["흥", "재주", "주목도"]],
      VILLAGE_HEALER: ["마을 치유사", "지친 이들의 곁을 지키던 따뜻한 치유사였어요. 집사가 힘든 날을 유난히 잘 알아차리고 가까이 머뭅니다.", ["공감", "온기", "돌봄"]],
      DRAGON_KEEPER: ["용의 친구", "무서운 용도 금세 마음을 열게 하던 담대한 친구였어요. 낯선 상황에서도 묘하게 겁먹지 않는 배짱이 있습니다.", ["배짱", "친화력", "호방함"]],
      WINTER_DUKE: ["겨울 공작", "눈 내리는 성에서 품격 있게 지내던 공작이었어요. 마음에 드는 것과 아닌 것이 분명하고 취향이 고급스럽습니다.", ["품격", "선택적 애정", "차분함"]],
      RIVER_FERRIER: ["강가 뱃사공", "사람들을 안전하게 건네주던 뱃사공이었어요. 집 안의 길목을 지키고 가족의 움직임을 살피는 책임감이 강합니다.", ["안내자", "성실함", "안정"]],
      DREAM_WEAVER: ["꿈 짜는 장인", "밤마다 포근한 꿈을 엮던 장인이었어요. 잠이 많고 이불을 좋아하는 건 아직도 좋은 꿈을 만들기 위해서입니다.", ["상상력", "포근함", "몽글함"]],
      CLOCK_TOWER_KEEPER: ["시계탑 관리인", "정확한 시간에 종을 울리던 관리인이었어요. 밥 시간과 루틴에 엄격한 면이 전생의 직업정신처럼 남았습니다.", ["정확함", "루틴", "성실"]],
      OCEAN_SCHOLAR: ["바다 학자", "파도와 조개껍데기를 연구하던 학자였어요. 물소리, 반짝이는 물건, 낯선 질감에 오래 집중하는 편입니다.", ["연구심", "차분함", "호기심"]],
      FIREWORK_ARTIST: ["불꽃놀이 장인", "밤하늘에 반짝이는 장면을 만들던 예술가였어요. 조용하다가도 갑자기 분위기를 터뜨리는 반전 매력이 있습니다.", ["반전매력", "활기", "창의성"]],
      SILK_MERCHANT: ["비단 상인", "부드러운 비단을 고르던 안목 좋은 상인이었어요. 담요, 쿠션, 옷감의 촉감을 까다롭게 고르는 이유가 있습니다.", ["감각", "취향", "섬세함"]],
      MOUNTAIN_HERMIT: ["산속 은둔 현자", "깊은 산에서 혼자만의 시간을 즐기던 현자였어요. 혼자 쉬는 시간이 충분해야 마음을 열고 다가옵니다.", ["독립심", "통찰", "고요"]],
      ROOFTOP_THIEF: ["지붕 위 의적", "밤의 지붕을 가볍게 건너던 날렵한 의적이었어요. 높은 곳과 숨겨진 길을 찾아내는 재능이 탁월합니다.", ["민첩함", "재치", "모험"]],
      ORCHESTRA_CONDUCTOR: ["고양이 악단 지휘자", "작은 악단을 이끌던 지휘자였어요. 울음소리, 발걸음, 꼬리 움직임으로 집 안 리듬을 조율합니다.", ["리더십", "리듬", "표현"]],
      STAR_INNKEEPER: ["별빛 여관 주인", "여행자들이 쉬어 가던 여관의 주인이었어요. 편안한 분위기를 만들고 좋아하는 사람 곁에 머무는 재능이 있습니다.", ["환대", "안정", "다정함"]],
      GOLDEN_KNIGHT: ["황금 갑옷 기사", "반짝이는 갑옷을 입고 소중한 것을 지키던 기사였어요. 용감하고 충직하지만 칭찬받을 때 더 강해지는 타입입니다.", ["용기", "충직함", "자부심"]]
    }
  }
};

const homeView = document.querySelector("#home-view");
const introView = document.querySelector("#intro-view");
const quizView = document.querySelector("#quiz-view");
const resultView = document.querySelector("#result-view");
const homeButton = document.querySelector("#home-button");
const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const copyLinkButton = document.querySelector("#copy-link-button");
const shareImageButton = document.querySelector("#share-image-button");
const downloadImageButton = document.querySelector("#download-image-button");
const introEyebrow = document.querySelector("#intro-eyebrow");
const introTitle = document.querySelector("#intro-title");
const introLead = document.querySelector("#intro-lead");
const questionTitle = document.querySelector("#question-title");
const choiceGrid = document.querySelector("#choice-grid");
const progressLabel = document.querySelector("#progress-label");
const progressBar = document.querySelector("#progress-bar");
const resultEyebrow = document.querySelector("#result-eyebrow");
const resultType = document.querySelector("#result-type");
const resultTitle = document.querySelector("#result-title");
const resultDescription = document.querySelector("#result-description");
const traitList = document.querySelector("#trait-list");
const shareNote = document.querySelector("#share-note");
const shareCanvas = document.querySelector("#share-canvas");

let activeTest = tests.mbti;
let currentQuestion = 0;
let scores = {};
let currentResult = null;

function showView(view) {
  [homeView, introView, quizView, resultView].forEach((section) => {
    section.classList.toggle("is-hidden", section !== view);
  });
  homeButton.classList.toggle("is-active", view === homeView);
}

function normalizeTestId(testId) {
  return tests[testId] ? testId : "mbti";
}

function openHome() {
  currentResult = null;
  shareNote.textContent = "";
  history.replaceState(null, "", location.pathname);
  showView(homeView);
}

function openIntro(testId) {
  activeTest = tests[normalizeTestId(testId)];
  introEyebrow.textContent = activeTest.eyebrow;
  introTitle.textContent = activeTest.title;
  introLead.textContent = activeTest.lead;
  startButton.textContent = activeTest.id === "past-life" ? "전생 알아보기" : "테스트 시작";
  history.replaceState(null, "", `${location.pathname}?quiz=${activeTest.id}`);
  showView(introView);
}

function startQuiz() {
  currentQuestion = 0;
  scores = {};
  currentResult = null;
  shareNote.textContent = "";
  history.replaceState(null, "", `${location.pathname}?quiz=${activeTest.id}`);
  showView(quizView);
  renderQuestion();
}

function renderQuestion() {
  const question = activeTest.questions[currentQuestion];
  progressLabel.textContent = `${currentQuestion + 1} / ${activeTest.questions.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / activeTest.questions.length) * 100}%`;
  questionTitle.textContent = question.text;
  choiceGrid.replaceChildren();

  question.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = choice.text;
    button.addEventListener("click", () => selectChoice(choice.scores));
    choiceGrid.append(button);
  });
}

function selectChoice(choiceScores) {
  Object.entries(choiceScores).forEach(([key, value]) => {
    scores[key] = (scores[key] || 0) + value;
  });

  currentQuestion += 1;
  if (currentQuestion < activeTest.questions.length) {
    renderQuestion();
    return;
  }

  showResult(activeTest.calculate(scores));
}

function updateResultUrl() {
  if (!currentResult) {
    return;
  }

  const url = new URL(location.href);
  url.searchParams.set("quiz", activeTest.id);
  url.searchParams.set("type", currentResult.type);
  url.searchParams.delete("cat");
  history.replaceState(null, "", url);
}

function showResult(type) {
  const profile = activeTest.profiles[type] || activeTest.profiles[activeTest.defaultResult];
  currentResult = {
    type,
    title: profile[0],
    description: profile[1],
    traits: profile[2]
  };

  resultEyebrow.textContent = activeTest.resultLabel;
  resultType.textContent = activeTest.id === "past-life" ? currentResult.title : currentResult.type;
  resultTitle.textContent = activeTest.id === "past-life" ? "" : currentResult.title;
  resultDescription.textContent = currentResult.description;
  traitList.replaceChildren();
  currentResult.traits.forEach((trait) => {
    const item = document.createElement("li");
    item.textContent = trait;
    traitList.append(item);
  });

  updateResultUrl();
  showView(resultView);
}

async function copyResultLink() {
  const url = new URL(location.href);
  if (currentResult) {
    url.searchParams.set("quiz", activeTest.id);
    url.searchParams.set("type", currentResult.type);
    url.searchParams.delete("cat");
  }

  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(url.toString());
  } else {
    const input = document.createElement("input");
    input.value = url.toString();
    document.body.append(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }
  shareNote.textContent = "결과 링크를 복사했어요.";
}

function wrapText(context, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  const words = text.split(" ");
  const lines = [];
  let line = "";

  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;
    if (context.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = testLine;
    }
  });
  lines.push(line);

  lines.slice(0, maxLines).forEach((lineText, index) => {
    context.fillText(lineText, x, y + index * lineHeight);
  });
}

async function createResultBlob() {
  const context = shareCanvas.getContext("2d");

  context.clearRect(0, 0, shareCanvas.width, shareCanvas.height);
  context.fillStyle = "#fffdf8";
  context.fillRect(0, 0, 1200, 1200);
  context.fillStyle = "#d9f0ec";
  context.fillRect(0, 0, 1200, 365);
  context.fillStyle = "#fff3d8";
  context.fillRect(0, 920, 1200, 280);

  context.fillStyle = "#167f83";
  context.font = "700 34px Arial";
  context.fillText(activeTest.eyebrow, 100, 160);

  context.fillStyle = "#f46f61";
  context.font = activeTest.id === "past-life" ? "900 92px Arial" : "900 132px Arial";
  wrapText(context, activeTest.id === "past-life" ? currentResult.title : currentResult.type, 100, 300, 980, 100, 2);

  context.fillStyle = "#202124";
  context.font = "900 52px Arial";
  wrapText(context, activeTest.id === "past-life" ? "우리 고양이의 전생" : currentResult.title, 100, 470, 980, 62, 2);

  context.fillStyle = "#60656f";
  context.font = "700 34px Arial";
  wrapText(context, currentResult.description, 100, 650, 1000, 52, 5);

  context.fillStyle = "#167f83";
  context.font = "900 32px Arial";
  context.fillText(currentResult.traits.map((trait) => `#${trait}`).join("   "), 100, 1010);

  context.fillStyle = "#202124";
  context.font = "700 30px Arial";
  context.fillText(activeTest.shareTitle, 100, 1090);

  return new Promise((resolve) => {
    shareCanvas.toBlob(resolve, "image/png", 0.95);
  });
}

async function shareResultImage() {
  const blob = await createResultBlob();
  const file = new File([blob], `${activeTest.filePrefix}-${currentResult.type}.png`, { type: "image/png" });

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        title: activeTest.shareTitle,
        text: activeTest.id === "past-life"
          ? `우리 고양이의 전생은 ${currentResult.title}!`
          : `우리 고양이는 ${currentResult.type}, ${currentResult.title}!`,
        files: [file]
      });
      shareNote.textContent = "공유 창을 열었어요.";
      return;
    } catch (error) {
      if (error.name === "AbortError") {
        shareNote.textContent = "공유를 취소했어요.";
        return;
      }
    }
  }

  await copyResultLink();
  shareNote.textContent = "이 브라우저는 이미지 직접 공유를 지원하지 않아 결과 링크를 복사했어요.";
}

async function downloadResultImage() {
  const blob = await createResultBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${activeTest.filePrefix}-${currentResult.type}.png`;
  link.click();
  URL.revokeObjectURL(url);
  shareNote.textContent = "결과 이미지를 저장했어요.";
}

function bootFromUrl() {
  const params = new URLSearchParams(location.search);
  const testId = normalizeTestId(params.get("quiz"));
  const rawType = params.get("type");
  activeTest = tests[testId];

  const normalizedType = activeTest.id === "past-life" ? rawType : rawType?.toUpperCase();
  if (normalizedType && activeTest.profiles[normalizedType]) {
    showResult(normalizedType);
    return;
  }

  if (params.get("quiz")) {
    openIntro(testId);
    return;
  }

  showView(homeView);
}

document.querySelectorAll("[data-start-test]").forEach((button) => {
  button.addEventListener("click", () => openIntro(button.dataset.startTest));
});
homeButton.addEventListener("click", openHome);
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);
copyLinkButton.addEventListener("click", copyResultLink);
shareImageButton.addEventListener("click", shareResultImage);
downloadImageButton.addEventListener("click", downloadResultImage);
bootFromUrl();
