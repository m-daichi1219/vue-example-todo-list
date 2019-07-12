<template>
  <div class="task-card">
    <div class="task-name">
      <router-link :to="{ name: 'taskDetailModal', params: { id } }">
        {{ name }}
      </router-link>
    </div>
    <div class="task-button">
      <Button
        type="text"
        @click="$emit('remove', { id })"
      >
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/atom/Button.vue'

export default {
  name: 'TaskCard',
  components: {
    Button
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

