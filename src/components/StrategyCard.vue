<script setup lang="ts">
import { TrendingUp, TrendingDown } from 'lucide-vue-next'

defineProps<{
  title: string
  value: string
  change: number
  description: string
  iconColor: string
}>()
</script>

<template>
  <div class="acrylic-card p-5 rounded-2xl flex flex-col gap-4 relative overflow-hidden group hover:border-accent/30 transition-all duration-300">
    <!-- Glow Effect -->
    <div class="absolute -right-4 -top-4 w-24 h-24 bg-accent/10 blur-3xl rounded-full group-hover:bg-accent/20 transition-all" />
    
    <div class="flex justify-between items-start relative z-10">
      <div class="flex flex-col">
        <span class="text-white/40 text-xs font-medium uppercase tracking-widest">{{ title }}</span>
        <span class="text-2xl font-bold text-white mt-1">{{ value }}</span>
      </div>
      <div 
        :class="['p-2 rounded-xl bg-opacity-10', iconColor]"
      >
        <TrendingUp v-if="change >= 0" class="w-5 h-5 text-emerald-400" />
        <TrendingDown v-else class="w-5 h-5 text-rose-400" />
      </div>
    </div>

    <div class="flex items-center gap-2 relative z-10">
      <span :class="['text-xs font-bold px-1.5 py-0.5 rounded', change >= 0 ? 'bg-emerald-400/10 text-emerald-400' : 'bg-rose-400/10 text-rose-400']">
        {{ change >= 0 ? '+' : '' }}{{ change }}%
      </span>
      <span class="text-white/30 text-xs">{{ description }}</span>
    </div>
  </div>
</template>

<style scoped>
.acrylic-card {
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}
</style>
