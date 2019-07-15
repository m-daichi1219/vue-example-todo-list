<template>
  <div class="card">
    <div class="card-button">
      <Button
        type="remove"
        @click="$emit('remove', { id })"
      >
        <Icon type="remove"></Icon>
      </Button>
    </div>
    <div class="card-body">
      <router-link :to="{ name: 'taskDetailModal', params: { id } }">
        {{ name }}
      </router-link>
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

<style scoped>
.card-button {
  position: absolute; right:10px; top: 14px;
}
</style>
