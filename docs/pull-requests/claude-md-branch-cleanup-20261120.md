# docs: CLAUDE.md 新增「合併後自動刪除 branch」規則

## Why

使用者要求：已合併的 branch 直接清掉，以後不用再詢問。

## What

更新 `CLAUDE.md` 的 Git / PR 流程：

- 合併改用 `gh pr merge <PR 編號> --merge --delete-branch`，合併時一併刪除遠端 branch
- 合併後執行 `git fetch --prune origin`
- 已合併進 `main` 的 branch（本機和 GitHub）一律直接刪除，不必詢問
- 明確禁止刪除 `main` 與 `gh-pages`

這次也一併清掉了先前已經合併的 10 個 branch（本機與 GitHub）。

## Risk

低。只修改文件，而且只會刪除已經合併的 branch，`main` 與 `gh-pages` 受到保護。

🤖 Generated with [Claude Code](https://claude.com/claude-code)
