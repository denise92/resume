<!-- src/components/Experience.vue -->
<script setup lang="ts">
import { ref } from 'vue'

// 引入歷史經手網站圖片
import img1758 from '@/assets/images/1758play.webp'
import imgJoinBao from '@/assets/images/joinbao.webp'
import imgCrazyMike from '@/assets/images/crazymike.webp'
import imgJmag from '@/assets/images/jmag.webp'
import imgAmz from '@/assets/images/amz.webp'
import imgBeanfun from '@/assets/images/beanfun.webp'
import imgAib from '@/assets/images/aib.webp'

// 定義燈箱 Modal 狀態
interface HistoryProject {
  title: string
  period: string
  description: string
  image: string
}

const selectedImage = ref<HistoryProject | null>(null)

const openModal = (proj: HistoryProject) => {
  selectedImage.value = proj
}

const closeModal = () => {
  selectedImage.value = null
}
</script>
<template>
  <section class="py-20 bg-slate-950 text-white px-6 border-t border-slate-900">
    <div class="max-w-4xl mx-auto">
      <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold border-l-4 border-sky-500 pl-4 mb-2">
          工作經歷
        </h2>
      </div>
      
      <div class="space-y-12 border-l-2 border-slate-800 pl-6 ml-2">
        <!-- 現職：購金車有限公司 -->
        <div class="relative">
          <span class="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-sky-500 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-sky-400 mb-1">2016/03 ～ 至今 (10年8個月)</div>
          <h3 class="text-xl font-bold text-white">資深全端工程師 ｜ 購金車有限公司</h3>
          
          <p class="text-slate-300 text-sm mt-2 leading-relaxed mb-4">
            以 Python（FastAPI）+ PostgreSQL + Docker 重寫電子發票、物流與廣告數據系統。延續我在 a.m.z 以 PHP 建置第一代的經驗，這次改善了背景排程與失敗重試、對帳自動化，以及新增物流商的擴充性。
          </p>
          <ul class="list-disc list-inside text-slate-300 text-sm mb-4 space-y-1.5 leading-relaxed">
            <li><strong class="text-white">電子發票</strong>：平均每天自動開立 100 張以上，失敗時自動重試並通知，月底對帳自動產出報表。</li>
            <li><strong class="text-white">物流</strong>：串接 9 家物流商，包含 7-11、全家、萊爾富、OK 四大超商，以及黑貓、新竹、大榮、嘉里等 5 家宅配；同步出貨並追蹤配送狀態，新增物流商不必改動核心流程。</li>
            <li><strong class="text-white">廣告</strong>：串接 Meta / Google Ads API，每日自動拉回成效數據，產出營運報表。</li>
            <li><strong class="text-white">全程負責</strong>：從需求訪談、設計、開發到上線與維運。</li>
          </ul>
          
          <div 
            class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-sky-500/50 transition cursor-pointer group flex items-center gap-4"
            @click="openModal({ title: '購金車有限公司：aiB官方網站', period: '2016/03 - 至今', description: '以 Python（FastAPI）+ PostgreSQL + Docker 重寫電子發票、物流與廣告數據系統。延續我在 a.m.z 以 PHP 建置第一代的經驗，這次改善了背景排程與失敗重試、對帳自動化，以及新增物流商的擴充性。', image: imgAib })"
          >
            <img :src="imgAib" alt="aiB官方網站" class="w-24 h-16 object-cover rounded-lg border border-slate-800 group-hover:scale-105 transition" />
            <div>
              <span class="text-xs text-sky-400 font-semibold">https://www.aib.tw/</span>
              <h4 class="text-sm font-bold text-white mt-0.5">aiB官方網站</h4>
            </div>
          </div>

          <!-- 技術棧標籤 -->
          <div class="flex flex-wrap gap-2 mt-4 text-xs">
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-sky-500/20">Python (FastAPI)</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-emerald-500/20">PostgreSQL</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">Linux / Docker</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">異質 API 整合</span>
          </div>
        </div>

        <!-- 遊戲橘子 -->
        <div class="relative">
          <span class="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-slate-600 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-slate-400 mb-1">2015/09 ～ 2016/03 (7個月)</div>
          <h3 class="text-xl font-bold text-white">資深程式設計師 ｜ 遊戲橘子股份有限公司</h3>
          
          <p class="text-slate-300 text-sm mt-2 leading-relaxed mb-4">
            負責手機遊戲後端維運與版本更新，包含《召喚圖板》《五四三國誌》《龍族撲克》等，處理第三方 API 串接。使用 PHP（Zend Framework、Laravel、Lumen）。
          </p>

          <div 
            class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-sky-500/50 transition cursor-pointer group flex items-center gap-4"
            @click="openModal({ title: '遊戲橘子股份有限公司：遊戲橘子', period: '2015/09 - 2016/03', description: '負責手機遊戲後端維運與版本更新，包含《召喚圖板》《五四三國誌》《龍族撲克》等，處理第三方 API 串接。使用 PHP（Zend Framework、Laravel、Lumen）。', image: imgBeanfun })"
          >
            <img :src="imgBeanfun" alt="遊戲橘子" class="w-24 h-16 object-cover rounded-lg border border-slate-800 group-hover:scale-105 transition" />
            <div>
              <span class="text-xs text-sky-400 font-semibold">https://tw.beanfun.com/</span>
              <h4 class="text-sm font-bold text-white mt-0.5">遊戲橘子</h4>
            </div>
          </div>

          <!-- 技術棧標籤 -->
          <div class="flex flex-wrap gap-2 mt-4 text-xs">
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">PHP</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">Zend Framework</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">Laravel</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">Lumen</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">手遊後端維運</span>
          </div>
        </div>

        <!-- 購明系雲科技 -->
        <div class="relative">
          <span class="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-slate-600 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-slate-400 mb-1">2014/08 ～ 2015/08 (1年1個月)</div>
          <h3 class="text-xl font-bold text-white">資深程式設計師 ｜ 購明系雲科技有限公司</h3>
          
          <p class="text-slate-300 text-sm mt-2 leading-relaxed mb-4">
            負責 a.m.z 亞瑪勁線上購物的全端開發與主機維運。以 PHP + MySQL 負責建置第一代電子發票自動開立、物流出貨與貨態追蹤、廣告數據整合系統，串接電商營運所需的金流、物流與發票流程，並支援雙 11 等大型檔期。
          </p>

          <div 
            class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-sky-500/50 transition cursor-pointer group flex items-center gap-4"
            @click="openModal({ title: '購明系雲科技有限公司：a.m.z 亞瑪勁線上購物', period: '2014/08 - 2015/08', description: '負責 a.m.z 亞瑪勁線上購物的全端開發與主機維運。以 PHP + MySQL 負責建置第一代電子發票自動開立、物流出貨與貨態追蹤、廣告數據整合系統，串接電商營運所需的金流、物流與發票流程，並支援雙 11 等大型檔期。', image: imgAmz })"
          >
            <img :src="imgAmz" alt="a.m.z 亞瑪勁線上購物" class="w-24 h-16 object-cover rounded-lg border border-slate-800 group-hover:scale-105 transition" />
            <div>
              <span class="text-xs text-sky-400 font-semibold">https://www.amz.tw/</span>
              <h4 class="text-sm font-bold text-white mt-0.5">a.m.z 亞瑪勁線上購物</h4>
            </div>
          </div>

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
          <span class="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-slate-400 mb-1">2012/12 ～ 2013/07 (8個月)</div>
          <h3 class="text-xl font-bold text-white">
            PHP程式設計師 ｜ 東方鴻展遊戲有限公司
          </h3>

          <p class="text-slate-300 text-sm mt-2 leading-relaxed mb-4">
            負責遊戲點數商城 1758play 的 PHP 開發（MVC、Smarty）與前端頁面，並維護 Linux 主機。
          </p>

          <!-- 內嵌實績預覽卡片 -->
          <div 
            class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-sky-500/50 transition cursor-pointer group flex items-center gap-4"
            @click="openModal({ title: '東方鴻展遊戲有限公司：1758play', period: '2012/12 - 2013/07', description: '負責遊戲點數商城 1758play 的 PHP 開發（MVC、Smarty）與前端頁面，並維護 Linux 主機。', image: img1758 })"
          >
            <img :src="img1758" alt="1758play" class="w-24 h-16 object-cover rounded-lg border border-slate-800 group-hover:scale-105 transition" />
            <div>
              <span class="text-xs text-sky-400 font-semibold">(closed) http://1758.1758play.com/</span>
              <h4 class="text-sm font-bold text-white mt-0.5">1758play 數位內容商城</h4>
            </div>
          </div>

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
          <span class="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-slate-400 mb-1">2011/10 ～ 2012/11 (1年2個月)</div>
          <h3 class="text-xl font-bold text-white mb-2">
            PHP程式設計師 ｜ 網勁科技股份有限公司（ECnet）
          </h3>
          <p class="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
            負責跨國購物商城「荷包網」的 PHP 開發與維運，處理 PostgreSQL 查詢效能調整與 Discuz 社群模組。
          </p>

          <div 
            class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-sky-500/50 transition cursor-pointer group flex items-center gap-4"
            @click="openModal({ title: '網勁科技股份有限公司（ECnet）：荷包網 (JoinBao) 商城', period: '2011/10 - 2012/11', description: '負責跨國購物商城「荷包網」的 PHP 開發與維運，處理 PostgreSQL 查詢效能調整與 Discuz 社群模組。', image: imgJoinBao })"
          >
            <img :src="imgJoinBao" alt="荷包網 (JoinBao) 商城" class="w-24 h-16 object-cover rounded-lg border border-slate-800 group-hover:scale-105 transition" />
            <div>
              <span class="text-xs text-sky-400 font-semibold">(closed) http://www.joinbao.com/</span>
              <h4 class="text-sm font-bold text-white mt-0.5">荷包網 (JoinBao) 商城</h4>
            </div>
          </div>

          <!-- 技術棧標籤 -->
          <div class="flex flex-wrap gap-2 mt-4 text-xs">
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">PHP</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">PostgreSQL</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">Discuz</span>
          </div>
        </div>

        <!-- 瘋狂賣客 -->
        <div class="relative">
          <span class="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-slate-400 mb-1">2011/01 ～ 2011/10 (10個月)</div>
          <h3 class="text-xl font-bold text-white mb-2">
            PHP程式設計師 ｜ 地壹創媒
          </h3>
          <p class="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
            負責「每日一物」團購網站的 PHP 開發與主機維運。每日特賣開檔時流量集中，負責資料庫查詢與前端效能調整，讓網站撐住尖峰。
          </p>

          <div 
            class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-sky-500/50 transition cursor-pointer group flex items-center gap-4"
            @click="openModal({ title: '地壹創媒：瘋狂賣客 (CrazyMike)', period: '2011/01 - 2011/10', description: '負責「每日一物」團購網站的 PHP 開發與主機維運。每日特賣開檔時流量集中，負責資料庫查詢與前端效能調整，讓網站撐住尖峰。', image: imgCrazyMike })"
          >
            <img :src="imgCrazyMike" alt="瘋狂賣客" class="w-24 h-16 object-cover rounded-lg border border-slate-800 group-hover:scale-105 transition" />
            <div>
              <span class="text-xs text-sky-400 font-semibold">http://crazymike.tw/</span>
              <h4 class="text-sm font-bold text-white mt-0.5">瘋狂賣客團購網</h4>
            </div>
          </div>
          <!-- 技術棧標籤 -->
          <div class="flex flex-wrap gap-2 mt-4 text-xs">
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">PHP</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">MySQL</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">Linux</span>
          </div>
        </div>

        <!-- 基礎：永漢國際書局 & 藝游館 -->
        <div class="relative">
          <span class="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-slate-800 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-slate-400 mb-1">2005/03 ～ 2010/12 (5年10個月)</div>
          <h3 class="text-xl font-bold text-white">
            網路工程師 / MIS ｜ 永漢國際書局 & 藝游館文化事業
          </h3>
          <p class="text-slate-300 text-sm mt-2 leading-relaxed mb-4">
            負責「Qbooks 日文雜誌 MOOK 網路書店」的程式開發，以及公司內部 IT：架設 LAMP 環境、DNS 與郵件伺服器，並負責網路安全與資料庫管理。
          </p>

          <div 
            class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-sky-500/50 transition cursor-pointer group flex items-center gap-4"
            @click="openModal({ title: '永漢國際書局：Qbooks 日文雜誌 MOOK 網路書店', period: '2005/03 - 2010/12', description: '負責「Qbooks 日文雜誌 MOOK 網路書店」的程式開發，以及公司內部 IT：架設 LAMP 環境、DNS 與郵件伺服器，並負責網路安全與資料庫管理。', image: imgJmag })"
          >
            <img :src="imgJmag" alt="永漢國際書局" class="w-24 h-16 object-cover rounded-lg border border-slate-800 group-hover:scale-105 transition" />
            <div>
              <span class="text-xs text-sky-400 font-semibold">http://www.qbooks.com.tw/</span>
              <h4 class="text-sm font-bold text-white mt-0.5">Qbooks 日文雜誌 MOOK 網路書店</h4>
            </div>
          </div>
          <!-- 技術棧標籤 -->
          <div class="flex flex-wrap gap-2 mt-4 text-xs">
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">PHP</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">MySQL</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">Linux</span>
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">DNS / Mail Server</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 圖片放大燈箱 Modal -->
    <div 
      v-if="selectedImage" 
      class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
      @click="closeModal"
    >
      <div 
        class="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative cursor-default"
        @click.stop
      >
        <div class="p-4 border-b border-slate-800 flex justify-between items-center">
          <h3 class="font-bold text-lg text-white">{{ selectedImage.title }}</h3>
          <button 
            class="text-slate-400 hover:text-white text-xl font-bold px-3 py-1 rounded-lg bg-slate-800 cursor-pointer"
            @click="closeModal"
          >
            ✕
          </button>
        </div>
        <div class="p-6 bg-slate-950 flex justify-center">
          <img :src="selectedImage.image" :alt="selectedImage.title" class="max-h-[60vh] object-contain rounded-lg" />
        </div>
        <div class="p-6">
          <p class="text-slate-300 text-sm mb-2"><strong class="text-white">維運期間：</strong>{{ selectedImage.period }}</p>
          <p class="text-slate-400 text-sm leading-relaxed">{{ selectedImage.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>