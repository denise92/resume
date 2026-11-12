<!-- src/components/SystemArchitecture.vue -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import mermaid from 'mermaid'

const chartRef = ref<HTMLElement | null>(null)

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  // 增加節點之間的間距，讓圖表更寬敞易讀
  flowchart: {
    htmlLabels: true,
    curve: 'basis',
    nodeSpacing: 50,
    rankSpacing: 60,
  }
})

onMounted(async () => {
  if (chartRef.value) {
    const { svg } = await mermaid.render('mermaid-svg-id', chartDefinition)
    chartRef.value.innerHTML = svg
    
    // 自動將產生的 SVG 寬度撐開，確保字體清晰
    const svgElement = chartRef.value.querySelector('svg')
    if (svgElement) {
      svgElement.style.width = '100%'
      svgElement.style.height = 'auto'
      svgElement.style.maxW = 'none'
    }
  }
})

const chartDefinition = `
  graph LR
      subgraph 網站前端 & 購物車
          A[網站產生訂單] --> B[觸發 API]
      end

      subgraph 電子發票自動化系統
          B --> C{確認可開立}
          C -->|建立排程| D[SFTP 傳送]
          D --> E[財政部 eTurnkey 平台]
          E -->|定期排程回存| F[發票狀態同步]
          F -->|Webhook| A
      end

      subgraph 智慧物流出貨系統
          B --> G[篩選訂單出貨]
          G --> H[串接宅配/超商 API]
          H --> I[配置託運單號]
          I --> J[背景排程追蹤貨態]
          J -->|Webhook 即時更新| A
      end

      style A fill:#0284c7,stroke:#fff,stroke-width:2px,color:#fff
      style E fill:#059669,stroke:#fff,stroke-width:2px,color:#fff
      style H fill:#7c3aed,stroke:#fff,stroke-width:2px,color:#fff
`
</script>

<template>
  <section class="py-16 bg-slate-900 text-white px-6 border-t border-slate-800">
    <div class="max-w-6xl mx-auto"> <!-- 放大容器寬度 -->
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl font-bold border-l-4 border-sky-500 pl-4 mb-2">
          系統架構與資料流向圖 (Architecture Flow)
        </h2>
        <p class="text-slate-400 text-sm">透過自動化排程與 Webhook 實現高穩定性的異質系統整合</p>
      </div>
      
      <!-- 加大內距與滾動支援，確保大螢幕清晰 -->
      <div class="bg-slate-950 p-8 rounded-2xl border border-slate-800 overflow-x-auto shadow-2xl">
        <div ref="chartRef" class="mermaid-container min-w-[800px] flex justify-center">
          <span class="text-slate-500 text-sm py-12">載入系統架構圖中...</span>
        </div>
      </div>
    </div>
  </section>
</template>