<!-- src/components/Contact.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const copiedEmail = ref(false)
const email = 'rei7092@gmail.com'

const copyEmail = () => {
  navigator.clipboard.writeText(email)
  copiedEmail.value = true
  setTimeout(() => { copiedEmail.value = false }, 2000)
}
</script>

<template>
  <section id="contact" class="py-24 bg-slate-900 text-white px-6 border-t border-slate-800 relative overflow-hidden">
    <!-- 背景裝飾光暈 -->
    <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-4xl mx-auto text-center relative z-10">
      <span class="text-xs font-semibold text-sky-400 bg-sky-500/10 px-4 py-1.5 rounded-full border border-sky-500/20">
        Get in Touch
      </span>
      
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-6">
        尋找資深全端與系統架構夥伴？歡迎與我聯繫
      </h2>
      
      <!-- 整合進來的「關於我 / 專業摘要」區塊 -->
      <div class="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 md:p-8 mb-10 text-left shadow-lg backdrop-blur-sm">
        <h3 class="text-sky-400 font-semibold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-sky-400"></span> 關於我 (About Me)
        </h3>
        <p class="text-slate-300 text-sm md:text-base leading-relaxed">
          擁有 15 年以上軟體開發與系統維運經驗的全端工程師。從早期底層網管、大型電商平台到企業核心系統架構（購金車電子發票、智慧物流追蹤與廣告數據整合管理系統），具備扎實的後端架構設計、異質 API 整合與 DevOps 實戰能力。熱衷於透過自動化與現代化技術解決實務痛點，並持續在進修與開源專案中保持技術動能。
        </p>
      </div>

      <!-- 主要互動按鈕群 -->
      <div class="flex flex-col md:flex-row md:flex-wrap justify-center gap-4 mb-12">
        <!-- 發送 Email 按鈕 -->
        <a 
          :href="`mailto:${email}`" 
          class="bg-sky-600 hover:bg-sky-500 text-white font-medium px-6 py-3.5 rounded-xl transition shadow-lg shadow-sky-900/40 flex items-center justify-center gap-2"
        >
          <span>📧</span> 寄送 Email
        </a>

        <!-- 一鍵複製 Email 按鈕 -->
        <button 
          @click="copyEmail"
          class="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-6 py-3.5 rounded-xl transition border border-slate-700 flex items-center justify-center gap-2"
        >
          <span>📋</span> {{ copiedEmail ? '已複製 Email !' : '複製 Email 帳號' }}
        </button>

        <!-- LINE 專屬快速連結 -->
        <a 
          href="https://line.me/ti/p/~denise92" 
          target="_blank" 
          class="bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-medium px-6 py-3.5 rounded-xl transition border border-emerald-500/30 flex items-center justify-center gap-2"
        >
          <span>💬</span> LINE 加好友 (denise92)
        </a>

        <!-- GitHub 連結按鈕 -->
        <a 
          href="https://github.com/denise92" 
          target="_blank" 
          class="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-6 py-3.5 rounded-xl transition border border-slate-700 flex items-center justify-center gap-2"
        >
          <span>⚡</span> GitHub 倉庫
        </a>
      </div>

      <!-- 額外聯絡資訊提示 -->
      <div class="text-slate-400 text-sm flex flex-col sm:flex-row justify-center items-center gap-6 pt-8 border-t border-slate-800">
        <p>📍 駐點地區：台灣台北市 (Taipei, Taiwan) / 遠端作業</p>
        <p>💼 可配合型態：全職資深工程師 / 專案顧問</p>
      </div>
    </div>
  </section>
</template>