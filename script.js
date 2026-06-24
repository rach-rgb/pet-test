const questions = [
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
];

const resultProfiles = {
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
};

const axisPairs = [
  ["E", "I"],
  ["S", "N"],
  ["T", "F"],
  ["J", "P"]
];

const introView = document.querySelector("#intro-view");
const quizView = document.querySelector("#quiz-view");
const resultView = document.querySelector("#result-view");
const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const copyLinkButton = document.querySelector("#copy-link-button");
const shareImageButton = document.querySelector("#share-image-button");
const downloadImageButton = document.querySelector("#download-image-button");
const questionTitle = document.querySelector("#question-title");
const choiceGrid = document.querySelector("#choice-grid");
const progressLabel = document.querySelector("#progress-label");
const progressBar = document.querySelector("#progress-bar");
const resultType = document.querySelector("#result-type");
const resultTitle = document.querySelector("#result-title");
const resultDescription = document.querySelector("#result-description");
const traitList = document.querySelector("#trait-list");
const shareNote = document.querySelector("#share-note");
const shareCanvas = document.querySelector("#share-canvas");

let currentQuestion = 0;
let scores = {};
let currentResult = null;

function showView(view) {
  [introView, quizView, resultView].forEach((section) => {
    section.classList.toggle("is-hidden", section !== view);
  });
}

function startQuiz() {
  currentQuestion = 0;
  scores = {};
  currentResult = null;
  shareNote.textContent = "";
  history.replaceState(null, "", location.pathname);
  showView(quizView);
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentQuestion];
  progressLabel.textContent = `${currentQuestion + 1} / ${questions.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
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
  if (currentQuestion < questions.length) {
    renderQuestion();
    return;
  }

  showResult(calculateType());
}

function calculateType() {
  return axisPairs
    .map(([left, right]) => (scores[left] || 0) >= (scores[right] || 0) ? left : right)
    .join("");
}

function showResult(type) {
  const profile = resultProfiles[type] || resultProfiles.INFP;
  currentResult = {
    type,
    title: profile[0],
    description: profile[1],
    traits: profile[2]
  };

  resultType.textContent = currentResult.type;
  resultTitle.textContent = currentResult.title;
  resultDescription.textContent = currentResult.description;
  traitList.replaceChildren();
  currentResult.traits.forEach((trait) => {
    const item = document.createElement("li");
    item.textContent = trait;
    traitList.append(item);
  });

  const url = new URL(location.href);
  url.searchParams.set("type", type);
  history.replaceState(null, "", url);
  showView(resultView);
}

async function copyResultLink() {
  const url = new URL(location.href);
  if (currentResult) {
    url.searchParams.set("type", currentResult.type);
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

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
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
  const image = await loadImage("assets/cat-mascot.png");

  context.clearRect(0, 0, shareCanvas.width, shareCanvas.height);
  context.fillStyle = "#fffdf8";
  context.fillRect(0, 0, 1200, 1200);
  context.fillStyle = "#d9f0ec";
  context.fillRect(0, 0, 1200, 365);
  context.fillStyle = "#fff3d8";
  context.fillRect(0, 920, 1200, 280);

  context.drawImage(image, 100, 92, 430, 430);

  context.fillStyle = "#167f83";
  context.font = "700 34px Arial";
  context.fillText("Cat Habit Type", 610, 155);

  context.fillStyle = "#f46f61";
  context.font = "900 132px Arial";
  context.fillText(currentResult.type, 610, 290);

  context.fillStyle = "#202124";
  context.font = "900 56px Arial";
  wrapText(context, currentResult.title, 610, 374, 470, 66, 2);

  context.fillStyle = "#60656f";
  context.font = "700 34px Arial";
  wrapText(context, currentResult.description, 100, 650, 1000, 52, 5);

  context.fillStyle = "#167f83";
  context.font = "900 32px Arial";
  context.fillText(currentResult.traits.map((trait) => `#${trait}`).join("   "), 100, 1010);

  context.fillStyle = "#202124";
  context.font = "700 30px Arial";
  context.fillText("우리 고양이 MBTI 테스트", 100, 1090);

  return new Promise((resolve) => {
    shareCanvas.toBlob(resolve, "image/png", 0.95);
  });
}

async function shareResultImage() {
  const blob = await createResultBlob();
  const file = new File([blob], `cat-mbti-${currentResult.type}.png`, { type: "image/png" });
  const url = new URL(location.href);
  url.searchParams.set("type", currentResult.type);

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        title: "우리 고양이 MBTI 테스트",
        text: `우리 고양이는 ${currentResult.type}, ${currentResult.title}!`,
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
  link.download = `cat-mbti-${currentResult.type}.png`;
  link.click();
  URL.revokeObjectURL(url);
  shareNote.textContent = "결과 이미지를 저장했어요.";
}

function bootFromUrl() {
  const type = new URLSearchParams(location.search).get("type");
  if (type && resultProfiles[type.toUpperCase()]) {
    showResult(type.toUpperCase());
    return;
  }
  showView(introView);
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);
copyLinkButton.addEventListener("click", copyResultLink);
shareImageButton.addEventListener("click", shareResultImage);
downloadImageButton.addEventListener("click", downloadResultImage);
bootFromUrl();
