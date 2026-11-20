# chore(resume): 圖片引用改為 webp

## Why

原本的圖片太大，手機載入慢。例如 `amz.png` 1.2 MB、`advertising.png` 1 MB、`beanfun.jpg` 600 KB。作者已經在 `a314285 add webp` 補上 webp 版本，但程式碼還在引用舊檔。

## What

把以下元件中 `@/assets/images/*.png|jpg` 的引用全部改為 `.webp`：

- Hero
- Experience
- HistoryGallery
- SideProjects
- Architecture

原始的 png / jpg 檔案保留，沒有刪除。

## 效果

頁面實際載入的 14 張圖片，總量從約 4.3 MB 降到約 1.2 MB（減少約 70%）。

| 圖片 | 原本 | webp |
|---|---|---|
| amz | 1,244 KB | 112 KB |
| advertising | 1,017 KB | 140 KB |
| beanfun | 618 KB | 250 KB |
| logistics | 435 KB | 133 KB |
| invoice | 333 KB | 105 KB |

## 驗收

- Node 22 執行 `npm run build`：成功，dist 中已經沒有 png / jpg
- 本機 `vite preview`：
  - 14 張圖片全部是 webp，沒有破圖
  - console 沒有錯誤

## Risk

低。所有主流瀏覽器都支援 webp。

🤖 Generated with [Claude Code](https://claude.com/claude-code)
