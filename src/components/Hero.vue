<!-- src/components/Hero.vue -->
<script setup lang="ts">
import { ref } from 'vue'
const isMenuOpen = ref(false)
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
  <section class="bg-slate-900 text-white pt-28 pb-20 px-6 relative">
    <div class="max-w-4xl mx-auto text-center">
      <div class="inline-block bg-sky-500/10 text-sky-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-sky-500/20">
        Senior Full-Stack & Systems Engineer
      </div>
      <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-6">
        徐瑄伶 <span class="text-slate-400 font-normal text-2xl md:text-3xl">(Denise / 很累)</span>
      </h1>
      <p class="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
        專精於高併發電商系統架構、Python (FastAPI) 後端開發、異質 API 整合、自動化工作流與 DevOps (Linux/Docker)，持續透過現代化技術優化企業核心營運效能。
      </p>
    </div>
  </section>
</template>