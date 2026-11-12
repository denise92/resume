<!-- src/components/TechStack.vue -->
<template>
  <section class="py-16 bg-slate-950 text-white px-6 border-t border-slate-900">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-bold mb-10 border-l-4 border-sky-500 pl-4">
        核心技術棧 (Tech Stack)
      </h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- 後端與架構 -->
        <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 class="text-sky-400 font-semibold mb-3">Backend & API</h3>
          <ul class="space-y-2 text-slate-300 text-sm">
            <li>• Python / FastAPI</li>
            <li>• PHP / Laravel</li>
            <li>• API 規格與 MCP 整合</li>
            <li>• RESTful API 設計</li>
          </ul>
        </div>

        <!-- 前端與介面 -->
        <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 class="text-emerald-400 font-semibold mb-3">Frontend</h3>
          <ul class="space-y-2 text-slate-300 text-sm">
            <li>• Vue.js / TypeScript</li>
            <li>• Tailwind CSS / Bootstrap</li>
            <li>• jQuery / HTML5</li>
            <li>• 網頁視覺與基礎影像處理</li>
          </ul>
        </div>

        <!-- 系統運維 -->
        <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 class="text-purple-400 font-semibold mb-3">DevOps & Database</h3>
          <ul class="space-y-2 text-slate-300 text-sm">
            <li>• Linux (CentOS / Ubuntu)</li>
            <li>• Docker 容器與儲存管理</li>
            <li>• MySQL / PostgreSQL</li>
            <li>• 主機維運與備份 (Time Machine)</li>
          </ul>
        </div>

        <!-- AI 與協作 -->
        <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 class="text-amber-400 font-semibold mb-3">AI & Workflow</h3>
          <ul class="space-y-2 text-slate-300 text-sm">
            <li>• Claude.ai / Cursor / Codex</li>
            <li>• 提示詞工程 (Prompt Engineering)</li>
            <li>• Git / Git Flow 版控</li>
            <li>• 跨部門協調與專案執行</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>