const overviewBase = [
  "国产化替代",
  "多人在线编辑",
  "全文评论",
  "划词评论",
  "历史版本",
  "基线管理",
  "模板复用",
  "全文检索",
];

const overviewCore = [
  { text: "知识组织", tone: "indigo" },
  { text: "知识社区", tone: "teal" },
  { text: "知识搜索", tone: "violet", main: true },
  { text: "协同共创", tone: "blue" },
  { text: "DevOps\n融合", tone: "royal" },
];

const overviewScenes = [
  "组织知识库建设",
  "项目文档管理",
  "研发过程文档管理",
  "私密文档协作",
  "跨部门知识共创",
  "旧工具替换迁移",
];

const overviewValues = [
  {
    title: "国产化与安全可控",
    body: "完全自主研发，支持企业在安全合规前提下完成知识库平台国产化替代。",
  },
  {
    title: "与 DevOps 深度融合",
    body: "支持知识库与需求、项目、测试等研发对象双向关联，让知识沉淀进入研发主流程。",
  },
  {
    title: "协同体验友好",
    body: "支持多人实时协同、自动保存、评论批阅与版本追溯，提升团队知识共创效率。",
  },
  {
    title: "组织与权限灵活",
    body: "支持组织级、项目级知识库建设，支持页面树管理、页面私密权限与协作者机制。",
  },
  {
    title: "内容承载与开放扩展",
    body: "支持流程图、思维导图等丰富内容插入，并可对接第三方系统与智能体能力。",
  },
  {
    title: "平滑迁移与持续建设",
    body: "支持 Markdown、Word 及旧系统数据迁移，帮助企业低成本完成知识库切换与演进。",
  },
];

const scenarios = [
  "组织知识库建设",
  "项目文档管理",
  "研发过程文档管理",
  "多人协同编辑",
  "文档评审与批阅",
  "文档模板与规范管理",
  "文档基线管理",
  "私密文档管理",
  "跨部门协作",
  "旧工具数据迁移",
];

const capabilities = [
  {
    title: "知识库管理",
    cols: 2,
    items: ["知识库空间管理", "组织级知识库", "项目级知识库", "页面树管理", "页面移动/复制", "知识分类整理", "文档模板", "知识库设置"],
  },
  {
    title: "文档编辑",
    cols: 2,
    items: ["富文本编辑", "多人在线协同", "实时保存", "自动保存", "历史版本", "版本对比", "基线命名", "在线预览"],
  },
  {
    title: "评论与协作",
    cols: 1,
    items: ["全文评论", "划词评论", "评论回复", "已解决标记", "协作者机制", "跨部门协作", "文档批阅", "知识共创"],
  },
  {
    title: "权限管理",
    cols: 1,
    items: ["组织架构授权", "角色权限管理", "页面级权限", "私密页面", "父子页面权限继承", "敏感内容隔离"],
  },
  {
    title: "内容能力",
    cols: 1,
    items: ["思维导图", "流程图", "第三方内容插入", "富媒体内容承载", "页面内容扩展", "业务信息集成"],
  },
  {
    title: "检索与复用",
    cols: 1,
    items: ["全文检索", "标题检索", "内容检索", "附件检索", "模板复用", "结构化查询"],
  },
  {
    title: "数据迁移",
    cols: 1,
    items: ["Markdown导入", "Word导入", "存量文档迁移", "旧系统数据迁移", "定制迁移方案"],
  },
];

const integrations = ["DevOps平台集成", "需求管理关联", "项目管理关联", "测试管理关联", "第三方系统对接", "OA系统对接", "开放扩展能力", "MCP智能体对接"];

function createPill(text, className = "pill") {
  const pill = document.createElement("div");
  pill.className = className;
  pill.textContent = text;
  return pill;
}

function renderOverviewBase() {
  const wrap = document.getElementById("base-pills");
  overviewBase.forEach((item) => wrap.appendChild(createPill(item, "mini-pill")));
}

function renderOverviewCore() {
  const wrap = document.getElementById("core-hexes");
  overviewCore.forEach((item) => {
    const node = document.createElement("div");
    node.className = `hex-node tone-${item.tone}${item.main ? " is-main" : ""}`;
    node.innerHTML = `<span>${item.text.replace("\n", "<br />")}</span>`;
    wrap.appendChild(node);
  });
}

function renderOverviewScenes() {
  const wrap = document.getElementById("overview-scenes");
  overviewScenes.forEach((item) => wrap.appendChild(createPill(item, "scene-pill")));
}

function renderOverviewValues() {
  const wrap = document.getElementById("value-grid");
  overviewValues.forEach((item) => {
    const card = document.createElement("article");
    card.className = "value-card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    `;
    wrap.appendChild(card);
  });
}

function renderScenarios() {
  const wrap = document.getElementById("scenario-pills");
  scenarios.forEach((item) => wrap.appendChild(createPill(item)));
}

function renderCapabilities() {
  const grid = document.getElementById("capability-grid");
  capabilities.forEach((group) => {
    const panel = document.createElement("section");
    panel.className = `cap-panel cols-${group.cols}`;

    const title = document.createElement("h3");
    title.textContent = group.title;
    panel.appendChild(title);

    const list = document.createElement("div");
    list.className = "pill-list";
    group.items.forEach((item) => list.appendChild(createPill(item)));
    panel.appendChild(list);

    grid.appendChild(panel);
  });
}

function renderSideData(id, items) {
  const wrap = document.getElementById(id);
  items.forEach((item) => wrap.appendChild(createPill(item)));
}

renderOverviewBase();
renderOverviewCore();
renderOverviewScenes();
renderOverviewValues();
renderScenarios();
renderCapabilities();
renderSideData("integration-pills", integrations);
