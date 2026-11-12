<!-- src/components/Experience.vue -->
<template>
  <section id="experience" class="py-20 bg-slate-950 text-white px-6 border-t border-slate-900">
    <div class="max-w-4xl mx-auto">
      <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold border-l-4 border-sky-500 pl-4 mb-2">
          職涯經歷沿革 (Experience Track Record)
        </h2>
        <p class="text-slate-400 text-sm">累積 15 年以上資歷，涵蓋大型電商、遊戲橘子與企業核心系統架構演進</p>
      </div>
      
      <div class="space-y-12 border-l-2 border-slate-800 pl-6 ml-2">
        <!-- 現職：購金車有限公司 -->
        <div class="relative">
          <span class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-sky-500 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-sky-400 mb-1">2016/03 ～ 2026/12 (10年10個月)</div>
          <h3 class="text-xl font-bold text-white">資深全端工程師 ｜ 購金車有限公司</h3>
          <p class="text-slate-400 text-sm mt-2 leading-relaxed">
            負責全端網路程式設計、網站系統開發、主機維運（Linux/Docker）與資料庫管理。獨立開發電子發票自動化系統、智慧物流與廣告數據管理系統，並主導跨部門協調與專案執行。
          </p>
          <ul class="list-disc list-inside text-slate-300 text-sm mt-2 space-y-1.5 leading-relaxed">
            <li><strong class="text-white">電子發票自動化系統</strong>：獨立開發基於 Python (FastAPI) 與 PostgreSQL 之自動化開立與對帳系統，每月自動處理數萬筆電子發票及 SFTP 檔案拋轉，減少 90% 以上的人工作業與對帳時間。</li>
            <li><strong class="text-white">智慧物流追蹤系統</strong>：串接多方物流與超商異質 API，運用背景非同步排程實現即時貨態追蹤與數據整合，大幅提升物流異常處理效率。</li>
            <li><strong class="text-white">廣告數據整合與投放管理系統</strong>：整合各大數位廣告平台（如 Google Ads、Meta 等）之異質 API 與數據流，建立自動化成效彙整與投放管理看板，以數據驅動行銷決策，顯著提升跨渠道廣告數據能見度與投放效率。</li>
          </ul>
          <!-- 技術棧標籤 -->
          <div class="flex flex-wrap gap-2 mt-4 text-xs">
            <span class="bg-sky-500/10 text-sky-300 px-3 py-1 rounded-lg border border-sky-500/20">Python (FastAPI)</span>
            <span class="bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-lg border border-emerald-500/20">PostgreSQL</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">Linux / Docker</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">異質 API 整合</span>
          </div>
        </div>

        <!-- 遊戲橘子 -->
        <div class="relative">
          <span class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-600 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-slate-400 mb-1">2015/09 ～ 2016/03 (7個月)</div>
          <h3 class="text-xl font-bold text-white">資深程式設計師 ｜ 遊戲橘子股份有限公司</h3>
          <p class="text-slate-400 text-sm mt-2 leading-relaxed">
            負責手機遊戲 source code 整合與維運。使用 Zend Framework、Laravel 與 Lumen 進行後端架構維護與系統串接。
          </p>
          <!-- 技術棧標籤 -->
          <div class="flex flex-wrap gap-2 mt-4 text-xs">
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">PHP</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">Zend Framework</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">Laravel</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">Lumen</span>
          </div>
        </div>

        <!-- 購明系雲科技 -->
        <div class="relative">
          <span class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-600 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-slate-400 mb-1">2014/08 ～ 2015/8 (1年1個月)</div>
          <h3 class="text-xl font-bold text-white">資深程式設計師 ｜ 購明系雲科技有限公司</h3>
          <p class="text-slate-400 text-sm mt-2 leading-relaxed">
            主導建置出貨與倉儲系統，並無縫整合各大網購平台訂單與發票系統，提升整體供應鏈與電商自動化效率。
          </p>
          <!-- 技術棧標籤 -->
          <div class="flex flex-wrap gap-2 mt-4 text-xs">
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">PHP</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">MySQL</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">Linux</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">API 整合</span>
          </div>
        </div>

        <!-- 東方鴻展 (1758play) -->
        <div class="relative">
          <span class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-slate-400 mb-1">2012/12 ～ 2013/07 (8個月)</div>
          <h3 class="text-xl font-bold text-white">
            PHP程式設計師 ｜ 東方鴻展遊戲有限公司 (1758play)
            <a href="#history" class="text-xs bg-sky-500/20 text-sky-300 px-2.5 py-0.5 rounded-md ml-2 border border-sky-500/30 hover:bg-sky-500/30 transition">查看作品截圖 ↗</a>
          </h3>
          <p class="text-slate-400 text-sm mt-2 leading-relaxed">
            從事網路程式設計、網站架設與網路安全維護，維運遊戲與數位內容商城平台（PHP, MySQL, Smarty, MVC, SVN, Linux）。
          </p>
          <!-- 技術棧標籤 -->
          <div class="flex flex-wrap gap-2 mt-4 text-xs">
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">PHP</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">MySQL</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">Smarty</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">MVC</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">SVN</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">Linux</span>
          </div>
        </div>

        <!-- 網勁科技 (荷包網) -->
        <div class="relative">
          <span class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-slate-400 mb-1">2011/10 ～ 2012/11 (1年2個月)</div>
          <h3 class="text-xl font-bold text-white">
            PHP程式設計師 ｜ 網勁科技股份有限公司 (荷包網)
            <a href="#history" class="text-xs bg-sky-500/20 text-sky-300 px-2.5 py-0.5 rounded-md ml-2 border border-sky-500/30 hover:bg-sky-500/30 transition">查看作品截圖 ↗</a>
          </h3>
          <p class="text-slate-400 text-sm mt-2 leading-relaxed">
            參與跨國與大型網購商城系統開發與維運，負責資料庫查詢優化、網路程式設計與系統安全防護（PHP, PostgreSQL, Discuz）。
          </p>
          <!-- 技術棧標籤 -->
          <div class="flex flex-wrap gap-2 mt-4 text-xs">
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">PHP</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">PostgreSQL</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">Discuz</span>
          </div>
        </div>

        <!-- 瘋狂賣客 -->
        <div class="relative">
          <span class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-slate-400 mb-1">2011/01 ～ 2011/10 (10個月)</div>
          <h3 class="text-xl font-bold text-white">
            PHP程式設計師 ｜ 瘋狂賣客 (地壹創媒)
            <a href="#history" class="text-xs bg-sky-500/20 text-sky-300 px-2.5 py-0.5 rounded-md ml-2 border border-sky-500/30 hover:bg-sky-500/30 transition">查看作品截圖 ↗</a>
          </h3>
          <p class="text-slate-400 text-sm mt-2 leading-relaxed">
            參與知名團購電商平台之系統架構維運與前端效能優化，處理高流量挑戰及日常網站安全維護。
          </p>
          <!-- 技術棧標籤 -->
          <div class="flex flex-wrap gap-2 mt-4 text-xs">
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">PHP</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">MySQL</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">Linux</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">API 整合</span>
          </div>
        </div>

        <!-- 早期基礎：永漢國際書局 & 藝游館 -->
        <div class="relative">
          <span class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-slate-400 mb-1">2005/03 ～ 2010/12 (累積 6 年系統與網管資歷)</div>
          <h3 class="text-xl font-bold text-white">
            網路工程師與 MIS 主管 ｜ 永漢國際書局 & 藝游館文化事業
            <a href="#history" class="text-xs bg-sky-500/20 text-sky-300 px-2.5 py-0.5 rounded-md ml-2 border border-sky-500/30 hover:bg-sky-500/30 transition">查看作品截圖 ↗</a>
          </h3>
          <p class="text-slate-400 text-sm mt-2 leading-relaxed">
            早期負責主機建置管理、網路安全管理、伺服器（LAMP、DNS、Mail Server）與資料庫維護、電腦軟硬體管理及網站程式設計，為後續 15 年的全端與維運實力打下最扎實的底子。
          </p>
          <!-- 技術棧標籤 -->
          <div class="flex flex-wrap gap-2 mt-4 text-xs">
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">PHP</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">MySQL</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">Linux</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">API 整合</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>