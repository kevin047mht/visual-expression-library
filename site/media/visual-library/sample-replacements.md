# 候选替换与完整性核查（2026-10-20）

本次仅将已抽样审阅的用户指定参考纳入AI候选，未新增观看，也未验收精品。AI组仍为50条唯一BV；全片连续音画观看与正式质量验收均为0。替换前完整AI候选JSON和四条退回候补的完整记录保存在 `sample-replacements.json`，可逆恢复。

|候选槽位|纳入用户参考（第一方）|退回候补（第一方）|理由|
|---|---|---|---|
|AI12|[猜猜这是哪个AI做的，Opus 5.5还是Deepseek 1017？](https://www.bilibili.com/video/BV14ZJR6DEXN/)|[AI科幻短片《地球上最后的人类》](https://www.bilibili.com/video/BV15nud6zEAj/)|原候选简介仅有AI标记，可能为精选转载，原作者归属未核；退候补以优先用户明确参考。|
|AI16|[用DeepSeekFlash-1017花了两亿token画出deepseek眼中的世界！world.execute(me);](https://www.bilibili.com/video/BV1d2ng6VEg4/)|[GPT6-Astra制作的world.execute(me) MV](https://www.bilibili.com/video/BV1FZhX6AEbz/)|原候选仅有Astra标题声明、未审阅，且同歌候选较多；退候补以纳入用户明确参考及可核同源改编。|
|AI23|[【Claude/PV】带我出逃吧，我的罗密欧——Astra制作](https://www.bilibili.com/video/BV1MFpG63E26/)|[红缨枪护 AI短片《百匠》一帧一画皆是血泪](https://www.bilibili.com/video/BV1ChM36FERD/)|原候选属于第三方介绍/展示，《百匠》原作者及是否全片未核；优先有第一方制作分工的用户指定作品。|
|AI34|[Claude热唱：《您的账号已被封禁》](https://www.bilibili.com/video/BV1Hzpm6hEaY/)|[欢迎来到剑与魔法的世界](https://www.bilibili.com/video/BV1ftrLBCEEo/)|原候选简介说明使用网络素材，属于AI素材混剪，生成与后期归属未核；优先第一方明确分工的用户指定作品。|

退回候补不等于质量不合格；这些稿件仍可在制作归属/全片审阅核实后重新使用。用户截图的AI五条参考现在均在50条内。

## 分层与未解决项

以下为替换完成当时的快照；最新分层进度见ai_candidates.md。实页快照优先、缺失时沿用旧索引/用户截图，当时混合暂分为 **27条≥10万／23条<10万**。计数上暂时没有与27/23目标的差额，但尚非最终合格样本比例。
50条中仅15条有已保存实页播放快照，其中6条≥10万、9条<10万；其余35条仍需更新实页及制作路径证据。不能把混合计数称为50条实时核实。

|新增参考|实页播放快照|保存时间UTC|制作路径边界|
|---|---|---|---|
|[猜猜这是哪个AI做的，Opus 5.5还是Deepseek 1017？](https://www.bilibili.com/video/BV14ZJR6DEXN/)|1.3万|2026-10-20T00:36:58.406360+00:00|页面AI标记及UP自述会做剪辑/特效支持AI参与；标题提问没有揭晓具体模型，不据标题定为Opus或DeepSeek。|
|[用DeepSeekFlash-1017花了两亿token画出deepseek眼中的世界！world.execute(me);](https://www.bilibili.com/video/BV1d2ng6VEg4/)|9.3万|2026-10-20T00:38:41.366179+00:00|第一方简介声明使用真寻Mahiro源码及提示词，WebGL2+Canvas2D逐帧生成，角色和调色板改编；标题DeepSeekFlash-1017为作者声明，未独立审计。|
|[【Claude/PV】带我出逃吧，我的罗密欧——Astra制作](https://www.bilibili.com/video/BV1MFpG63E26/)|12.4万|2026-10-20T00:31:11.279191+00:00|第一方简介称GPT-6 Astra Xhigh逐镜制作，CodexPro，MiniMax-H3视频、Image-2.5图像；流程和约500美元成本为作者自述，未独立审计。|
|[Claude热唱：《您的账号已被封禁》](https://www.bilibili.com/video/BV1Hzpm6hEaY/)|3万|2026-10-20T00:32:57.424025+00:00|第一方简介列词/PV为Opus5.5、曲为SunoV6、图为GPT；不能据此推定无人工选择、修订和合成。|

白熊版[DeepSeek world.execute(me)](https://www.bilibili.com/video/BV1d2ng6VEg4/)与[真寻Mahiro版](https://www.bilibili.com/video/BV186pc65E68/)复用源码/提示词、换角色及配色；可作为工程复用案例，不能当两份独立生成分镜能力证据。白熊稿件两P，仅P1约216.9秒有画面抽样，P2未审阅。

## 人工候选核查

本次没有浏览器访问，不依据疑似问题改动人工候选。已存17条实页标题与候选一致，H16仅空格差异；现存材料没有证实其他BV/标题错配。优先待核项：

- H32 [【静止画MAD】言語如蘇打般湧現【黃金祭2024】](https://www.bilibili.com/video/av1454791259/)：仅有AV入口，缺少BV；需实际页面解析，不能凭转换猜号。
- H39 [天空夺走了属于我们的时间【四谎十周年纪念/风华回战2024/MAD大赛2024】](https://www.bilibili.com/video/av113065131508573/)：仅有AV入口，缺少BV；需实际页面解析，不能凭转换猜号。
- H10 [祥 另一个幸福的我！](https://www.bilibili.com/video/BV1V5KPerEL3/)：仅收藏/列表页索引支持，缺少实页标题核对；存在列表邻项误配的核查风险，但现存材料不能证明标题错配。
- H17 [『章鱼噼的原罪 | MAD | 被生命所厌恶』](https://www.bilibili.com/video/BV1Ra8jz8EmW/)：仅收藏/列表页索引支持，缺少实页标题核对；存在列表邻项误配的核查风险，但现存材料不能证明标题错配。
- H47 [【预告之外】少女歌剧/聚光灯下的少女](https://www.bilibili.com/video/BV1jZ4y1o7ah/)：仅收藏/列表页索引支持，缺少实页标题核对；存在列表邻项误配的核查风险，但现存材料不能证明标题错配。

AV入口本身是有效候选入口，缺BV不是失效结论；后续须由第一方页面解析真实BV并核对作者/标题，不能猜号、擅自替换。

## 后续入口核验补充（2026-10-20）

H32已由第一方canonical确认BV1yi421D7i5，H39确认BV1k8H6ecEnv，两者标题均一致，已回填候选表并保留原AV链接。上文缺BV是替换审计当时状态。媒体取得与画面审阅以当前候选表为准。

后续H10 BV1V5KPerEL3与H17 BV1Ra8jz8EmW已打开实页核对，标题均匹配。上文列表风险是核对前的历史状态；H47仍待实页核验。
