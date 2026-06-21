const questions = [
  ["关系基础", "你们在一起的时间大概是？", [["不到3个月", 1], ["3个月到1年", 2], ["1年以上", 3], ["多年且共同经历很多", 4]]],
  ["关系基础", "分手前，你们的感情基础整体如何？", [["一直很消耗", 1], ["好坏反复", 2], ["大多数时候稳定", 3], ["很深但后来失控", 4]]],
  ["关系基础", "你们是否有共同朋友、共同生活圈或现实连接？", [["几乎没有", 1], ["有一点", 2], ["比较多", 3], ["很难完全断开", 4]]],
  ["关系基础", "对方曾经对这段关系的投入程度是？", [["明显很少", 1], ["不太稳定", 2], ["正常投入", 3], ["投入很深", 4]]],
  ["关系基础", "分手时，对方是否说过否定整段关系的话？", [["说得很绝", 1], ["有一些", 2], ["没有特别否定", 3], ["还承认有感情", 4]]],
  ["关系基础", "你们之间是否存在严重原则问题？", [["有且很难修复", 1], ["有但可解释", 2], ["主要是冲突积累", 3], ["没有原则问题", 4]]],
  ["分手状态", "你们分开多久了？", [["不到7天", 2], ["1周到1个月", 4], ["1到3个月", 3], ["超过3个月", 1]]],
  ["分手状态", "目前你们的联系方式状态是？", [["互相拉黑", 1], ["单方拉黑", 2], ["还能联系但冷淡", 3], ["偶尔自然互动", 4]]],
  ["分手状态", "分手后你是否频繁解释、求和或追问？", [["非常频繁", 1], ["有过几次", 2], ["比较克制", 3], ["基本没有施压", 4]]],
  ["分手状态", "对方现在对你动态的反应是？", [["完全无反应", 1], ["偶尔看但不互动", 2], ["有轻微互动", 3], ["会主动回应", 4]]],
  ["分手状态", "你们最近一次沟通的氛围如何？", [["很僵或争吵", 1], ["礼貌但冷", 2], ["能正常说话", 3], ["有轻微情绪波动", 4]]],
  ["分手状态", "对方是否明确说过不要再联系？", [["明确且反复说", 1], ["说过一次", 2], ["没有明确说", 3], ["反而留下余地", 4]]],
  ["阻碍因素", "分手主要原因更接近哪一种？", [["背叛/欺骗/原则问题", 1], ["现实压力", 2], ["长期沟通失败", 3], ["一时情绪爆发", 4]]],
  ["阻碍因素", "是否有新欢或强烈暧昧对象介入？", [["已经确定有", 1], ["疑似有", 2], ["不清楚", 3], ["基本没有", 4]]],
  ["阻碍因素", "你们最大的问题是否已经被你看清楚？", [["还很混乱", 1], ["知道一点", 2], ["基本清楚", 3], ["能说出具体改变方案", 4]]],
  ["阻碍因素", "你目前的情绪稳定程度是？", [["经常崩溃", 1], ["时好时坏", 2], ["基本能控制", 3], ["已经比较稳定", 4]]],
  ["阻碍因素", "对方最介意你的点，你是否真的改变了一些？", [["没有", 1], ["只是嘴上知道", 2], ["有一点行动", 3], ["能持续做到", 4]]],
  ["阻碍因素", "你想复合更多是因为爱，还是不甘心？", [["主要不甘心", 1], ["不甘心更多", 2], ["都有", 3], ["更像认真选择", 4]]],
  ["复联时机", "如果你现在发消息，对方大概率会？", [["不回或反感", 1], ["很慢很短", 2], ["礼貌回复", 3], ["愿意继续聊", 4]]],
  ["复联时机", "你是否已经停止用低姿态求对方回头？", [["完全没有", 1], ["正在努力", 2], ["基本停止", 3], ["已经恢复边界感", 4]]],
  ["复联时机", "你们有没有一个自然的联系理由？", [["没有", 1], ["很牵强", 2], ["有但要谨慎", 3], ["有自然场景", 4]]],
  ["复联时机", "对方是否还保留你的物品、共同回忆或承诺连接？", [["没有", 1], ["不清楚", 2], ["有一些", 3], ["很明显还保留", 4]]],
  ["复联时机", "你能不能接受先恢复普通联系，而不是马上谈复合？", [["不能", 1], ["会很难", 2], ["可以试试", 3], ["完全可以", 4]]],
  ["复联时机", "你是否能承受复联后没有立刻变好的结果？", [["承受不了", 1], ["会很受影响", 2], ["有心理准备", 3], ["可以稳住", 4]]],
  ["修复空间", "对方是否曾经主动表达过舍不得？", [["没有", 1], ["很少", 2], ["表达过", 3], ["多次表达过", 4]]],
  ["修复空间", "你们之间是否还有未完成的对话？", [["没有，已经说死了", 1], ["有但很难开口", 2], ["有一些", 3], ["明显还有话没说完", 4]]],
  ["修复空间", "你能不能把复合目标拆成小步骤？", [["只想立刻复合", 1], ["不太会", 2], ["可以接受慢慢来", 3], ["能做阶段计划", 4]]],
  ["修复空间", "你们的现实问题是否有解决办法？", [["没有", 1], ["短期很难", 2], ["需要时间", 3], ["已有可行方案", 4]]],
  ["修复空间", "如果复合，你能否避免重演旧问题？", [["大概率不行", 1], ["不确定", 2], ["可以改善一部分", 3], ["已有清晰改变", 4]]],
  ["修复空间", "对方身边人对你们复合的态度可能是？", [["强烈反对", 1], ["不看好", 2], ["中立", 3], ["可能支持", 4]]],
  ["自我状态", "你现在是否把生活重心完全放在对方身上？", [["几乎全部", 1], ["大部分", 2], ["一半左右", 3], ["已经拉回自己", 4]]],
  ["自我状态", "你是否能客观看到这段关系不适合的地方？", [["完全看不到", 1], ["不太愿意看", 2], ["能看到一些", 3], ["能清醒评估", 4]]],
  ["自我状态", "你是否愿意接受测试结果不是你想听的答案？", [["很难接受", 1], ["会难过", 2], ["可以参考", 3], ["能理性判断", 4]]],
  ["自我状态", "你现在最需要的是？", [["马上得到答案", 1], ["对方回消息", 2], ["稳定情绪", 3], ["判断是否值得修复", 4]]],
  ["自我状态", "如果结果建议暂缓联系，你能做到吗？", [["做不到", 1], ["可能忍不住", 2], ["可以短期做到", 3], ["能严格执行", 4]]],
  ["自我状态", "你希望复合后关系变成什么样？", [["只要回来就好", 1], ["先回来再说", 2], ["比以前少吵架", 3], ["建立更成熟的关系", 4]]],
];

