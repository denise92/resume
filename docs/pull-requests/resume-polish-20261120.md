# docs(resume): 精簡系統說明、年資自動計算、PDF 首頁放聯絡資訊

## Why

處理履歷建議的第 2、3、4、9 項。

## What

- **Architecture（主要負責的系統）**：三段說明改短，只寫作者提供的事實，刪除空泛句子（例如「背景排程：使用背景排程處理…」「流程維護」「系統維護」）
  - 電子發票：串接 eTrunkey、開立 / 作廢 / 折讓 / 註銷自動化、每天 100 張以上、排程與重試、月底對帳報表
  - 物流：4 家超商與 6 家宅配、出貨同步、貨態追蹤、擴充性
  - 廣告：企業帳號授權（OAuth）、每日拉回數據、營運報表
- **Experience**：
  - 購金車的年資改用 dayjs 依當天日期自動計算，不再寫死「10年8個月」
  - 「異質 API 整合」改為「第三方 API 整合」
- **Hero / Contact**：列印專用的聯絡資訊，從最後一頁移到第一頁的名字下方

## 驗收

- Node 22 執行 `npm run build`：成功
- 本機 `vite preview`：
  - 年資顯示「10年8個月」，與今天計算的結果一致
  - 列印專用區塊在畫面上隱藏
  - console 沒有錯誤
- headless Chrome 列印 PDF：
  - 共 5 頁，第一頁名字下方就有 Email、LINE、GitHub 和線上版網址
  - 三段系統說明都有展開，內容為精簡版

## Risk

低。年資計算在使用者的瀏覽器上執行，以使用者電腦的日期為準。

🤖 Generated with [Claude Code](https://claude.com/claude-code)
