<template>
  <form>
    <div class="item">
      <label>タスク名</label>
      <input
        id="name"
        type="text"
        v-model="task.name"
      >
    </div>
    <div class="item">
      <label>タグ(半角スペース区切りで複数登録可)</label>
      <input
        id="tags"
        type="text"
        :value="tag"
      >
    </div>
    <div class="item">
      <label>詳細</label>
      <textarea
        id="detail"
        type="text"
        v-model="task.detail"
      >
      </textarea>
    </div>
    <div class="item">
      <label>期限</label>
      <input
        id="limit"
        type="datetime-local"
        v-model="task.limit"
      >
    </div>
    <Button
      :type="mode"
      @click="handleClick"
      :disabled="false"
    >
      {{ btnMessage }}
    </Button>
  </form>
</template>

<script>
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'TaskDetailForm',
  Components: {
    Button
  },
  props: {
    task: {
      type: Object,
      required: true,
    },
    mode: {
      type: String,
      required: true,
      validator: value => {
        return ['update', 'add'].indexOf(value) !== -1
      }
    },
    onclick: {
      type: Function,
      required: true
    }
  },
  computed: {
    tag () {
      let ret = ''
      if (!this.task.tags) { return ret }

      this.task.tags.forEach((value) => {
        ret += ' ' + value
      })

      return ret.trim()
    },
    valid () {
      // TOOD:
      //  props(task)の変更時に再計算されていない
      if(this.task.name && this.task.detail){
        return true
      } else {
        return false
      }
    },
    btnMessage () {
      return this.mode === 'update' ? '更新' : '追加'
    }
  },
  // data () {
  //   return {
  //     progress: false,
  //     error: ''
  //   }
  // },
  methods: {
    handleClick () {
      this.task.tags = document.getElementById("tags").value.split(' ')
      this.onclick(this.task)
    }
  }
}
</script>

<style scoped>
.label {
  display: block;
}

.button {
  margin: 1em;
  float: right;
}

.input, textarea {
  width: 100%;
}

.item {
  display: block;
  overflow: hidden;
  margin-bottom: 10px;
}
</style>