const state = {
  index: 0,
  answers: Array(questions.length).fill(null),
};

const $ = (id) => document.getElementById(id);

const hero = $("hero");
const quiz = $("quiz");
const result = $("result");
const questionText = $("questionText");
const questionTag = $("questionTag");
const options = $("options");
const stepText = $("stepText");
const percentText = $("percentText");
const progressBar = $("progressBar");
const nextBtn = $("nextBtn");
const backBtn = $("backBtn");
const questionIcon = $("questionIcon");

const tagIcons = {
  关系基础: "icon-heart",
  分手状态: "icon-message",
  阻碍因素: "icon-shield",
  复联时机: "icon-clock",
  修复空间: "icon-chart",
  自我状态: "icon-spark",
};

const dimensionIcons = {
  关系基础: "icon-heart",
  当前状态: "icon-message",
  阻碍因素: "icon-shield",
  复联时机: "icon-clock",
  修复空间: "icon-chart",
  自我稳定: "icon-spark",
};

function show(view) {
  [hero, quiz, result].forEach((el) => el.classList.add("hidden"));
  view.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const [tag, text, choices] = questions[state.index];
  const percent = Math.round(((state.index + 1) / questions.length) * 100);

  questionTag.textContent = tag;
  questionIcon.innerHTML = `<use href="#${tagIcons[tag] || "icon-heart"}"></use>`;
  questionText.textContent = text;
  stepText.textContent = `第 ${state.index + 1} 题 / ${questions.length} 题`;
  percentText.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
  backBtn.disabled = state.index === 0;
  nextBtn.textContent = state.index === questions.length - 1 ? "查看结果" : "下一题";
  nextBtn.disabled = state.answers[state.index] === null;

  options.innerHTML = "";
  choices.forEach(([label, value], choiceIndex) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.innerHTML = `
      <span class="choice-index">${String.fromCharCode(65 + choiceIndex)}</span>
      <span class="option-text">${label}</span>
      <svg class="icon option-check"><use href="#icon-check"></use></svg>
    `;
    if (state.answers[state.index] === value) button.classList.add("selected");
    button.addEventListener("click", () => {
      state.answers[state.index] = value;
      renderQuestion();
    });
    options.appendChild(button);
  });
}

