<!-- src/components/SideProjects.vue -->
<template>
  <section class="py-20 bg-slate-900 text-white px-6">
    <div class="max-w-5xl mx-auto">
      <!-- 區塊標題 -->
      <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold border-l-4 border-sky-500 pl-4 mb-2">
          學歷與個人專案
        </h2>
      </div>

      <div class="space-y-8">
        <div class="bg-slate-800/80 p-8 rounded-2xl border border-slate-700/80 hover:border-sky-500/50 transition">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h3 class="text-xl font-bold text-white flex items-center gap-2">
              <img 
                src="@/assets/images/nou-logo.webp" 
                alt="國立空中大學" 
                class="mr-1 p-2 bg-white text-emerald-400 rounded-xl w-12 h-12 object-contain"
              />
              國立空中大學 ｜ 管理與資訊學系 
              
            </h3>
            <span class="text-xs bg-sky-500/10 text-sky-400 px-3 py-1 rounded-full border border-sky-500/20 w-fit">
              持續進修中
            </span>
          </div>
          <p class="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
            在學中，預計 2029 年畢業
          </p>
          <p class="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
            將系統分析、資料庫設計與軟體工程課程直接應用在下方的個人專案。
          </p>

        </div>

        <!-- 語言能力 -->
        <div class="bg-slate-800/80 px-8 py-5 rounded-2xl border border-slate-700/80">
          <p class="text-slate-300 text-sm md:text-base">
            <strong class="text-white">語言能力</strong>　日文：略懂（JLPT N4）
          </p>
        </div>

        <!-- 💻 個人專案列表 (Side Projects) -->
        <div class="bg-slate-800/80 p-8 rounded-2xl border border-slate-700/80 hover:border-sky-500/50 transition">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h3 class="text-xl font-bold text-white flex items-center gap-2">
              <img 
                src="@/assets/images/nou-logo-ui.webp" 
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
            我獨立開發、給空大同學用的學習輔助平台，目前正式環境有 626 位學員。把課堂上學的系統分析與資料庫設計直接拿來實作，前端 Vue 3 + TypeScript，後端 FastAPI，用 Docker Compose 部署在自己的主機。
          </p>
          <ul class="list-disc list-inside text-slate-300 text-sm mb-6 space-y-1.5 leading-relaxed">
            <li><strong class="text-white">學分計算器</strong>：查各學期開課、即時試算學分，並提醒面授衝堂。</li>
            <li><strong class="text-white">畢業進度</strong>：記錄已修課程，依入學年度的畢業規則算出還差多少學分。</li>
            <li><strong class="text-white">學分學程進度</strong>：對照各學系學程，列出還差哪些科目。</li>
            <li><strong class="text-white">空大行事曆</strong>：整理官方選課、開播與考試日期。</li>
            <li><strong class="text-white">個人行事曆訂閱</strong>：依學員輸入的課程與班級，產生個人 iCal 訂閱網址，定期自動同步面授與期中、期末考時間；上課前 1 小時、考試前 1 天及 1 小時提醒。</li>
            <li><strong class="text-white">二手書交流</strong>：學員之間買賣、交換教科書，有配對通知。</li>
            <li><strong class="text-white">課表分享</strong>：一鍵產生修課清單連結，同學可直接匯入。</li>
          </ul>
          <p class="text-slate-400 text-sm mb-6">支援 LINE / email 登入。網站採用 PWA（Progressive Web App）技術，可以加到手機主畫面，像 App 一樣開啟使用（非原生 iOS / Android App）。</p>
          <div class="flex flex-wrap gap-2 text-xs">
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">Vue 3</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">TypeScript</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">Tailwind CSS</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">PWA</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">Python / FastAPI</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">Linux / Nginx</span>
            <span class="bg-slate-900 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700">Docker Compose</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>