# docs(resume): 補上 SOHO 經歷與日文能力，移除暱稱與舊技術

## Why

依作者決定，處理履歷建議中的第 5～8 項。

## What

- **Hero**：移除暱稱「阿累」，只保留「(Denise)」
- **TechStack**：移除 OpenCart、WordPress、Zend Framework、jQuery、SVN、CentOS。經歷段落裡的標籤是當時實際用過的技術，所以保留
- **Experience**：新增「自由接案 ｜ SOHO」（2013/08 ～ 2014/07），補上 2013/07～2014/08 的空白
  - 列出旺安科技企業網站、飛鳥井の部屋（ACG 主題網站，osCommerce）
  - 依作者指示，不寫技術細節。HistoryGallery 記錄的旺安科技年份是 2008 年，跟這段期間對不上，所以沒有寫 Flash / CGI
- **SideProjects**：新增「語言能力：日文略懂（JLPT N4）」

## 驗收

- Node 22 執行 `npm run build`：成功
- 本機 `vite preview` + headless Chrome 全頁截圖：
  - SOHO 兩張卡片並排顯示正常，圖片有載入
  - 語言能力卡片顯示正常
  - 移除的暱稱與技術已經不在頁面上
  - console 沒有錯誤
- 列印 PDF 維持 5 頁

## Risk

低。只改文字，新增區塊沿用既有樣式。

🤖 Generated with [Claude Code](https://claude.com/claude-code)
