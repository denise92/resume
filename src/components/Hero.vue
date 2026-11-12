<!-- src/components/Hero.vue -->
<script setup lang="ts">
import { ref } from 'vue'
const isMenuOpen = ref(false)
const isModalOpen = ref(false)
</script>

<template>
  <!-- 固定黏在頂端的導覽列 (桌機與手機共用) -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-slate-700/80 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300">
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" class="font-bold text-white flex items-center gap-2 hover:text-sky-400 transition">
        <span class="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
        徐瑄伶 <span class="text-xs text-slate-400 font-normal">(Denise)</span>
      </a>

      <!-- 桌面版導覽連結 -->
      <nav class="hidden md:flex items-center gap-6 text-sm text-slate-300">
        <a href="#tech" class="hover:text-sky-400 transition">技術棧</a>
        <a href="#side-projects" class="hover:text-sky-400 transition">個人專案</a>
        <a href="#projects" class="hover:text-sky-400 transition">系統專案</a>
        <a href="#experience" class="hover:text-sky-400 transition">職涯經歷</a>
        <a href="#history" class="hover:text-sky-400 transition">早期專案</a>
        <a href="#contact" class="hover:text-sky-400 transition">聯絡方式</a>
      </nav>

      <!-- 手機版漢堡選單按鈕 -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-slate-300 hover:text-white p-2 focus:outline-none">
        <span class="text-xl">☰</span>
      </button>
    </div>

    <!-- 手機版展開選單 (帶有半透明背景與毛玻璃) -->
    <div v-if="isMenuOpen" class="md:hidden bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 px-6 py-4 space-y-3 text-sm shadow-xl">
      <a href="#tech" @click="isMenuOpen = false" class="block text-slate-300 hover:text-sky-400 py-1">技術棧</a>
      <a href="#side-projects" @click="isMenuOpen = false" class="block text-slate-300 hover:text-sky-400 py-1">個人專案</a>
      <a href="#projects" @click="isMenuOpen = false" class="block text-slate-300 hover:text-sky-400 py-1">系統專案</a>
      <a href="#experience" @click="isMenuOpen = false" class="block text-slate-300 hover:text-sky-400 py-1">職涯經歷</a>
      <a href="#history" @click="isMenuOpen = false" class="block text-slate-300 hover:text-sky-400 py-1">早期專案</a>
      <a href="#contact" @click="isMenuOpen = false" class="block text-slate-300 hover:text-sky-400 py-1">聯絡方式</a>
    </div>
  </header>

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

      <div class="inline-block bg-sky-500/10 text-sky-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-sky-500/20">
        Senior Full-Stack & Systems Engineer
      </div>
      
      <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-6">
        徐瑄伶 <span class="text-slate-400 font-normal text-2xl md:text-3xl">(Denise / 阿累)</span>
      </h1>
      <p class="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
        專精於高併發電商系統架構、Python (FastAPI) 後端開發、異質 API 整合、自動化工作流與 DevOps (Linux/Docker)，持續透過現代化技術優化企業核心營運效能。
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