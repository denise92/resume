<!-- src/components/Hero.vue -->
<script setup lang="ts">
import { ref } from 'vue'
const isModalOpen = ref(false)
</script>

<template>
  <!-- Hero 主文內容區塊 (加上 pt-28 確保不會被 fixed 導覽列遮擋) -->
  <section class="bg-slate-900 text-white pt-32 px-6 mb-5 relative">
    <div class="absolute inset-x-0 top-0 bottom-[-50px] z-0 overflow-hidden pointer-events-none">
      <img 
        src="@/assets/images/cover.jpg" 
        alt="Diving Background" 
        class="w-full h-full object-cover object-center opacity-90 scale-105 filter brightness-75"
      />
      <!-- 漸層遮罩：讓上方與下方自然融入深色背景 -->
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-900"></div>
    </div>

    <div class="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
      <!-- 🌟 個人近照大頭貼 (支援圓形與微光暈邊框) -->
      <div class="relative mb-6 group cursor-pointer" title="點擊放大圖片" @click="isModalOpen = true">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
        <img 
          src="@/assets/images/profile.jpg" 
          alt="徐瑄伶 (Denise)" 
          class="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-slate-800 shadow-2xl"
        />
        <!-- 懸停時提示文字 -->
        <span class="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition text-xs font-medium text-white">
          點擊放大預覽
        </span>
      </div>

      <div class="inline-block bg-sky-500/10 text-sky-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-sky-500/20">
        Senior Software Developer
      </div>
      <div class="text-xs text-slate-300 mb-4 mt-2">
        Full-Stack Development · Enterprise Systems · System Integration
      </div>
      
      <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-6">
        徐瑄伶 <span class="text-slate-400 font-normal text-2xl md:text-3xl">(Denise / 阿累)</span>
      </h1>
      <p class="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
        15 年以上軟體開發與系統維運經驗，專精電商營運自動化：電子發票、物流串接與廣告數據整合。我曾在兩家公司從零建置這類核心系統，第一代用 PHP，第二代以 Python (FastAPI) 重新設計，熟悉系統從 0 到 1、再從 1 到 2 的完整演進。
      </p>
      <p class="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
        擅長把營運痛點轉成可維運的系統，涵蓋需求分析、架構設計、API 整合、背景排程與 Linux / Docker 維運，並已將 Claude、Cursor 等 AI 輔助開發工具導入日常開發流程。
      </p>
    </div>
  </section>

  <!-- 🌟 全螢幕燈箱 Modal (點擊背景或圖片即可關閉) -->
  <div 
    v-if="isModalOpen" 
    @click="isModalOpen = false"
    class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out transition-opacity"
  >
    <div class="relative max-w-3xl max-h-[90vh]">
      <img 
        src="@/assets/images/profile.jpg" 
        alt="徐瑄伶 (Denise) 原圖" 
        class="max-w-full max-h-[85vh] rounded-2xl shadow-2xl border border-slate-700 object-contain"
      />
      <p class="text-center text-slate-400 text-xs mt-3">點擊任意處關閉預覽</p>
    </div>
  </div>
</template>