<template>
    <div class="mb-4">
      <input type="text" v-model="modelValue" class="w-full border rounded px-3 py-2" placeholder="Search recipes..." />
    </div>
</template>
  
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    modelValue: {
      type: String,
      default: ''
    }
});

const emits = defineEmits(['update:modelValue']);

const modelValue = computed({
    get: () => props.modelValue,
    set: (val: string) => {
      emits('update:modelValue', val);
    }
});
</script>
  