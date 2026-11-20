# docs: 新增專案 CLAUDE.md（PR 自動合併、部署需確認）

## Why

使用者希望這個 repo 的 PR 建立後直接合併到 `main`，但上線（部署）仍然要等使用者明確指示。全域守則寫的是「不准 merge PR」，所以要用專案規則來覆寫。

## What

新增 `CLAUDE.md`，內容包含：

- PR 建立後直接合併到 `main`（合併前必須通過 build）
- 只有使用者說「部署 / 上線」時才能執行 `npm run deploy`
- 環境注意事項：Node 20 以上、native binding 問題的處理方式
- 內容原則：不編造數字、頁面文字和 modal 要同步修改

## Risk

低。只新增文件，不影響網站。這條規則只套用在本 repo，其他專案仍然照全域守則。

🤖 Generated with [Claude Code](https://claude.com/claude-code)
