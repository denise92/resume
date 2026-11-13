<!-- src/components/Experience.vue -->
<script setup lang="ts">
import { ref } from 'vue'

// 引入歷史經手網站圖片
import img1758 from '@/assets/images/1758play.jpg'
import imgJoinBao from '@/assets/images/joinbao.jpg'
import imgCrazyMike from '@/assets/images/crazymike.jpg'
import imgJmag from '@/assets/images/jmag.jpg'
import imgWinner from '@/assets/images/winnertek.jpg'
import imgJjb from '@/assets/images/jjb.jpg'
import imgAmz from '@/assets/images/amz.png'
import imgBeanfun from '@/assets/images/beanfun.jpg'
import imgAib from '@/assets/images/aib.png'

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
          職涯經歷沿革 (Experience Track Record)
        </h2>
        <p class="text-slate-400 text-sm">橫跨大型企業核心系統、知名電商與遊戲產業的架構演進史</p>
      </div>
      
      <div class="space-y-12 border-l-2 border-slate-800 pl-6 ml-2">
        <!-- 現職：購金車有限公司 -->
        <div class="relative">
          <span class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-sky-500 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-sky-400 mb-1">2016/03 ～ 至今 (10年8個月)</div>
          <h3 class="text-xl font-bold text-white">資深全端工程師 ｜ 購金車有限公司</h3>
          
          <p class="text-slate-300 text-sm mt-2 leading-relaxed mb-4">
            負責全端網路程式設計、網站系統開發、主機維運（Linux/Docker）與資料庫管理。近年更率先將 AI 輔助開發工具（如 Claude、Cursor 等）引入日常工作流程，結合豐富的系統分析經驗，大幅提升網站功能迭代效率、自動化腳本編寫與問題排查速度。獨立開發電子發票自動化系統、智慧物流與廣告數據管理系統，並主導跨部門協調與專案執行。
          </p>
          <ul class="list-disc list-inside text-slate-300 text-sm mb-4 space-y-1.5 leading-relaxed">
            <li><strong class="text-white">需求分析</strong>：與實際業務需求對應，釐清系統功能及作業流程。</li>
            <li><strong class="text-white">系統設計</strong>：規劃系統架構、資料處理流程及外部服務整合方式。</li>
            <li><strong class="text-white">程式開發</strong>：負責核心功能實作、API 串接與自動化流程建置。</li>
            <li><strong class="text-white">系統整合</strong>：整合內部業務系統與第三方服務。</li>
            <li><strong class="text-white">上線導入</strong>：將開發完成的系統導入實際企業營運。</li>
            <li><strong class="text-white">維護優化</strong>：負責系統後續維護、異常處理與功能調整。</li>
          </ul>
          
          <div 
            class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-sky-500/50 transition cursor-pointer group flex items-center gap-4"
            @click="openModal({ title: '購金車有限公司：aiB官方網站', period: '2016/03 - 至今', description: '負責全端網路程式設計、網站系統開發、主機維運（Linux/Docker）與資料庫管理。近年更率先將 AI 輔助開發工具（如 Claude、Cursor 等）引入日常工作流程，結合豐富的系統分析經驗，大幅提升網站功能迭代效率、自動化腳本編寫與問題排查速度。獨立開發電子發票自動化系統、智慧物流與廣告數據管理系統，並主導跨部門協調與專案執行。', image: imgAib })"
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
          <span class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-600 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-slate-400 mb-1">2015/09 ～ 2016/03 (7個月)</div>
          <h3 class="text-xl font-bold text-white">資深程式設計師 ｜ 遊戲橘子股份有限公司</h3>
          
          <p class="text-slate-300 text-sm mt-2 leading-relaxed mb-4">
            負責手機遊戲 source code 整合與後端系統維運。期間參與多款知名熱門手遊（如《召喚圖板》、《五四三國誌》、《龍族撲克》）的後端架構維護、版本迭代與第三方 API 串接，運用 Zend Framework、Laravel 與 Lumen 確保高併發環境下的系統穩定與流暢運行。
          </p>

          <div 
            class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-sky-500/50 transition cursor-pointer group flex items-center gap-4"
            @click="openModal({ title: '遊戲橘子股份有限公司：遊戲橘子', period: '2015/09 - 2016/03', description: '負責手機遊戲 source code 整合與後端系統維運。期間參與多款知名熱門手遊（如《召喚圖板》、《五四三國誌》、《龍族撲克》）的後端架構維護、版本迭代與第三方 API 串接，運用 Zend Framework、Laravel 與 Lumen 確保高併發環境下的系統穩定與流暢運行。', image: imgBeanfun })"
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
          <span class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-600 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-slate-400 mb-1">2014/08 ～ 2015/8 (1年1個月)</div>
          <h3 class="text-xl font-bold text-white">資深程式設計師 ｜ 購明系雲科技有限公司</h3>
          
          <p class="text-slate-300 text-sm mt-2 leading-relaxed mb-4">
            長期主導旗下質感生活電商品牌「a.m.z 亞瑪勁線上購物」與企業核心系統之全端架構設計、網站系統開發、主機維運（Linux/Docker）與資料庫管理。從零到有規劃並獨立開發電子發票自動化系統、智慧物流出貨與貨態追蹤、以及跨平台廣告數據整合管理系統，串接電商營運所需的金流、物流與發票自動化流程，並全面支援平台各項大型促銷活動（如雙 11 檔期）之營運與行銷推廣需求。
          </p>

          <div 
            class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-sky-500/50 transition cursor-pointer group flex items-center gap-4"
            @click="openModal({ title: '購明系雲科技有限公司：a.m.z 亞瑪勁線上購物', period: '2014/08 - 2015/08', description: '長期主導旗下質感生活電商品牌「a.m.z 亞瑪勁線上購物」與企業核心系統之全端架構設計、網站系統開發、主機維運（Linux/Docker）與資料庫管理。從零到有規劃並獨立開發電子發票自動化系統、智慧物流出貨與貨態追蹤、以及跨平台廣告數據整合管理系統，串接電商營運所需的金流、物流與發票自動化流程，並全面支援平台各項大型促銷活動（如雙 11 檔期）之營運與行銷推廣需求。', image: imgAmz })"
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
          <span class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-slate-400 mb-1">2012/12 ～ 2013/07 (8個月)</div>
          <h3 class="text-xl font-bold text-white">
            PHP程式設計師 ｜ 東方鴻展遊戲有限公司
          </h3>

          <p class="text-slate-300 text-sm mt-2 leading-relaxed mb-4">
            參與台灣早期指標性遊戲與數位內容商城平台（1758play）之營運與開發。負責核心網路程式設計、網站前端視覺與互動架構建置，並執行嚴格的網路安全維護與主機高可用性管理。運用 PHP、MySQL、Smarty 樣板引擎與 MVC 架構，確保遊戲商城在多款熱門線上遊戲發行與點數交易期間的系統穩定性與流暢的會員體驗。
          </p>

          <!-- 內嵌實績預覽卡片 -->
          <div 
            class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-sky-500/50 transition cursor-pointer group flex items-center gap-4"
            @click="openModal({ title: '東方鴻展遊戲有限公司：1758play', period: '2012/12 - 2013/07', description: '參與台灣早期指標性遊戲與數位內容商城平台（1758play）之營運與開發。負責核心網路程式設計、網站前端視覺與互動架構建置，並執行嚴格的網路安全維護與主機高可用性管理。運用 PHP、MySQL、Smarty 樣板引擎與 MVC 架構，確保遊戲商城在多款熱門線上遊戲發行與點數交易期間的系統穩定性與流暢的會員體驗。', image: img1758 })"
          >
            <img :src="img1758" alt="1758play" class="w-24 h-16 object-cover rounded-lg border border-slate-800 group-hover:scale-105 transition" />
            <div>
              <span class="text-xs text-sky-400 font-semibold">http://1758.1758play.com/</span>
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
          <span class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-slate-400 mb-1">2011/10 ～ 2012/11 (1年2個月)</div>
          <h3 class="text-xl font-bold text-white mb-2">
            PHP程式設計師 ｜ 網勁科技股份有限公司（ECnet）
          </h3>
          <p class="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
            參與台灣早期指標性跨國網購商城與社群電商平台（荷包網）之系統開發與維運。面對龐大商品目錄與複雜的使用者互動需求，負責深度的資料庫查詢優化、核心網路程式設計與日常系統安全防護，確保高流量與跨國資料交換下的平台穩定度與交易安全。
          </p>

          <div 
            class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-sky-500/50 transition cursor-pointer group flex items-center gap-4"
            @click="openModal({ title: '網勁科技股份有限公司（ECnet）：荷包網 (JoinBao) 商城', period: '2011/10 - 2012/11', description: '參與台灣早期指標性跨國網購商城與社群電商平台（荷包網）之系統開發與維運。面對龐大商品目錄與複雜的使用者互動需求，負責深度的資料庫查詢優化、核心網路程式設計與日常系統安全防護，確保高流量與跨國資料交換下的平台穩定度與交易安全。', image: imgJoinBao })"
          >
            <img :src="imgJoinBao" alt="荷包網 (JoinBao) 商城" class="w-24 h-16 object-cover rounded-lg border border-slate-800 group-hover:scale-105 transition" />
            <div>
              <span class="text-xs text-sky-400 font-semibold">http://www.joinbao.com/</span>
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
          <span class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-slate-400 mb-1">2011/01 ～ 2011/10 (10個月)</div>
          <h3 class="text-xl font-bold text-white mb-2">
            PHP程式設計師 ｜ 網勁科技股份有限公司
          </h3>
          <p class="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
            參與台灣早期最具代表性之「每日一物」團購與奇特選品電商平台。負責核心系統架構維運與前端效能優化，應對每日特賣開檔時瞬間湧入的龐大流量挑戰，並執行日常網站安全維護與資料庫查詢優化，確保高併發情境下的交易流暢與資安防護。
          </p>

          <div 
            class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-sky-500/50 transition cursor-pointer group flex items-center gap-4"
            @click="openModal({ title: '網勁科技股份有限公司：瘋狂賣客 (CrazyMike)', period: '2011/01 - 2011/10', description: '參與台灣早期最具代表性之「每日一物」團購與奇特選品電商平台。負責核心系統架構維運與前端效能優化，應對每日特賣開檔時瞬間湧入的龐大流量挑戰，並執行日常網站安全維護與資料庫查詢優化，確保高併發情境下的交易流暢與資安防護。', image: imgCrazyMike })"
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
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">API 整合</span>
          </div>
        </div>

        <!-- 早期基礎：永漢國際書局 & 藝游館 -->
        <div class="relative">
          <span class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-4 border-slate-950"></span>
          <div class="text-xs font-semibold text-slate-400 mb-1">2005/03 ～ 2010/12 (累積 6 年系統與網管資歷)</div>
          <h3 class="text-xl font-bold text-white">
            網路工程師與 MIS 主管 ｜ 永漢國際書局 & 藝游館文化事業
          </h3>
          <p class="text-slate-300 text-sm mt-2 leading-relaxed mb-4">
            長期負責台灣日語教育與日文書籍引進先驅——永漢國際書局旗下知名指標平台「Qbooks 日文雜誌 MOOK 網路書店」之系統開發與全方位資訊架構維運。一手包辦 LAMP 伺服器環境架構設計、DNS 與郵件伺服器（Mail Server）建置管理、網路與資訊安全維護、資料庫管理以及商城網站程式設計，為後續多年橫跨大型企業、電商與遊戲產業的全端開發與系統維運實力，打下最深厚且扎實的技術底子。
          </p>

          <div 
            class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-sky-500/50 transition cursor-pointer group flex items-center gap-4"
            @click="openModal({ title: '永漢國際書局：Qbooks 日文雜誌 MOOK 網路書店', period: '2008/11 - 2010/12', description: '長期負責台灣日語教育與日文書籍引進先驅——永漢國際書局旗下知名指標平台「Qbooks 日文雜誌 MOOK 網路書店」之系統開發與全方位資訊架構維運。一手包辦 LAMP 伺服器環境架構設計、DNS 與郵件伺服器（Mail Server）建置管理、網路與資訊安全維護、資料庫管理以及商城網站程式設計，為後續多年橫跨大型企業、電商與遊戲產業的全端開發與系統維運實力，打下最深厚且扎實的技術底子。', image: imgJmag })"
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
            <span class="bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">API 整合</span>
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