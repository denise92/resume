<!-- src/components/TechStack.vue -->
<template>
  <section class="py-20 bg-slate-950 text-white px-6 border-t border-slate-900">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-bold mb-10 border-l-4 border-sky-500 pl-4">
        核心技術棧 (Tech Stack)
      </h2>
      
      <!-- 調整為 6 大分類網格 (md:grid-cols-2 lg:grid-cols-3) -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- 1. Backend -->
        <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 class="text-sky-400 font-semibold mb-3">Backend</h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">Python</span>
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">FastAPI</span>
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">PHP</span>
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">Laravel</span>
          </div>
        </div>

        <!-- 2. Frontend -->
        <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 class="text-emerald-400 font-semibold mb-3">Frontend</h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">Vue.js</span>
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">TypeScript</span>
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">HTML5</span>
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">Tailwind CSS</span>
          </div>
        </div>

        <!-- 3. Database -->
        <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 class="text-amber-400 font-semibold mb-3">Database</h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">PostgreSQL</span>
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">MySQL</span>
          </div>
        </div>

        <!-- 4. Infrastructure -->
        <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 class="text-purple-400 font-semibold mb-3">Infrastructure</h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">Linux</span>
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">Docker</span>
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">Nginx</span>
          </div>
        </div>

        <!-- 5. Integration -->
        <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 class="text-rose-400 font-semibold mb-3">Integration</h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">RESTful API</span>
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">Webhook</span>
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">SFTP</span>
          </div>
        </div>

        <!-- 6. Tools -->
        <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 class="text-indigo-400 font-semibold mb-3">Tools</h3>
          
          <div class="flex flex-wrap gap-2">
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">GitHub</span>
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">Bitbucket</span>
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">SVN</span>
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">Cursor</span>
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">Codex</span>
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">Claude</span>
            <span class="bg-slate-900 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-800">VS Code</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>