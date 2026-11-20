<!-- src/components/Architecture.vue -->
<script lang="ts" setup>
import { ref } from 'vue'
import invoiceImg from '@/assets/images/invoice.webp'
import logisticsImg from '@/assets/images/logistics.webp'
import advertisingImg from '@/assets/images/advertising.webp'

const invoice = ref(false)
const logistics = ref(false)
const advertising = ref(false)
</script>

<template>
  <section class="py-20 bg-slate-900 text-white px-6">
    <div class="max-w-5xl mx-auto">
      <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold border-l-4 border-sky-500 pl-4 mb-2">
          主要負責的系統
        </h2>
        <p class="text-slate-400 text-sm">第一代以 PHP 建置，第二代以 Python 重寫</p>
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

          <div data-print="expand" class="text-slate-300 text-sm leading-relaxed mb-6" :class="invoice ? 'block' : 'hidden'">
            <p>串接網站訂單與財政部發票eTrunkey，將開立、作廢、折讓、註銷自動化，平均每天開立 100 張以上。</p>

            <ul class="list-disc list-inside text-sm mt-5 space-y-1.5 leading-relaxed">
              <li><strong class="text-white">系統整合</strong>：透過 API、SFTP 與 Webhook 串接外部服務與內部系統。</li>
              <li><strong class="text-white">排程與重試</strong>：背景排程自動開立，失敗時自動重試並通知。</li>
              <li><strong class="text-white">對帳報表</strong>：月底自動產出對帳報表。</li>
            </ul>

            <!-- 內嵌系統截圖預覽 -->
            <div data-print="hide" class="mt-6 border border-slate-700/80 rounded-xl overflow-hidden bg-slate-950 p-2">
              <div class="text-xs text-sky-400 font-semibold mb-2 px-2">🖥️ 系統後台管理介面實機畫面</div>
              <img :src="invoiceImg" alt="電子發票系統截圖" class="w-full h-auto rounded-lg object-contain border border-slate-800" />
            </div>
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
          
          <div data-print="expand" class="text-slate-300 text-sm leading-relaxed mb-6" :class="logistics ? 'block' : 'hidden'">
            <p>串接 4 家超商取貨與 6 家宅配物流商，同步出貨資料並追蹤配送狀態。</p>

            <ul class="list-disc list-inside text-sm mt-5 space-y-1.5 leading-relaxed">
              <li><strong class="text-white">出貨同步</strong>：內部訂單與物流商出貨資料自動同步。</li>
              <li><strong class="text-white">貨態追蹤</strong>：接收並更新配送狀態。</li>
              <li><strong class="text-white">擴充性</strong>：新增物流商不必改動核心流程。</li>
            </ul>

            <!-- 內嵌系統截圖預覽 -->
            <div data-print="hide" class="mt-6 border border-slate-700/80 rounded-xl overflow-hidden bg-slate-950 p-2">
              <div class="text-xs text-emerald-400 font-semibold mb-2 px-2">🖥️ 系統後台管理介面實機畫面</div>
              <img :src="logisticsImg" alt="智慧物流系統截圖" class="w-full h-auto rounded-lg object-contain border border-slate-800" />
            </div>
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
          
          <div data-print="expand" class="text-slate-300 text-sm leading-relaxed mb-6" :class="advertising ? 'block' : 'hidden'">
            <p>透過企業帳號授權（OAuth）串接 Meta / Google Ads API，統一管理旗下所有粉絲專頁與廣告帳號。</p>

            <ul class="list-disc list-inside text-sm mt-5 space-y-1.5 leading-relaxed">
              <li><strong class="text-white">數據同步</strong>：每日自動拉回各平台成效數據。</li>
              <li><strong class="text-white">營運報表</strong>：彙整成效數據，產出營運分析報表。</li>
            </ul>

            <!-- 內嵌系統截圖預覽 -->
            <div data-print="hide" class="mt-6 border border-slate-700/80 rounded-xl overflow-hidden bg-slate-950 p-2">
              <div class="text-xs text-purple-400 font-semibold mb-2 px-2">🖥️ 系統後台管理介面實機畫面</div>
              <img :src="advertisingImg" alt="廣告數據系統截圖" class="w-full h-auto rounded-lg object-contain border border-slate-800" />
            </div>
          </div>
          <div class="flex flex-wrap gap-2 text-xs">
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">Meta / Google Ads API</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">營運分析報表</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>