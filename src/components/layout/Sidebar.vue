<script setup lang="ts">
import { 
  LayoutDashboard, 
  Filter, 
  BarChart2, 
  PieChart, 
  History, 
  Settings 
} from 'lucide-vue-next'
import { useAppStore } from '../../store'

const store = useAppStore()

const menuItems = [
  { id: 'market-snapshot', icon: LayoutDashboard, label: '市场快照' },
  { id: 'stock-screener', icon: Filter, label: '股票筛选' },
  { id: 'stock-data', icon: BarChart2, label: '个股数据' },
  { id: 'fund-center', icon: PieChart, label: '基金中心' },
  { id: 'history', icon: History, label: '行情历史' },
]
</script>

<template>
  <aside class="w-56 flex flex-col acrylic-sidebar h-full pt-12 pb-4">
    <nav class="flex-1 px-3 space-y-1">
      <button 
        v-for="item in menuItems" 
        :key="item.id"
        @click="store.setActiveMenu(item.id)"
        :class="[
          'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group',
          store.activeMenu === item.id 
            ? 'bg-accent/10 text-accent shadow-[inset_0_0_12px_rgba(59,130,246,0.1)]' 
            : 'text-white/50 hover:bg-white/5 hover:text-white/80'
        ]"
      >
        <component 
          :is="item.icon" 
          :class="['w-5 h-5', store.activeMenu === item.id ? 'text-accent' : 'text-white/40 group-hover:text-white/60']" 
        />
        <span class="text-sm font-medium">{{ item.label }}</span>
        <div v-if="store.activeMenu === item.id" class="ml-auto w-1 h-4 bg-accent rounded-full" />
      </button>
    </nav>

    <div class="px-3">
      <button 
        @click="store.setActiveMenu('settings')"
        :class="[
          'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group',
          store.activeMenu === 'settings' 
            ? 'bg-accent/10 text-accent' 
            : 'text-white/50 hover:bg-white/5 hover:text-white/80'
        ]"
      >
        <Settings class="w-5 h-5 text-white/40 group-hover:text-white/60" />
        <span class="text-sm font-medium">设置</span>
      </button>
    </div>
  </aside>
</template>
