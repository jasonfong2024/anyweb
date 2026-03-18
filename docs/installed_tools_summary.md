# 本工程过程中新安装工具汇总

本文档汇总本工程推进过程中，为支持 PPT 生成、GitHub 操作与发布而新增安装或明确引入使用的工具与依赖包。

## 汇总表

| 工具/包 | 版本 | 安装方式 | 安装位置 | 体积 | 说明 |
|---|---:|---|---|---:|---|
| gh | 2.88.1 | `brew install gh` | `/opt/homebrew/Cellar/gh/2.88.1` | 36M | GitHub CLI，用于后续更安全地通过本机登录态操作 GitHub |
| python-pptx | 1.0.2 | `python3 -m pip install --user python-pptx` | `/Users/jasonfong/Library/Python/3.9/lib/python/site-packages/pptx` | 1.4M | 用于生成 `.pptx` 文件 |
| lxml | 6.0.2 | `python3 -m pip install --user python-pptx` 的依赖安装 | `/Users/jasonfong/Library/Python/3.9/lib/python/site-packages/lxml` | 19M | XML 解析依赖，供 `python-pptx` 使用 |
| Pillow | 11.3.0 | `python3 -m pip install --user python-pptx` 的依赖安装 | `/Users/jasonfong/Library/Python/3.9/lib/python/site-packages/PIL` | 13M | 图像处理依赖，供 `python-pptx` 使用 |
| XlsxWriter | 3.2.9 | `python3 -m pip install --user python-pptx` 的依赖安装 | `/Users/jasonfong/Library/Python/3.9/lib/python/site-packages/xlsxwriter` | 900K | `python-pptx` 依赖项之一 |

## 额外说明

- `typing-extensions` 版本为 `4.15.0`，已存在于本机 Python 用户环境中，被 `python-pptx` 依赖，但不是本次明确新增安装的包。
- 本工程目录本身未安装 Node.js 依赖，也未创建 `node_modules`，网页展示部分为纯静态 HTML/CSS/JS。
- 当前 `docs/` 目录用于 GitHub Pages 发布。

## 如需清理时的参考

- 若后续不再需要生成 PPT，可考虑卸载 `python-pptx` 及其相关依赖。
- 若后续只通过浏览器或网页操作 GitHub，不再需要命令行方式，可评估是否保留 `gh`。
- 若仍需继续维护 GitHub Pages、仓库可见性、发布设置等操作，建议保留 `gh`。
