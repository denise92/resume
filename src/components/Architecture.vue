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
          </div>
          <div class="text-slate-300 text-sm leading-relaxed mb-6">
            <p>實現電商訂單發票開立的完全自動化。網站產生訂單後即時發送開立 API，發票系統確認無誤後建立排程，透過 SFTP 安全傳送至財政部 eTurnkey 大平台；並透過背景排程定期回存發票狀態，雙向透過 Webhook 即時更新網站訂單。</p>

            <ul class="list-disc list-inside text-sm mt-2 space-y-1.5 leading-relaxed">
              <li><strong class="text-white">非同步與併發處理</strong>：導入 Python 非同步框架（如 asyncio / FastAPI），針對大量高併發的 B2B/B2C 發票開立與作廢請求進行非同步佇列（Queue）與背景排程優化，將高峰期的 API 回應時間顯著降低。</li>
              <li><strong class="text-white">容錯與重試機制 (Error Handling & Retry)</strong>：針對財政部大平台或異質加值中心偶發的網路逾時或 API 異常，設計具備 Exponential Backoff（指數退避）的自動重試與警報通知機制，確保 99.9% 以上的發票開立成功率與數據一致性。</li>
            </ul>

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
          </div>
          
          <div class="text-slate-300 text-sm leading-relaxed mb-6">
            <p>優化倉儲與出貨流程。系統可批次篩選網站訂單進行出貨處理，無縫串接多家主流宅配與超商物流 API 自動配置託運單號；並透過背景排程定期追蹤貨態，藉由 Webhook 即時回傳更新網站訂單出貨進度。</p>

            <ul class="list-disc list-inside text-sm mt-2 space-y-1.5 leading-relaxed">
              <li><strong class="text-white">資料庫查詢與索引優化</strong>：針對龐大的歷史物流軌跡與即時派送狀態表，透過複合索引（Composite Index）調整與 SQL 查詢重構，將高頻率的狀態查詢與大數據報表產出效能提升數倍以上。</li>
              <li><strong class="text-white">異質 API 整合與流量削減</strong>：透過 Redis 快取層快取不常變動的物流節點與地理資訊，大幅減少對關聯式資料庫的直接衝擊，並有效降低第三方物流 API 的呼叫頻率與延遲。</li>
            </ul>
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
          </div>
          
          <div class="text-slate-300 text-sm leading-relaxed mb-6">
            <p>提升行銷團隊營運效率。透過 SDK 串接 Meta 與 Google 廣告數據，進行跨平台資料清洗與彙整至營運分析報表，方便營運團隊檢視投廣成效並優化出價策略；同時支援直接在後台建立廣告，大幅簡化操作流程。</p>
            
            <ul class="list-disc list-inside text-sm mt-2 space-y-1.5 leading-relaxed">
              <li><strong class="text-white">大規模數據清洗與 ETL 管道</strong>：透過 Python 建立自動化資料清洗與排程管線，每日穩定處理並彙整來自多個主流廣告平台的龐大數據（包含曝光、點擊、轉換率與預算消耗）。</li>
              <li><strong class="text-white">量化數據優化</strong>：透過自動化數據對帳與投放效益分析，成功幫企業減少數十小時以上的人工作業與對帳時間，並將廣告預算投放的反應速度與精準度提升顯著幅度。</li>
            </ul>
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