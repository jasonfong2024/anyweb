const overviewItems = [
  {
    title: "支持知识库国产化替代建设",
    body: "完全自主研发的国产化知识库管理平台，支持企业在安全合规前提下完成知识库工具替换与体系重构。",
    shaded: true,
    icon: "知",
  },
  {
    title: "知识管理与 DevOps 场景深度融合",
    body: "支持知识库与需求、项目、测试等研发场景双向关联，让知识沉淀贯穿软件研发全流程，提升协作与交付效率。",
    shaded: false,
    icon: "链",
  },
  {
    title: "多人协同编辑能力完善",
    body: "支持多人在线实时协同编辑、自动保存、历史版本管理、全文评论与划词评论，提升团队知识共创效率。",
    shaded: true,
    icon: "协",
  },
  {
    title: "知识组织与权限管理灵活",
    body: "支持组织级知识库与项目级知识库建设，支持页面树结构化管理、页面私密权限、协作者机制，满足跨部门协作与敏感内容管理需求。",
    shaded: false,
    icon: "权",
  },
  {
    title: "文档内容承载与扩展能力丰富",
    body: "支持流程图、思维导图等丰富内容插入，并具备开放扩展能力，可对接第三方系统与智能体能力，增强知识应用价值。",
    shaded: true,
    icon: "扩",
  },
  {
    title: "支持存量文档平滑迁移导入",
    body: "支持通过通用文件导入或定制开发方式迁移旧工具数据，帮助企业平滑完成知识库替换，降低切换成本与风险。",
    shaded: false,
    icon: "迁",
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

const foundations = ["国产化适配", "统一账户体系", "RBAC权限控制", "审计日志", "凭据管理", "IP白名单", "数据备份与恢复", "安全合规保障"];

function createPill(text) {
  const pill = document.createElement("div");
  pill.className = "pill";
  pill.textContent = text;
  return pill;
}

function renderOverview() {
  const grid = document.getElementById("overview-grid");
  overviewItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = `feature-card ${item.shaded ? "is-shaded" : ""}`.trim();
    card.innerHTML = `
      <div class="card-icon" aria-hidden="true">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    `;
    grid.appendChild(card);
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

renderOverview();
renderScenarios();
renderCapabilities();
renderSideData("integration-pills", integrations);
renderSideData("foundation-pills", foundations);
