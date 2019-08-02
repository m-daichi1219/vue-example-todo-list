<template>
  <div>
    <label>期限の近い順に並べる</label>
    <input
      type="checkbox"
      id="isNear"
      v-model="isNear"
    >
    <label>タグを指定</label>
    <select name="taglist">
      <option
        v-for="(tag, index) in tagList"
        :key="index"
        :id="index"
      >
        {{tag}}
      </option>
    </select>
    <Button
      type="add"
    >
    アイテムの追加
    </Button>
    <p>TaskMainView</p>
      <div v-if="tasks">
        <TaskList 
          :tasks="tasks"
        >
        </TaskList>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Button from '@/components/atoms/Button.vue'
import TaskList from '@/components/organisms/TaskList.vue'

export default {
  name: 'TaskMainView',
  components: {
    Button,
    TaskList
  },
  data () {
    return {
      isNear: false,
      selectedTag: ''
    }
  },
  computed: {
    ...mapGetters({
      tasks: 'fetchTasks',
      tagList: 'fetchTagList'
    })
  }
}
</script>

