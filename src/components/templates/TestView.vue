<template>
  <div>
    <p>テストページ</p>
    <TaskCard :id='id' name="task">
    </TaskCard>
  </div>
</template>

<script>
import TaskCard from '@/components/molecules/TaskCard.vue'

export default {
  name: 'TestView',
  props: {
    id: {
      type: Number,
      default: 1
    },
  },
  components: {
    TaskCard
  },
  methods: {
    handleClick () {
      console.log('ボタンがクリックされました')
    }
  }
}
</script>
