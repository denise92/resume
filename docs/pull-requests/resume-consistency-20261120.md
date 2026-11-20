# fix(resume): 統一標題、導覽列與技術棧

## Why

履歷有幾個前後不一致的地方：

- 技術棧與標籤有重複項目
- 導覽列名稱和區塊標題對不上
- 標題中英並列
- 同一件事用了不同的寫法（SDK / API）
- 「API 整合」標籤被複製到沒有做 API 串接的經歷

## What

- **TechStack**：
  - 移除重複的「Compose」
  - 主力技術排在前面（Vue / TypeScript、Docker / Nginx），舊技術排到後面，沒有刪除任何項目
  - 標題改為「技術棧」
- **SideProjects**：移除重複的 Nginx 標籤；標題改為「學歷與個人專案」
- **Header**：導覽列改為「主要系統」「工作經歷」「學歷與專案」，與區塊標題一致（桌機版與手機版選單都有改）
- **Contact**：移除「(About & Contact)」「(About Me)」英文註記
- **Architecture**：「Meta & Google Ads SDK」改為「Meta / Google Ads API」，與經歷段落一致
- **Experience**：
  - 瘋狂賣客移除「API 整合」標籤
  - Qbooks 的「API 整合」改為「DNS / Mail Server」，與描述內容一致

## 刻意未處理

- 「NoSQL」標籤、「後台 UX 流程優化」標籤：要等作者確認
- 購金車的數字、a.m.z「參與 / 主導」用詞、永漢「MIS 主管」職稱與時間：要等作者提供資料

## 驗收

- Node 22 執行 `npm run build`：成功
- 本機 `vite preview`：
  - 導覽列 5 個連結都能對應到區塊
  - 沒有重複的 Compose / Nginx
  - 頁面上已經沒有 SDK 和英文註記
  - console 沒有錯誤

## Risk

低。只改文字與標籤順序，版面沒有變動。

🤖 Generated with [Claude Code](https://claude.com/claude-code)
