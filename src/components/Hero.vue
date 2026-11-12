<!-- src/components/Hero.vue -->
<script setup lang="ts">
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>

<template>
  <section class="bg-slate-900 text-white py-20 px-6 relative">
    <!-- 內嵌於 Hero 頂部的導覽列 -->
    <div class="max-w-5xl mx-auto flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
      <a href="#" class="font-bold text-white flex items-center gap-2 hover:text-sky-400 transition">
        <span class="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
        徐瑄伶 <span class="text-xs text-slate-400 font-normal">(Denise)</span>
      </a>

      <!-- 桌面版導覽連結 -->
      <nav class="hidden md:flex items-center gap-6 text-sm text-slate-300">
        <a href="#tech" class="hover:text-sky-400 transition">技術棧</a>
        <a href="#projects" class="hover:text-sky-400 transition">系統專案</a>
        <a href="#experience" class="hover:text-sky-400 transition">職涯經歷</a>
        <a href="#history" class="hover:text-sky-400 transition">早期專案</a>
      </nav>

      <!-- 手機版漢堡選單 -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-slate-400 hover:text-white p-2">
        ☰
      </button>
    </div>
    <!-- 手機版展開選單 -->
    <div v-if="isMenuOpen" class="max-w-5xl mx-auto md:hidden bg-slate-800/90 rounded-xl p-4 mb-8 space-y-3 text-sm border border-slate-700">
      <a href="#tech" @click="isMenuOpen = false" class="block text-slate-300 hover:text-sky-400">技術棧</a>
      <a href="#projects" @click="isMenuOpen = false" class="block text-slate-300 hover:text-sky-400">系統專案</a>
      <a href="#experience" @click="isMenuOpen = false" class="block text-slate-300 hover:text-sky-400">職涯經歷</a>
      <a href="#history" @click="isMenuOpen = false" class="block text-slate-300 hover:text-sky-400">早期專案</a>
    </div>
    <!-- Hero 主文內容 -->
    <div class="max-w-4xl mx-auto text-center">
      <div class="inline-block bg-sky-500/10 text-sky-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-sky-500/20">
        Senior Full-Stack & Systems Engineer
      </div>
      <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-6">
        徐瑄伶 <span class="text-slate-400 font-normal text-2xl md:text-3xl">(Denise / 阿累)</span>
      </h1>
      <p class="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
        擁有 15 年以上網路相關開發與系統維運經驗。專精於高併發電商系統架構、異質 API 整合、自動化工作流與 DevOps (Linux/Docker)，並積極導入 AI 工具優化開發效能。
      </p>
      
    </div>

  </section>
</template>