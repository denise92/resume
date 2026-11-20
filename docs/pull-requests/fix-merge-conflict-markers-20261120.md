# fix: 移除殘留的合併衝突標記

## Why

`a094dbe merge` 把未解完的衝突標記（`<<<<<<<` / `=======` / `>>>>>>>`）commit 進 `main`，導致 `npm run build` 失敗：

```
SyntaxError: Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).
```

## What

解掉 3 個檔案裡的 4 處衝突：

| 檔案 | 保留的版本 |
|---|---|
| `index.html` | `<meta name="description" content="...">`（正確寫法） |
| `Contact.vue` 標題 | 「歡迎來信聊聊」 |
| `Contact.vue` 潛水句 | 單行版本（兩邊文字相同） |
| `Experience.vue` 瘋狂賣客 modal | 新版改寫，與頁面文字一致 |

另外，a.m.z 的 modal 從「主導」改為「參與」，與頁面上的文字一致。

另一台電腦補上的內容都保留：系統截圖、eTrunkey 說明、Hero 副標、學歷、技術棧、聯絡區。

## 驗收

- Node 22 執行 `npm run build`：成功
- 本機 `vite preview`：
  - 沒有衝突標記，也沒有舊用詞
  - 三張系統截圖都正常載入
  - 瘋狂賣客 modal 為新版文字
  - console 沒有錯誤

## Risk

低。只解衝突並修正一處用詞。修好之前，`main` 不可部署。

🤖 Generated with [Claude Code](https://claude.com/claude-code)
