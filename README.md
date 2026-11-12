# Denise｜Personal Resume & Portfolio

個人履歷與技術作品集網站，透過網頁呈現專業經歷、技術能力、企業系統開發實績及個人專案，讓訪客能快速了解開發者的技術背景與實務經驗。

-   **Live Website:** https://denise92.github.io/resume/
-   **GitHub Repository:** https://github.com/denise92/resume

------------------------------------------------------------------------

## 專案簡介

本專案是以 Vue 3
建置的個人履歷與作品集網站。內容以軟體開發、企業系統整合及全端工程實務為主軸，整理工作經歷、技術能力、企業系統案例、個人作品與教育背景。

網站不只是靜態履歷，也作為持續更新的技術作品入口，方便求職者展示專業經驗，並讓招募人員與技術面試官進一步了解專案內容。

## 主要內容

網站目前以單頁式履歷呈現以下資訊：

-   **Professional Profile**：個人介紹與專業定位。
-   **Technical
    Skills**：程式語言、前後端技術、資料庫、系統整合與開發工具。
-   **Enterprise
    Systems**：電子發票自動化與對帳、物流出貨與貨態追蹤、廣告數據整合與投放管理等企業系統實務。
-   **Projects**：個人開發作品與技術實作。
-   **Experience**：工作經歷及負責內容。
-   **Education**：教育背景與持續進修。
-   **Contact**：聯絡及作品相關連結。

> 實際呈現內容以線上網站目前版本為準；企業專案資訊以不揭露公司機密、客戶資料及敏感系統資訊為原則。

## 技術架構

  類別                      技術
  ------------------------- ----------------
  Frontend Framework        Vue 3
  Language                  TypeScript
  Build Tool                Vite
  CSS Framework             Tailwind CSS 4
  Diagram / Visualization   Mermaid
  Date Utility              Day.js
  Deployment                GitHub Pages

### 開發工具與套件

-   `@vitejs/plugin-vue`：Vite 的 Vue 單檔元件支援。
-   `@tailwindcss/vite`：Tailwind CSS 與 Vite 整合。
-   `vue-tsc`：Vue 與 TypeScript 型別檢查。
-   `gh-pages`：將 `dist` 建置結果發布至 GitHub Pages。

## 環境需求

請先準備：

-   Node.js（建議使用目前仍受支援的 LTS 版本）
-   Yarn 1.x（專案設定的 package manager 為 Yarn 1.22.22）
-   Git

## 本機開發

### 1. Clone 專案

``` bash
git clone https://github.com/denise92/resume.git
cd resume
```

### 2. 安裝依賴

``` bash
yarn install
```

### 3. 啟動開發伺服器

``` bash
yarn dev
```

依終端機顯示的網址開啟本機網站，Vite 預設通常使用：

``` text
http://localhost:5173/
```

## 建置與預覽

### 建立正式版

``` bash
yarn build
```

建置前會先執行 Vue / TypeScript 型別檢查，再由 Vite
產生正式網站檔案。輸出目錄為：

``` text
dist/
```

### 本機預覽正式版

``` bash
yarn preview
```

請使用終端機顯示的網址檢查正式建置結果。

## 部署至 GitHub Pages

本專案的 Vite `base` 路徑設定為 `/resume/`，對應 GitHub Pages 專案網站：

https://denise92.github.io/resume/

目前 `package.json` 提供以下部署指令：

``` bash
yarn deploy
```

此指令會透過 `gh-pages` 將 `dist/` 目錄發布至 GitHub Pages
使用的部署分支。

### 部署前檢查

1.  確認 `vite.config.ts` 的 `base` 為 `/resume/`。
2.  執行 `yarn build`，確認型別檢查與正式建置成功。
3.  使用 `yarn preview` 檢查正式版頁面。
4.  確認圖片、字型、圖示及其他靜態資源均能正確載入。
5.  確認頁面內的錨點導覽、外部連結與互動功能正常。
6.  執行 `yarn deploy` 發布網站。
7.  部署完成後，重新檢查線上網站及手機版顯示。

> 若未來更改 GitHub Repository 名稱或部署網域，請同步確認
> `vite.config.ts` 的 `base` 路徑，避免靜態資源路徑錯誤。

## 專案結構

目前 Repository 的主要目錄如下：

``` text
resume/
├── public/          # 公開靜態資源
├── src/             # Vue 與 TypeScript 應用程式原始碼
├── index.html       # 網頁入口 HTML
├── package.json     # 專案依賴與指令
├── package-lock.json
├── yarn.lock
├── tsconfig.json    # TypeScript 專案設定
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts   # Vite、Vue、Tailwind 與部署路徑設定
```

## 維護原則

更新履歷或作品內容時，建議遵循以下原則：

-   **內容真實**：清楚區分已正式導入、開發中及規劃中的功能。
-   **成果可驗證**：只有在有紀錄或可說明測量方式時，才使用量化成效。
-   **保護機密**：企業系統案例不得公開客戶個資、帳號憑證、內部網址、商業機密或未授權的程式碼。
-   **保持一致**：中英文職稱、日期格式、技術名稱及專案狀態應一致。
-   **定期檢查**：每次更新後檢查桌面版、手機版、導覽連結與 GitHub Pages
    部署結果。

## License

本 Repository
主要用於個人履歷與作品展示。除非另有明確授權，網站中的個人資料、履歷內容、圖片及專案素材均不代表可自由複製或再利用。
