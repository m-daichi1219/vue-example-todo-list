<template>
  <div>
    <p>テストページ</p>
    <TaskMainForm>
    </TaskMainForm>
  </div>
</template>

<script>
import TaskMainForm from '@/components/templates/TaskMainView.vue'

export default {
  name: 'TestView',
  props: {
    id: {
      type: Number,
      default: 1
    },
  },
  data () {
    return {
      task: {
        name: 'TaskName',
        tags: ['tag1', 'tag2'],
        detail: 'detail comment',
        limit: '2019-12-31T12:59'
      },
      onclick() {
        console.log("onclick")
        return true
      }
    }
  },
  components: {
    TaskMainForm
  },
  methods: {
    handleClick () {
      console.log('ボタンがクリックされました')
    }
  }
}
</script>
