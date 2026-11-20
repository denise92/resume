# docs(resume): 調整履歷用詞並更新網頁標題

## Why

- 履歷部分描述用詞浮誇、句型重複（例如「確保…的穩定與流暢」「一手包辦」「演進史」），讀起來像 AI 生成，且缺少具體成果。
- `main` 的原始碼比線上網站（`gh-pages`）舊：開頭介紹、「關於我」和網頁標題都是舊版。

## What

- **Hero / Contact**：開頭兩段與「關於我」改回線上版較自然的文字；聯絡區標題改為「歡迎來信聊聊」。
- **Experience**：
  - 標題改為「工作經歷」，刪除副標
  - 購金車的職責清單改為成果（電子發票、物流、廣告、全程負責）
  - 舊經歷縮短改寫，頁面與 modal 內容同步
  - 瘋狂賣客公司名稱統一為「地壹創媒」
  - 修正 `2015/08`、`(closed)` 格式
- **Architecture / SideProjects / HistoryGallery**：移除誇大用詞。
- **TechStack**：移除 Infrastructure 中重複的 Redis、Memcached。
- **index.html**：title 更新；meta description 改為正確的 `name` / `content` 寫法。

## How

只改文字，不動版面與樣式。

## 驗收

- Node 22 執行 `npm run build`：成功
- 本機 `vite preview` 與線上網站都已檢查：新文字有出現、舊用詞已移除、console 沒有錯誤
- 已用 `npm run deploy` 部署到 GitHub Pages（gh-pages `957ca52`）

## Risk

- 低：只改文字。
- 本機預設的 Node 18 無法 build，需要 Node 20 以上。
- `package-lock.json` 缺少 darwin-arm64 的 native binding，乾淨安裝時可能需要重新產生 lock 檔。

🤖 Generated with [Claude Code](https://claude.com/claude-code)
