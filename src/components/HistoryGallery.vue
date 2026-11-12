<!-- src/components/HistoryGallery.vue -->
<script setup lang="ts">
import { ref } from 'vue'

import img1758 from '@/assets/images/1758play.jpg'
import imgJoinBao from '@/assets/images/joinbao.jpg'
import imgCrazyMike from '@/assets/images/crazymike.jpg'
import imgJmag from '@/assets/images/jmag.jpg'
import imgAsuka from '@/assets/images/asuka.jpg'
import imgWinner from '@/assets/images/winnertek.jpg'
import imgJjb from '@/assets/images/jjb.jpg'

// 定義歷史專案資料結構
interface ProjectItem {
  title: string
  period: string
  tech: string
  description: string
  image: string
}

// 帶入您的歷史經手網站資料
const projects = ref<ProjectItem[]>([
  {
    title: '1758play (東方鴻展)',
    period: '2012/12 - 2013/07',
    tech: 'PHP, MySQL, Smarty, MVC, SVN, Linux',
    description: '負責遊戲與數位內容平台之網頁程式設計、網站視覺設計與主機維運。',
    image: img1758
  },
  {
    title: '網勁科技：荷包網 (JoinBao)',
    period: '2011/10 - 2012/11',
    tech: 'PHP, PostgreSQL, Smarty, Discuz, SVN, Linux',
    description: '參與跨國與大型網購商城系統開發與維運，負責資料庫架構與互動模組。',
    image: imgJoinBao
  },
  {
    title: '地壹創媒：瘋狂賣客 (CrazyMike)',
    period: '2011/01 - 2011/10',
    tech: 'PHP, PostgreSQL, Smarty, Discuz, SVN, Linux',
    description: '參與知名團購電商平台之系統架構維運與前端效能優化，處理高流量挑戰。',
    image: imgCrazyMike
  },
  {
    title: '永漢國際書局：Qbooks 日文雜誌 MOOK 網路書店',
    period: '2008/11 - 2010/12',
    tech: 'PHP, MySQL, SEO, LAMP, DNS, Mail Server, Linux',
    description: '負責日文雜誌與書籍商城開發，並一手包辦 LAMP 系統架構、DNS 及郵件伺服器建置與維運。',
    image: imgJmag
  },
  {
    title: '飛鳥井の部屋 (Akira\'s ACG room)',
    period: '早期 ACG 專案',
    tech: 'PHP, MySQL, osCommerce, Linux',
    description: '基於 osCommerce 電商框架進行客製化開發與動漫主題內容網站建置。',
    image: imgAsuka
  },
  {
    title: '旺安科技 (Winner Technology)',
    period: '2008/09 - 2008/10',
    tech: 'HTML, Flash, CGI, Windows Server',
    description: '負責企業形象網站前端網頁製作、Flash 動態互動與 CGI 程式串接。',
    image: imgWinner
  },
  {
    title: 'JJB 珍珠網 ',
    period: '早期網路專案',
    tech: 'PHP, MySQL, Linux Server',
    description: '參與網路社群與內容平台之後端程式設計與資料庫管理。',
    image: imgJjb
  }
])

// 控制點擊圖片放大的 Modal 狀態
const selectedImage = ref<ProjectItem | null>(null)

const openModal = (project: ProjectItem) => {
  selectedImage.value = project
}

const closeModal = () => {
  selectedImage.value = null
}
</script>

<template>
  <section class="py-20 bg-slate-950 text-white px-6 border-t border-slate-900">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold border-l-4 border-sky-500 pl-4 mb-2">
          早期經手網站與平台實績 (Historical Projects)
        </h2>
        <p class="text-slate-400 text-sm">累積 15 年以上資歷的早期知名電商與內容平台架構參與紀錄</p>
      </div>

      <!-- 圖片藝廊網格 -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(item, index) in projects" 
          :key="index"
          class="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition flex flex-col cursor-pointer group"
          @click="openModal(item)"
        >
          <!-- 圖片縮圖預覽區 -->
          <div class="relative overflow-hidden aspect-video bg-slate-900">
            <img 
              :src="item.image" 
              :alt="item.title"
              class="object-cover w-full h-full group-hover:scale-105 transition duration-500"
            />
            <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span class="bg-sky-600 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg">點擊放大預覽</span>
            </div>
          </div>

          <!-- 內容說明區 -->
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div class="text-xs text-sky-400 font-semibold mb-1">{{ item.period }}</div>
              <h3 class="text-lg font-bold text-white mb-2">{{ item.title }}</h3>
              <p class="text-slate-400 text-sm leading-relaxed mb-4">{{ item.description }}</p>
            </div>
            <div class="flex flex-wrap gap-1.5 text-xs">
              <span 
                v-for="(t, tIdx) in item.tech.split(', ')" 
                :key="tIdx"
                class="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/60"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 圖片燈箱 Modal (點擊後放大) -->
    <div 
      v-if="selectedImage" 
      class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
      @click="closeModal"
    >
      <div 
        class="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
        @click.stop
      >
        <div class="p-4 border-b border-slate-800 flex justify-between items-center">
          <h3 class="font-bold text-lg text-white">{{ selectedImage.title }}</h3>
          <button 
            class="text-slate-400 hover:text-white text-xl font-bold px-3 py-1 rounded-lg bg-slate-800"
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
          <p class="text-slate-300 text-sm mb-4"><strong class="text-white">技術棧：</strong>{{ selectedImage.tech }}</p>
          <p class="text-slate-400 text-sm leading-relaxed">{{ selectedImage.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>