import { expect } from 'chai'
import getters from '@/store/getters'
import sinon from 'sinon'

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

const localStorageMock = () => {
  return {
    getItem () {
      return tasks
    }
  }
}

// describe('getters.js', () => {
//   describe('fetchTasks', () => {
//     it('条件が指定されていない場合', () => {
//       const terms = { isNear: false, tag: '' }
//       expect(getters.fetchTasks(terms)).to.equal('test')
//     })
//   })
// })

describe('getters.js', () => {
  sinon.spy(window.localStorage, 'getItem').calledOnceWith(() => {
    return tasks
  })
  // localStorage = localStorageMock
  // global.window = window
  // window.localStorage = localStorageMock
  it('■TEST', () => {
    console.log('■■■■■■■■■■■■■■■■■■■')
    const terms = { isNear: false, tag: '' }
    const actual = getters.fetchTasks(terms)(1)
    console.log(actual)
    console.log('■■■■■■■■■■■■■■■■■■■')
    expect(getters.retTest()).to.equal('even')
  })

  describe('fetchTasks', () => {
    it('条件が指定されていない場合', () => {
      const terms = { isNear: false, tag: '' }
      expect(getters.fetchTasks(terms)).to.equal('test')
    })
  })
})
