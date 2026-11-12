<!-- src/App.vue -->
<script setup lang="ts">
import Hero from './components/Hero.vue'
import TechStack from './components/TechStack.vue'
import Architecture from './components/Architecture.vue'
import Experience from './components/Experience.vue'
</script>

<template>
  <main class="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
    <!-- 1. 個人首頁與定位 -->
    <Hero />
    
    <!-- 2. 核心技術棧 -->
    <TechStack />
    
    <!-- 3. 金車三大系統架構 -->
    <Architecture />
    
    <!-- 4. 職涯經歷沿革 -->
    <Experience />
    
    <!-- 頁尾 -->
    <footer class="bg-slate-950 py-8 text-center text-slate-500 text-xs border-t border-slate-900">
      <p>© 2026 徐瑄伶 (Denise) - Senior Full-Stack Portfolio. Built with Vue 3 & Tailwind CSS.</p>
    </footer>
  </main>
</template>