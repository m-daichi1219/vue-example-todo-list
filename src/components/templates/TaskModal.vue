<template>
  <div class="task-detail-modal">
    <div class="wrapper">
      <div class="container">
        <div class="header">
          <button
          id='close'
          type="button"
          class="modal-close"
          @click="back"
          >
          ×
          </button>
        </div>
        <div class="body">
          <TaskDetailForm
            :task="task"
            :mode="mode"
            :onclick="handleClick"
          >
          </TaskDetailForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button.vue'
import TaskDetailForm from '@/components/molecules/TaskDetailForm.vue'

export default {
  name: 'TaskModal',
  components: {
    Button,
    TaskDetailForm
  },
  data () {
    return {
      handleClick: this.updateTask
    }
  },
  computed: {
    task () {
      const id = parseInt(this.$route.params.id)
      return !Number.isNaN(id)
      ? {...this.$store.getters.getTaskById(id)}
      : {}
    },
    mode () {
      return this.task.name
      ? "update"
      : "add"
    },
    funcSelecter () {
      if ( this.mode === "add" ) {
        this.handleClick = this.addTask
      } else {
        this.handleClick = this.updateTask
      }
    }
  },
  methods: {
    back () {
      this.$router.push({ path: '/' })
    },
    handleClose () {
      this.back()
    },
    addTask () {
      console.log("addTask")
    },
    updateTask() {
      console.log("updateTask")
    },
    // handleClick () {
    //   return this.mode === "add"
    //   ? this.addTask()
    //   : this.updateTask()
    // }
  }
}
</script>

<style scoped>
.task-detail-modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.wrapper {
  display: table-cell;
  vertical-align: middle;
}

.container {
  width: 480px;
  margin: 0 auto;
  padding: 8px;
  background-color: #fff;
  border-radius: 0.5em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.header {
  text-align: right;
}

.body {
  width: 100%;
  padding: 0px 0px 50px 0px;
}

.modal-close {
  margin: 0 0 0 auto;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 0;
  background-color: transparent;
  border: 0;
}
</style>
