<template>
  <div>
    <p>テストページ</p>
    <!-- Atomsのテスト -->
    <Button
      type="button"
      @click="handleClick"
    >
    テスト
    </Button>
    <Button
      type="text"
      @click="handleClick"
    >
     <Icon type="add"></Icon>
    </Button>
    <Button
      type="text"
      @click="handleClick"
    >
     <Icon type="remove"></Icon>
    </Button>

    <router-link :to="{ name: 'taskDetailModalTest', params: { id } }">
      {{ id }}
    </router-link>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button.vue'
import Icon from '@/components/atoms/Icon.vue'

export default {
  name: 'TestView',
  props: {
    id: {
      type: Number,
      default: 1
    },
  },
  components: {
    Button,
    Icon
  },
  methods: {
    handleClick () {
      console.log('ボタンがクリックされました')
    }
  }
}
</script>
