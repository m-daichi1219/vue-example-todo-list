<template>
  <div>
    <p>テストページ</p>
    <DetailForm :task="task" mode="add" :onclick="onclick">
    </DetailForm>
  </div>
</template>

<script>
import DetailForm from '@/components/molecules/TaskDetailForm.vue'

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
    DetailForm
  },
  methods: {
    handleClick () {
      console.log('ボタンがクリックされました')
    }
  }
}
</script>
