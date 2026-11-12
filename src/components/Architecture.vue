<!-- src/components/Architecture.vue -->
<template>
  <section class="py-20 bg-slate-900 text-white px-6">
    <div class="max-w-5xl mx-auto">
      <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold border-l-4 border-sky-500 pl-4 mb-2">
          企業核心系統架構 (Enterprise Systems)
        </h2>
        <p class="text-slate-400 text-sm">於購金車任職期間獨立規劃與開發完成之自動化核心系統</p>
      </div>
      
      <div class="space-y-8">
        <!-- 系統一：電子發票 -->
        <div class="bg-slate-800/80 p-8 rounded-2xl border border-slate-700/80 hover:border-sky-500/50 transition">
          <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h3 class="text-xl font-bold text-white flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-sky-500"></span>
              電子發票自動化與對帳系統
            </h3>
            <span class="text-xs bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full border border-sky-500/30">購金車核心專案</span>
          </div>
          <div class="text-slate-300 text-sm leading-relaxed mb-6">
            <p>實現電商訂單發票開立的完全自動化。網站產生訂單後即時發送開立 API，發票系統確認無誤後建立排程，透過 SFTP 安全傳送至財政部 eTurnkey 大平台；並透過背景排程定期回存發票狀態，雙向透過 Webhook 即時更新網站訂單。</p>
          </div>
          <div class="flex flex-wrap gap-2 text-xs">
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">SFTP 檔案傳輸</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">Webhook 雙向同步</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">Cron Jobs 排程管理</span>
          </div>
        </div>

        <!-- 系統二：智慧物流 -->
        <div class="bg-slate-800/80 p-8 rounded-2xl border border-slate-700/80 hover:border-emerald-500/50 transition">
          <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h3 class="text-xl font-bold text-white flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
              智慧物流出貨與貨態追蹤系統
            </h3>
            <span class="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">購金車核心專案</span>
          </div>
          
          <div class="text-slate-300 text-sm leading-relaxed mb-6">
            <p>優化倉儲與出貨流程。系統可批次篩選網站訂單進行出貨處理，無縫串接多家主流宅配與超商物流 API 自動配置託運單號；並透過背景排程定期追蹤貨態，藉由 Webhook 即時回傳更新網站訂單出貨進度。</p>
          </div>
          <div class="flex flex-wrap gap-2 text-xs">
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">多物流 API 整合</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">託運單號自動化配置</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">貨態即時追蹤</span>
          </div>
        </div>

        <!-- 系統三：廣告數據 -->
        <div class="bg-slate-800/80 p-8 rounded-2xl border border-slate-700/80 hover:border-purple-500/50 transition">
          <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h3 class="text-xl font-bold text-white flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-purple-500"></span>
              廣告數據整合與投放管理系統
            </h3>
            <span class="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">購金車核心專案</span>
          </div>
          
          <div class="text-slate-300 text-sm leading-relaxed mb-6">
            <p>提升行銷團隊營運效率。透過 SDK 串接 Meta 與 Google 廣告數據，進行跨平台資料清洗與彙整至營運分析報表，方便營運團隊檢視投廣成效並優化出價策略；同時支援直接在後台建立廣告，大幅簡化操作流程。</p>
            <p class="mt-5"></p>
          </div>
          <div class="flex flex-wrap gap-2 text-xs">
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">Meta & Google Ads SDK</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">營運分析報表</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">後台 UX 流程優化</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>