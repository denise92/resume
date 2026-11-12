<!-- src/components/SideProjects.vue 範例 -->
<template>
  <section id="side-projects" class="py-20 bg-slate-950 text-white px-6 border-t border-slate-900">
    <div class="max-w-5xl mx-auto">
      <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold border-l-4 border-sky-500 pl-4 mb-2">
          進修實作與個人專案 (Side Projects)
        </h2>
        <p class="text-slate-400 text-sm">結合空大進修生涯與 15 年工程經驗，獨立從零打造的實務應用系統</p>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-sky-500/50 transition shadow-xl">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <span class="text-xs font-semibold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
              2026 獨立開發
            </span>
            <h3 class="text-2xl font-bold text-white mt-2">空大學習助手平台</h3>
          </div>
          <a 
            href="https://nou.rudebao.com.tw/" 
            target="_blank" 
            class="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition shadow-lg shadow-sky-900/30 w-fit"
          >
            訪問線上網站 ↗
          </a>
        </div>

        <p class="text-slate-300 text-sm leading-relaxed mb-6">
          於國立空中大學進修期間，利用下班與課餘時間獨立建置的整合平台。旨在運用現代化網頁與系統架構，解決學生在課程查詢與資源整合上的痛點，實現從需求分析、UI/UX 設計、前後端開發到 Linux 主機部署的完整產品生命週期。
        </p>

        <div class="flex flex-wrap gap-2 text-xs">
          <span class="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700">Vue 3</span>
          <span class="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700">TypeScript</span>
          <span class="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700">Tailwind CSS</span>
          <span class="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700">Linux / Nginx</span>
          <span class="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700">Docker</span>
          <span class="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700">DevOps 獨立維運</span>
        </div>
      </div>
    </div>
  </section>
</template>