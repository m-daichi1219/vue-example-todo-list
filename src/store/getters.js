export default {
  evenOrOdd: state => (state.count % 2 === 0 ? 'even' : 'odd'),
  retTest: state => ('test'),
  fetchTasks: state => terms => {
    const ret = []
    let items = localStorage.getItem('fetchTasks').sort((a, b) => {
      if (terms.isNear) return 0
      if (a.limit > b.limit) return -1
      if (a.limit < b.limit) return -1
      return 0
    })

    if (terms.tag) {
      items.forEach(item => {
        item.tags.forEach(el => {
          if (el === terms.tag) ret.push(item)
        })
      })
    }
    return ret
  },
  fetchTagList: state => {
    // TODO:
    throw new Error('should be implemented')
  }
}
