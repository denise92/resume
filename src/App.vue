<!-- src/App.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Hero from './components/Hero.vue'
import TechStack from './components/TechStack.vue'
import Architecture from './components/Architecture.vue'
import HistoryGallery from './components/HistoryGallery.vue'
import Experience from './components/Experience.vue'
import SideProjects from './components/SideProjects.vue'
import Contact from './components/Contact.vue'

// 控制返回頁首按鈕的顯示與隱藏
const showBackToTop = ref(false)

const handleScroll = () => {
  // 當畫面向下滾動超過 300px 時顯示按鈕
  if (window.scrollY > 300) {
    showBackToTop.value = true
  } else {
    showBackToTop.value = false
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 平滑捲動回頂部
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <main class="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
    <!-- 1. 個人首頁與定位 -->
    <Hero />
    
    <!-- 2. 核心技術棧 -->
    <TechStack id="tech" />

    <!-- 6. 個人側專案與開源貢獻 -->
    <SideProjects id="side-projects" />
    
    <!-- 3. 購金車三大系統架構 -->
    <Architecture id="projects" />

    
    
    <!-- 4. 職涯經歷沿革 -->
    <Experience id="experience" />

    <!-- 5. 早期經手網站與平台實績 -->
    <HistoryGallery id="history" />

    <!-- 7. 聯繫方式 -->
    <Contact id="contact" />
    
    <!-- 頁尾 -->
    <footer class="bg-slate-950 py-8 text-center text-slate-500 text-xs border-t border-slate-900">
      <p>© 2026 徐瑄伶 (Denise) - Senior Full-Stack Portfolio. Built with Vue 3 & Tailwind CSS.</p>
    </footer>

    <!-- 返回頁首浮動按鈕 -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <button
        v-if="showBackToTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 z-50 bg-sky-600 hover:bg-sky-500 text-white p-3.5 rounded-2xl shadow-lg shadow-sky-900/40 border border-sky-400/30 flex items-center justify-center transition group"
        title="返回頁首"
      >
        <!-- 向上箭頭 SVG 圖示 -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:-translate-y-0.5 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </transition>
  </main>
</template>