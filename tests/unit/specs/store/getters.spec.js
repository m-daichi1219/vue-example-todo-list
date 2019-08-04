import { expect } from 'chai'
import getters from '@/store/getters'

const tasks = [
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

describe('getters.js', () => {
  const state = { tasks }
  let actual
  let terms

  describe('fetchTasks', () => {
    describe('条件が指定されていない場合', () => {
      beforeEach(() => {
        terms = { isNear: false, tag: '' }
        actual = getters.fetchTasks(state)(terms)
      })
      it('stateと同じ状態で取り出されること', () => {
        expect(actual).to.equal(tasks)
      })
    })

    describe('近い順指定の場合', () => {
      beforeEach(() => {
        terms = { isNear: true, tag: '' }
        actual = getters.fetchTasks(state)(terms)
      })
      it('ソートされた状態で取り出されること', () => {
        expect(actual.length).to.equal(3)
        expect(actual[0].id).to.equal(2)
        expect(actual[1].id).to.equal(3)
        expect(actual[2].id).to.equal(1)
      })
    })

    describe('タグ指定の場合', () => {
      beforeEach(() => {
        terms = { isNear: false, tag: 'tag2' }
        actual = getters.fetchTasks(state)(terms)
      })
      it('タグ指定された情報のみ取り出されること', () => {
        console.log('■■■■■■■■■■')
        console.log(actual)
        console.log('■■■■■■■■■■')
        expect(actual.length).to.equal(2)
        expect(actual[0].id).to.equal(1)
        expect(actual[1].id).to.equal(2)
      })
    })
    
    it('近い順かつタグ指定の場合', () => {
      terms = { isNear: true, tag: 'tag2' }
      actual = getters.fetchTasks(state)(terms)

      console.log('■■■■■■■■■■')
      console.log(actual)
      console.log('■■■■■■■■■■')
      expect(actual.length).to.equal(2)
      expect(actual[0].id).to.equal(2)
      expect(actual[1].id).to.equal(1)
    })
  })

  describe('fetchTagList', () => {
    it('タグの配列を返却すること', () => {
      actual = getters.fetchTagList(state)

      console.log('■■■■■■■■■■')
      console.log(actual)
      console.log('■■■■■■■■■■')
      expect(actual).to.eql(['tag1', 'tag2', 'tag3', 'tag4'])
    })
  })
})
