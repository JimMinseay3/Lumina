<script setup lang="ts">
import { appWindow } from '@tauri-apps/api/window'
import { Minus, Square, X, Search } from 'lucide-vue-next'
import { useAppStore } from '../../store'

const store = useAppStore()

const minimize = () => appWindow.minimize()
const toggleMaximize = () => appWindow.toggleMaximize()
const close = () => appWindow.close()
</script>

<template>
  <header class="titlebar bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5" data-tauri-drag-region>
    <div class="flex items-center pl-4 gap-2 pointer-events-none">
      <div class="w-6 h-6 bg-accent rounded-lg flex items-center justify-center">
        <span class="text-[10px] font-bold text-white">L</span>
      </div>
      <span class="text-sm font-semibold tracking-tight text-white/90">Lumina</span>
    </div>

    <div class="flex-1 flex justify-center px-4">
      <div class="relative w-full max-w-md group">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-accent transition-colors" />
        <input 
          v-model="store.searchQuery"
          type="text" 
          placeholder="搜索股票、代码或策略..." 
          class="w-full bg-white/5 border border-white/10 rounded-full py-1 pl-10 pr-4 text-xs focus:outline-none focus:bg-white/10 focus:border-accent/50 transition-all placeholder:text-white/20"
        />
      </div>
    </div>

    <div class="flex items-center">
      <button @click="minimize" class="titlebar-button">
        <Minus class="w-3.5 h-3.5 text-white/70" />
      </button>
      <button @click="toggleMaximize" class="titlebar-button">
        <Square class="w-3 h-3 text-white/70" />
      </button>
      <button @click="close" id="titlebar-close" class="titlebar-button">
        <X class="w-4 h-4 text-white/70" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.titlebar {
  height: 40px;
}
</style>
