<script setup lang="ts">
import { useAppStore } from '../../store'

const store = useAppStore()
</script>

<template>
  <main class="flex-1 overflow-hidden flex flex-col pt-10">
    <transition 
      name="fade" 
      mode="out-in"
    >
      <div :key="store.activeMenu" class="flex-1 overflow-y-auto p-6 scrollbar-hide">
        <slot></slot>
      </div>
    </transition>
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(4px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
