<template> 
    <button
      :class="classes"
      :disabled="disabled"
      type="button"
      @click="handleClick"
    >
    <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
      type: {
        type: String,
        default: 'add',
        validator (val) {
          return ['add', 'remove'].indexOf(val) !== -1
        }
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes () {
        const cls = this.type === 'remove' ? 'btn btn-outline-dark' : 'btn btn-primary'
        return [`${cls}`]
      }
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event)
      }
    }
}
</script>

<style scoped>
.button {
  padding: .6em 1.3em;
}

.button-text {
  border: none;
  padding-right: 0;
  padding-left: 0;
}
</style>
