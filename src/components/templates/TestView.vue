<template>
  <div>
    <p>テストページ</p>
    <button @click="fetchTask">
      FETCH_ALL_TASKLIST
    </button>
    <button @click="setTask">
      setTask
    </button>
    <button @click="getTask">
      getTask
    </button>
    <hr>
    <li v-for="task in list" v-bind:key="task.id">
      <div>
        {{task.name}}
      </div>
    </li>
  </div>
</template>

<script>
import * as types from '@/store/mutation-types'
import { mapGetters } from 'vuex'
import { constants } from 'fs';

export default {
  name: 'TestView',
  props: {
    id: {
      type: Number,
      default: 1
    },
    tasks: {
      type: Array,
      default: () => (
         [
            {
              name: 'TaskName1',
              tags: ['tag1', 'tag2'],
              detail: 'detail comment',
              limit: '2019-12-01T12:59',
              id: 1
            },
            {
              name: 'TaskName2',
              tags: ['tag2', 'tag3'],
              detail: 'detail comment',
              limit: '2017-12-15T12:59',
              id: 2
            },
            {
              name: 'TaskName3',
              tags: ['tag3', 'tag4'],
              detail: 'detail comment',
              limit: '2018-12-31T12:59',
              id: 3
            }
          ]
        )
    },
  },
  data () {
    return {
      onclick() {
        console.log("onclick")
        return true
      },
      terms: { isNear:false, tag: '' },
      list: []
    }
  },
  methods: {
    setTask() {
      console.log(this.$store.state.tasks)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    getTask() {
      this.list = JSON.parse(localStorage.getItem('tasks'))
      // this.list = this.$store.getters.fetchTasks(this.terms)
    },
    fetchTask () {
      this.$store.dispatch('fetchLists')
    }
  }
}
</script>
