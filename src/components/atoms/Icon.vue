<template>
    <span>
      {{icon}}
    </span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      required: true,
      validator: val => {
        return ['remove', 'add'].indexOf(val) !== -1
      }
    }
  },
  computed: {
    icon () {
      const type = this.type
      if (type === 'remove') {
        return '×'
      } else if (type === 'add') {
        return '+'
      }
    }
  }
}
</script>
