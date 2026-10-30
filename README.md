# 视觉表达资料馆 / Visual Expression Library

一套围绕影像、动画、剪辑与视觉叙事的中文学习资料。通过案例观察、手法拆解、阅读路线和练习，把“看见画面”转化为有依据的表达。

## 内容

- 100 个案例，按 9 类视觉问题组织；20 个手法专题、8 条阅读路径、对照阅读和表达练习。
- 保留案例来源、取样时间、图像和短片。84 条主要样本与 16 条机制或局限参考分开标注。
- 分析基于间隔概览与局部连续帧，**不代表连续观看全部作品**；音画对拍未核验。教学分析与原作者意图区分呈现。

## 快速下载与使用

### 直接下载（推荐）

**[⬇ 下载完整资料馆 ZIP](https://github.com/kevin047mht/visual-expression-library/archive/refs/heads/main.zip)**

1. 点击上方链接，下载完成后解压 ZIP。
2. 进入解压后的文件夹，双击 `site/index.html`，即可在浏览器中打开资料馆。
3. 请保留整个文件夹及其原有结构，以便页面找到案例图片和视频。

这是静态网页，无需安装软件或登录。已读记录和笔记保存在当前浏览器；浏览器的本地文件策略可能限制保存，重要笔记请使用页面中的导出功能备份。

### 使用 Git 下载

已安装 Git 的用户也可以运行：

```bash
git clone https://github.com/kevin047mht/visual-expression-library.git
```

然后打开下载目录中的 `site/index.html`。

### 可选：使用本地服务器

如需通过本地服务器浏览，请先安装 Python，在项目根目录运行：

```bash
python -m http.server 8000 --directory site
```

然后访问 <http://localhost:8000/>。

## 目录

```text
site/index.html                         网站入口
site/media/visual-library/learning-atlas/ 学习地图、案例、样式与脚本
site/media/visual-library/evidence/      分案例截图、短片与研究记录
site/media/visual-library/               方法、来源表和研究记录
NOTICE.md                               第三方素材及许可说明
```

请保持 `site/` 内的相对路径，案例页面通过相对路径引用取样证据。

## 部署

静态网站位于 `site/`。在 GitHub Pages 中选择从默认分支的根目录发布，打开仓库网站根地址即可跳转到资料馆；也可将 `site/` 作为静态服务器的根目录。不要把私人证据原档、访问令牌、账号信息或本地配置提交到公开仓库。
