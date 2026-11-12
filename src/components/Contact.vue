<!-- src/components/Contact.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const copiedEmail = ref(false)
const email = 'denise92.tw@gmail.com'

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
      
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mt-4 mb-6">
        尋找資深全端與系統架構夥伴？歡迎與我聯繫
      </h2>
      
      <p class="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        專精於企業核心系統架構升級、Python (FastAPI) 後端開發、自動化工作流建置與系統維運。無論是專案合作或技術交流，歡迎隨時與我聯繫！
      </p>

      <!-- 主要互動按鈕群 -->
      <div class="flex flex-col md:flex-row md:flex-wrap justify-center gap-4 mb-12">
        <!-- 發送 Email 按鈕 -->
        <a 
          :href="`mailto:${email}`" 
          class="bg-sky-600 hover:bg-sky-500 text-white font-medium px-6 py-3.5 rounded-xl transition shadow-lg shadow-sky-900/40 flex items-center gap-2"
        >
          <span>📧</span> 寄送 Email
        </a>

        <!-- 一鍵複製 Email 按鈕 -->
        <button 
          @click="copyEmail"
          class="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-6 py-3.5 rounded-xl transition border border-slate-700 flex items-center gap-2"
        >
          <span>📋</span> {{ copiedEmail ? '已複製 Email !' : '複製 Email 帳號' }}
        </button>

        <!-- LINE 專屬快速連結 -->
        <a 
          href="https://line.me/ti/p/~denise92" 
          target="_blank" 
          class="bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-medium px-6 py-3.5 rounded-xl transition border border-emerald-500/30 flex items-center gap-2"
        >
          <span>💬</span> LINE 加好友 (denise92)
        </a>

        <!-- GitHub 連結按鈕 -->
        <a 
          href="https://github.com/denise92" 
          target="_blank" 
          class="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-6 py-3.5 rounded-xl transition border border-slate-700 flex items-center gap-2"
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