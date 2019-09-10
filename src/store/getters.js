export default {
  fetchTasks: (state) => (terms) => {
    let tasks = []

    const items = state.tasks.sort((a, b) => {
      if (!terms.isNear) return 0
      if (a.limit > b.limit) return 1
      if (a.limit < b.limit) return -1
      return 0
    })

    if (terms.tag) {
      items.forEach(item => {
        item.tags.find(tag => {
          if (tag === terms.tag) {
            tasks.push(item)
          }
        })
      })
    } else {
      tasks = items
    }

    return tasks
  },
  fetchTagList: state => {
    const list = []
    state.tasks.map(tasks => tasks.tags.map(tags => list.push(tags)))
    return list.filter((el, idx, self) => {
      return self.indexOf(el) === idx
    })
  },
  getTaskById: state => id => {
    return state.tasks.find(task => task.id === id)
  }
}
