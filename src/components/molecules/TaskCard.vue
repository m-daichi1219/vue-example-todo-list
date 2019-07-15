<template>
  <div class="task-card">
    <div class="task-name">
      <router-link :to="{ name: 'taskDetailModal', params: { id } }">
        {{ name }}
      </router-link>
    </div>
    <div class="task-button">
      <Button
        type="remove"
        @click="$emit('remove', { id })"
      >
        <Icon type="add"></Icon>
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button.vue'
import Icon from '@/components/atoms/Icon.vue'

export default {
  name: 'TaskCard',
  components: {
    Button,
    Icon
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

