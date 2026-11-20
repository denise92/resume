# resume 專案規則

> 本檔優先於全域 `~/.claude/CLAUDE.md`。沒有寫到的部分，一律照全域守則。

## Git / PR 流程（覆寫全域「不准 merge PR」）

1. 每個任務照樣開新 branch、commit、push、開 PR，PR 說明放在 `docs/pull-requests/`。
2. **建立 PR 之後，直接合併到 `main`，並刪除該 branch**（`gh pr merge <PR 編號> --merge --delete-branch`），不需要另外詢問。
3. 合併前必須先通過 `npm run build`。build 失敗不准合併，要先回報。
4. 合併後把本機 `main` 同步（`git pull --ff-only`），並執行 `git fetch --prune origin`。
5. **已合併的 branch 一律直接刪除**（本機和 GitHub 都要刪），不需要另外詢問。只能刪除已經合併進 `main` 的 branch（用 `git branch --merged main` 確認），**絕對不能刪除 `main` 和 `gh-pages`**。
6. 仍然不准 force push，也不准 rewrite `main` 的歷史。

## 部署（上線）

- **只有使用者明確說「部署」或「上線」時，才能執行 `npm run deploy`。** 合併到 `main` 不等於可以部署。
- 一律從最新的 `main` 部署，不要從 feature branch 部署。
- 部署後要確認線上網站（https://denise92.github.io/resume/）已經換成新的 build，並檢查 console 沒有錯誤。

## 環境

- 需要 Node 20 以上（Node 18 無法 build）。例如：`nvm use 22`。
- `package-lock.json` 缺少 darwin-arm64 的 native binding。如果 build 出現 `Cannot find native binding`，先暫時移開 `package-lock.json`，再重新執行 `npm install`，build 完成後把 lock 檔還原，不要 commit lock 檔的變更。

## 內容原則

- 履歷用詞要具體、平實，避免浮誇和 AI 口吻（例如「確保…穩定與流暢」「一手包辦」「最佳實踐」）。
- 不得自行編造數字、職責或年資。缺資料時，要先問使用者。
- 經歷的頁面文字和 modal 的 `description` 必須同步修改。
