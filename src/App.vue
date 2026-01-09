<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Sidebar from './components/layout/Sidebar.vue'
import Header from './components/layout/Header.vue'
import ContentWrapper from './components/layout/ContentWrapper.vue'
import StrategyCard from './components/StrategyCard.vue'
import ModernTable, { type TableColumn } from './components/ModernTable.vue'
import TabSwitcher from './components/TabSwitcher.vue'
import { useAppStore } from './store'

const store = useAppStore()
const fundType = ref('etf')

const mockStocks = [
  { name: '贵州茅台', code: '600519', price: '1680.00', change: 1.2, momentum: '强', volume: '12.5亿', roe: '28.5%' },
  { name: '宁德时代', code: '300750', price: '158.30', change: -0.8, momentum: '弱', volume: '35.2亿', roe: '22.1%' },
  { name: '比亚迪', code: '002594', price: '215.60', change: 2.5, momentum: '极强', volume: '28.1亿', roe: '18.9%' },
  { name: '招商银行', code: '600036', price: '32.15', change: 0.3, momentum: '中', volume: '8.4亿', roe: '15.2%' },
  { name: '长江电力', code: '600900', price: '25.80', change: 0.1, momentum: '稳', volume: '5.2亿', roe: '14.8%' },
]

const columns: TableColumn[] = [
  { key: 'name', label: '名称', group: 'basic' },
  { key: 'code', label: '代码', group: 'basic' },
  { key: 'price', label: '价格', group: 'momentum' },
  { key: 'change', label: '涨跌幅', group: 'momentum' },
  { key: 'momentum', label: '动能评分', group: 'momentum' },
  { key: 'volume', label: '成交额', group: 'capital' },
  { key: 'roe', label: 'ROE', group: 'financial' },
]
</script>

<template>
  <div class="flex h-screen w-full bg-background overflow-hidden select-none">
    <!-- Main UI Container -->
    <div class="flex h-full w-full relative">
      <Sidebar />
      
      <div class="flex-1 flex flex-col min-w-0">
        <Header />
        
        <ContentWrapper>
          <div v-if="store.activeMenu === 'market-snapshot'" class="space-y-8 animate-in fade-in duration-500">
            <!-- Hero Section -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StrategyCard 
                title="巴菲特价值策略" 
                value="128.5" 
                :change="12.4" 
                description="近30日收益率"
                iconColor="bg-blue-500"
              />
              <StrategyCard 
                title="市场恐慌贪婪指数" 
                value="64" 
                :change="-5" 
                description="贪婪阶段"
                iconColor="bg-amber-500"
              />
              <StrategyCard 
                title="全A股涨跌中位数" 
                value="+0.85%" 
                :change="0.2" 
                description="市场赚钱效应：好"
                iconColor="bg-emerald-500"
              />
            </div>

            <!-- Table Section -->
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-bold text-white/90 flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-accent rounded-full" />
                  实时行情快照
                </h2>
                <div class="flex gap-2">
                  <button class="px-3 py-1 text-xs bg-white/5 hover:bg-white/10 text-white/60 rounded-lg transition-colors">自选股</button>
                  <button class="px-3 py-1 text-xs bg-white/5 hover:bg-white/10 text-white/60 rounded-lg transition-colors">全市场</button>
                </div>
              </div>
              <ModernTable :columns="columns" :data="mockStocks" />
            </div>
          </div>

          <div v-else-if="store.activeMenu === 'fund-center'" class="space-y-6">
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-bold text-white/90">基金中心</h2>
              <TabSwitcher 
                v-model="fundType" 
                :options="[{label: '场内 ETF', value: 'etf'}, {label: '场外基金', value: 'otc'}]" 
              />
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="acrylic-card p-6 rounded-2xl h-64 flex items-center justify-center border border-white/5 border-dashed">
                <span class="text-white/20 text-sm">Lightweight Charts Container</span>
              </div>
              <div class="acrylic-card p-6 rounded-2xl h-64 flex items-center justify-center border border-white/5 border-dashed">
                <span class="text-white/20 text-sm">Lightweight Charts Container</span>
              </div>
            </div>
          </div>

          <div v-else class="flex flex-col items-center justify-center h-full text-white/20">
            <span class="text-4xl font-bold italic tracking-tighter opacity-10 uppercase">{{ store.activeMenu }}</span>
            <p class="mt-4 text-sm font-medium">模块开发中...</p>
          </div>
        </ContentWrapper>
      </div>
    </div>
  </div>
</template>

<style>
/* Global Styles for Layout */
html, body {
  background-color: transparent !important;
}

.animate-in {
  animation: animate-in 0.5s ease-out;
}

@keyframes animate-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
