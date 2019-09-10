<template>
  <div>
    <h2 id="title">TODOリスト</h2>
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <label>期限の近い順に並べる</label>
          <input
            type="checkbox"
            id="isNear"
            v-model="isNear"
          >
        </div>
        <div class="col-auto">
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
        </div>
        <div class="col-auto">
          <router-link :to="{ name: 'taskDetailModal', params: { id: 'new' }}">
            <Button
              type="add"
            >
              アイテムの追加
            </Button>
          </router-link>
        </div>
        <!-- タスク詳細モーダル表示用プレースホルダ -->
        <router-view />
      </div>
    </div>
    <TaskList 
      :tasks="taskList"
    >
    </TaskList>
  </div>
</template>

<script>
import { mapGetters, Store } from 'vuex'
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
    }),
    taskList () {
      const taskList = this.tasks({isNear: this.isNear, tag: this.selectedTag})
      return ( taskList ?  taskList : [] )
    }
  },
  methods: {
    // taskList() {
    //   const tasks = this.tasks({isNear: this.isNear, tag: this.selectedTag})
    //   return ( tasks ? [] : tasks )
    // }
  }
}
</script>

