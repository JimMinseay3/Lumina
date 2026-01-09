<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  options: { label: string, value: string }[]
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])

const select = (val: string) => {
  emit('update:modelValue', val)
}
</script>

<template>
  <div class="flex p-1 bg-white/5 rounded-xl border border-white/5 w-fit">
    <button 
      v-for="opt in options" 
      :key="opt.value"
      @click="select(opt.value)"
      :class="[
        'px-4 py-1.5 text-xs font-medium rounded-lg transition-all duration-200',
        modelValue === opt.value 
          ? 'bg-white/10 text-white shadow-sm' 
          : 'text-white/40 hover:text-white/60'
      ]"
    >
      {{ opt.label }}
    </button>
  </div>
</template>
