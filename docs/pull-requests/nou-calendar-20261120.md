# docs(resume): 空大學習助手補上個人行事曆訂閱功能

## Why

作者補充：平台還有「加入行事曆」功能，會依學員輸入的課程，自動同步面授時間與期中、期末考時間，並在上課前一小時提醒。

## What

在 `SideProjects.vue` 的功能清單中：

- 「空大行事曆」改為只描述官方日期：「整理官方選課、開播與考試日期。」
- 新增「個人行事曆訂閱」：「依學員輸入的課程，自動同步面授時間與期中、期末考時間到手機行事曆，上課前一小時跳出提醒。」

## 驗收

- Node 22 執行 `npm run build`：成功
- 本機 `vite preview`：新項目有正確顯示，console 沒有錯誤

## Risk

低，只改文字。

🤖 Generated with [Claude Code](https://claude.com/claude-code)
