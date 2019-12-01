<template>
  <div>
    <p>テストページ</p>
    <button @click="handleClick()">
      FETCH_ALL_TASKLIST
    </button>
  </div>
</template>

<script>
import * as types from '@/store/mutation-types'
import { mapGetters } from 'vuex'
import { constants } from 'fs';

export default {
  name: 'TestView',
  data() {
    return {
      testData: {num:2}
    }
  },
  methods: {
    handleClick() {
      console.log('view:handleClick')
      this.$store.dispatch('axtionTest', this.testData)
    }
  }
}
</script>
