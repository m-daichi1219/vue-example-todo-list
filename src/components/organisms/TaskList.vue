<template>
  <div class="card">
    <div class="card-body">
      <ul>
        <li
          class="task-card"
          v-for="task in tasks"
          :key="task.id"
        >
          <TaskCard
            :id="task.id"
            :name="task.name"
            >
          </TaskCard>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TaskCard from '@/components/molecules/TaskCard.vue'

export default {
  name: 'TaskList',
  components: {
    TaskCard
  },
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>
