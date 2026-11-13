<!-- src/components/SideProjects.vue -->
<template>
  <section class="py-20 bg-slate-900 text-white px-6">
    <div class="max-w-5xl mx-auto">
      <!-- 區塊標題 -->
      <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold border-l-4 border-sky-500 pl-4 mb-2">
          進修實作與個人專案 (Education & Side Projects)
        </h2>
      </div>

      <div class="space-y-8">
        <div class="bg-slate-800/80 p-8 rounded-2xl border border-slate-700/80 hover:border-sky-500/50 transition">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h3 class="text-xl font-bold text-white flex items-center gap-2">
              <img 
                src="@/assets/images/nou-logo.png" 
                alt="國立空中大學" 
                class="mr-1 p-2 bg-white text-emerald-400 rounded-xl w-12 h-12 object-contain"
              />
              國立空中大學 ｜ 管資系 
              
            </h3>
            <span class="text-xs bg-sky-500/10 text-sky-400 px-3 py-1 rounded-full border border-sky-500/20 w-fit">
              持續進修中
            </span>
          </div>
          <p class="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
            透過管資系扎實的系統分析與資料庫管理學理，並將所學直接應用於下方的個人從零孵化系統中。
          </p>
          <div class="flex flex-wrap gap-2 text-xs">
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">學理與實作並進</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">系統分析</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">資料庫設計與軟體工程核心</span>
          </div>
        </div>

        <!-- 💻 個人專案列表 (Side Projects) -->
        <div class="bg-slate-800/80 p-8 rounded-2xl border border-slate-700/80 hover:border-sky-500/50 transition">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h3 class="text-xl font-bold text-white flex items-center gap-2">
              <img 
                src="@/assets/images/nou-logo-ui.png" 
                alt="空大學習助手平台" 
                class="mr-1 p-2 bg-emerald-500/20 text-emerald-400 rounded-xl w-12 h-12 object-contain"
              />
              <div class="flex flex-wrap items-center gap-1">
                空大學習助手平台 
                <a href="https://nou.rudebao.com.tw" target="_blank" class="text-xs text-sky-400 font-normal hover:underline">
                  (nou.rudebao.com.tw ↗)
                </a>
              </div>
            </h3>
            <span class="text-xs bg-sky-500/10 text-sky-400 px-3 py-1 rounded-full border border-sky-500/20 w-fit">
              持續更新中
            </span>
          </div>
          <p class="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
            結合空大進修生涯所學之系統架構與資料庫設計理念，獨立從零打造的實務應用系統。提供學員更高效的學習資源整合與輔助互動體驗，驗證現代化前端與後端協作的最佳實踐。
          </p>
          <div class="flex flex-wrap gap-2 text-xs">
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">Vue 3</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">TypeScript</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">Tailwind CSS</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">Python / FastAPI</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">Linux / Nginx</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">Docker Compose</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>