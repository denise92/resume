<!-- src/components/Architecture.vue -->
<script lang="ts" setup>
import { ref } from 'vue'

const invoice = ref(false)
const logistics = ref(false)
const advertising = ref(false)

</script>

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
        <div class="bg-slate-800/80 p-8 rounded-2xl border border-slate-700/80 hover:border-sky-500/50 transition cursor-pointer" @click="invoice = !invoice">
          <div class="flex flex-wrap gap-4 mb-4 items-baseline">
            <span class="w-3 h-3 rounded-full bg-sky-500"></span>
            <h3 class="text-xl font-bold text-white flex flex-col">
              電子發票自動化與對帳系統
              <div class="text-xs text-sky-400 mt-0.5">Invoice Automation & Reconciliation </div>
            </h3>
          </div>

          <div class="text-slate-300 text-sm leading-relaxed mb-6" :class="invoice ? 'block' : 'hidden'">
            <p>針對企業電子發票開立、資料交換及帳務核對需求，設計並開發自動化處理系統，整合外部發票服務與內部業務流程，降低人工操作及跨系統資料處理的複雜度。</p>

            <ul class="list-disc list-inside text-sm mt-5 space-y-1.5 leading-relaxed">
              <li><strong class="text-white">系統整合</strong>：透過 API、SFTP 與 Webhook 整合外部服務及內部系統。</li>
              <li><strong class="text-white">自動化開立</strong>：建立電子發票自動開立與資料處理流程。</li>
              <li><strong class="text-white">背景排程</strong>：使用背景排程處理定期或非同步作業。</li>
              <li><strong class="text-white">異常處理</strong>：建立錯誤處理與異常追蹤機制。</li>
              <li><strong class="text-white">帳務對帳</strong>：整合發票資料與相關交易資訊，支援帳務核對作業。</li>
            </ul>
          </div>

          <div class="flex flex-wrap gap-2 text-xs">
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">自動開立</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">背景排程</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">異常處理</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">帳務核對</span>
          </div>
        </div>

        <!-- 系統二：智慧物流 -->
        <div class="bg-slate-800/80 p-8 rounded-2xl border border-slate-700/80 hover:border-emerald-500/50 transition cursor-pointer" @click="logistics = !logistics">
          <div class="flex flex-wrap gap-4 mb-4 items-baseline">
            <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
            <h3 class="text-xl font-bold text-white flex flex-col">
              智慧物流出貨與貨態追蹤系統
              <div class="text-xs text-emerald-400 mt-0.5">Logistics & Shipment Tracking</div>
            </h3>
          </div>
          
          <div class="text-slate-300 text-sm leading-relaxed mb-6" :class="logistics ? 'block' : 'hidden'">
            <p>為整合企業出貨作業與物流配送資訊，開發物流資料串接及貨態追蹤系統，透過物流服務 API 同步出貨資料與配送狀態，建立從出貨到配送進度查詢的資訊整合流程。</p>

            <ul class="list-disc list-inside text-sm mt-5 space-y-1.5 leading-relaxed">
              <li><strong class="text-white">物流 API 整合</strong>：串接第三方物流服務，取得及交換配送資訊。</li>
              <li><strong class="text-white">出貨資料同步</strong>：整合內部訂單與物流出貨資料。</li>
              <li><strong class="text-white">貨態追蹤</strong>：接收並更新物流配送狀態。</li>
              <li><strong class="text-white">資料整合</strong>：建立內部業務資料與外部物流資訊的對應關係。</li>
              <li><strong class="text-white">流程維護</strong>：維護物流資料同步與貨態更新機制。</li>
            </ul>
          </div>
          <div class="flex flex-wrap gap-2 text-xs">
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">物流串接</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">出貨同步</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">配送狀態追蹤</span>
          </div>
        </div>

        <!-- 系統三：廣告數據 -->
        <div class="bg-slate-800/80 p-8 rounded-2xl border border-slate-700/80 hover:border-purple-500/50 transition cursor-pointer" @click="advertising = !advertising">
          <div class="flex flex-wrap gap-4 mb-4 items-baseline">
            <span class="w-3 h-3 rounded-full bg-purple-500"></span>
            <h3 class="text-xl font-bold text-white flex flex-col">
              廣告數據整合與投放管理系統
              <div class="text-xs text-purple-400 mt-0.5">Advertising Data Integration</div>
            </h3>
          </div>
          
          <div class="text-slate-300 text-sm leading-relaxed mb-6" :class="advertising ? 'block' : 'hidden'">
            <p>針對企業廣告投放管理與成效資料整合需求，開發廣告平台資料串接及管理系統，整合不同廣告平台的數據資訊，提供集中化的廣告管理與報表資料。</p>
            
            <ul class="list-disc list-inside text-sm mt-5 space-y-1.5 leading-relaxed">
              <li><strong class="text-white">平台 API 串接</strong>：整合第三方廣告平台 API，取得廣告相關數據。</li>
              <li><strong class="text-white">數據整合</strong>：彙整不同平台的廣告資料，建立統一的資料管理流程。</li>
              <li><strong class="text-white">投放管理</strong>：整合廣告活動與投放管理資訊。</li>
              <li><strong class="text-white">報表呈現</strong>：整理廣告數據，提供管理與成效檢視所需的報表資訊。</li>
              <li><strong class="text-white">系統維護</strong>：維護平台資料同步與整合流程。</li>
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