function getScores() {
  const total = state.answers.reduce((sum, value) => sum + value, 0);
  const score = Math.round(((total - questions.length) / (questions.length * 3)) * 100);
  const groups = {
    relationship: state.answers.slice(0, 6),
    status: state.answers.slice(6, 12),
    blockers: state.answers.slice(12, 18),
    timing: state.answers.slice(18, 24),
    repair: state.answers.slice(24, 30),
    self: state.answers.slice(30, 36),
  };

  const avg = (items) => Math.round(((items.reduce((a, b) => a + b, 0) - items.length) / (items.length * 3)) * 100);
  return {
    score,
    relationship: avg(groups.relationship),
    status: avg(groups.status),
    blockers: avg(groups.blockers),
    timing: avg(groups.timing),
    repair: avg(groups.repair),
    self: avg(groups.self),
  };
}

function getStage(score) {
  if (score >= 76) {
    return ["温和修复期", "你们之间仍有较强连接，适合从轻量、自然、低压力的互动开始。重点不是立刻谈复合，而是让关系重新安全起来。"];
  }
  if (score >= 58) {
    return ["冷却观察期", "这段关系还有可观察空间，但现在需要控制节奏。过早摊牌容易增加压力，先稳定自己，再寻找自然联系点。"];
  }
  if (score >= 40) {
    return ["谨慎修复期", "复合并非完全没有可能，但阻碍比较明显。你现在更需要判断这段关系值不值得修复，而不是急着追回对方。"];
  }
  return ["止损整理期", "当前关系压力较高，贸然复联可能加重消耗。先把情绪、边界和现实问题整理清楚，会比立刻行动更重要。"];
}

function lowestDimension(scores) {
  const items = [
    ["关系基础", scores.relationship],
    ["当前状态", scores.status],
    ["阻碍因素", scores.blockers],
    ["复联时机", scores.timing],
    ["修复空间", scores.repair],
    ["自我稳定", scores.self],
  ];
  return items.sort((a, b) => a[1] - b[1])[0][0];
}

function renderResult() {
  const scores = getScores();
  const [stage, summary] = getStage(scores.score);
  const blocker = lowestDimension(scores);

  $("scoreValue").textContent = scores.score;
  $("stageTitle").textContent = stage;
  $("stageSummary").textContent = summary;
  $("blockerText").textContent = blocker;
  $("strategyText").textContent = scores.score >= 58 ? "低压复联" : "先稳情绪";
  $("timingText").textContent = scores.timing >= 65 ? "可以轻量试探" : "建议暂缓";

  $("dimensionList").innerHTML = [
    ["关系基础", scores.relationship],
    ["当前状态", scores.status],
    ["阻碍因素", scores.blockers],
    ["复联时机", scores.timing],
    ["修复空间", scores.repair],
    ["自我稳定", scores.self],
  ]
    .map(
      ([name, value]) =>
        `<div class="dimension-item"><span><svg class="icon"><use href="#${dimensionIcons[name]}"></use></svg>${name}</span><strong>${value}/100</strong></div>`,
    )
    .join("");

  $("adviceText").textContent =
    scores.score >= 58
      ? "先用 2-3 天恢复自己的生活节奏，再选择一个自然、无压力的理由开启联系。不要一上来谈复合，也不要追问对方态度，把目标放在恢复舒适感。"
      : "未来 7 天先不要做高情绪动作，包括连续发长消息、翻旧账、求保证。你真正要做的是写清楚分手原因、自己的可改变点，以及这段关系是否仍值得修复。";

  $("scriptText").textContent =
    scores.timing >= 65
      ? "最近看到一个东西突然想到你，没什么特别的事，就是想问问你最近还好吗。"
      : "这段时间我也冷静了不少，之前有些地方确实处理得不好。先不打扰你，只是想把这句话认真说完。";

  $("lockedCard").classList.remove("hidden");
  $("fullReport").classList.add("hidden");
  show(result);
}

function toast(message) {
  const box = $("toast");
  box.textContent = message;
  box.classList.remove("hidden");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => box.classList.add("hidden"), 2600);
}

$("startBtn").addEventListener("click", () => {
  renderQuestion();
  show(quiz);
});

backBtn.addEventListener("click", () => {
  if (state.index > 0) {
    state.index -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (state.index < questions.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    renderResult();
  }
});

$("unlockBtn").addEventListener("click", () => {
  $("lockedCard").classList.add("hidden");
  $("fullReport").classList.remove("hidden");
  toast("完整报告已解锁。真实上线时这里接微信支付或H5支付。");
});

$("restartBtn").addEventListener("click", () => {
  state.index = 0;
  state.answers.fill(null);
  show(hero);
});

$("shareBtn").addEventListener("click", async () => {
  const score = $("scoreValue").textContent;
  const text = `我刚测了「复合可能性测试」，当前复合指数 ${score}/100。你们还有可能吗？`;
  try {
    await navigator.clipboard.writeText(text);
    toast("分享文案已复制");
  } catch {
    toast(text);
  }
});
