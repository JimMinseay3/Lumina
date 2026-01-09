<script setup lang="ts">
export interface TableColumn {
  key: string
  label: string
  group: 'basic' | 'momentum' | 'capital' | 'financial'
}

const props = defineProps<{
  columns: TableColumn[]
  data: any[]
}>()

const getHeaderColor = (group: string) => {
  switch (group) {
    case 'basic': return 'text-white'
    case 'momentum': return 'text-accent'
    case 'capital': return 'text-gold'
    case 'financial': return 'text-gray'
    default: return 'text-white/60'
  }
}
</script>

<template>
  <div class="acrylic-card rounded-xl overflow-hidden border border-white/5 shadow-2xl">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="bg-white/5 border-b border-white/5">
          <th 
            v-for="col in columns" 
            :key="col.key"
            :class="['px-4 py-3 text-xs font-semibold tracking-wider uppercase', getHeaderColor(col.group)]"
          >
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-white/5">
        <tr 
          v-for="(row, idx) in data" 
          :key="idx"
          class="hover:bg-white/5 transition-colors group"
        >
          <td 
            v-for="col in columns" 
            :key="col.key"
            class="px-4 py-3 text-sm text-white/70 group-hover:text-white/90"
          >
            <span v-if="col.key === 'change'" :class="row[col.key] >= 0 ? 'text-emerald-400' : 'text-rose-400'">
              {{ row[col.key] >= 0 ? '+' : '' }}{{ row[col.key] }}%
            </span>
            <span v-else>{{ row[col.key] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
