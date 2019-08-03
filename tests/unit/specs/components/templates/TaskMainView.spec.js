import { expect } from 'chai'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TaskMainView from '@/components/templates/TaskMainView.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TaskMainView.vue', () => {
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

  const tagList = ['tag1', 'tag2', 'tag3', 'tag4']

  describe('プロパティ', () => {
    describe('tagList', () => {
      let getters
      let store

      beforeEach(() => {
        getters = {
          fetchTasks: () => tasks,
          fetchTagList: () => tagList
        }

        store = new Vuex.Store({
          getters
        })
      })

      it('タグリストのドロップダウンが表示されていること', () => {
        const testView = mount(TaskMainView, {
          localVue,
          store
        })

        expect(testView.find('select').findAll('option').length).to.equal(tagList.length)
        expect(testView.find('select').findAll('option').at(0).text()).to.equal(tagList[0])
        expect(testView.find('select').findAll('option').at(1).text()).to.equal(tagList[1])
        expect(testView.find('select').findAll('option').at(2).text()).to.equal(tagList[2])
        expect(testView.find('select').findAll('option').at(3).text()).to.equal(tagList[3])
      })
    })
  })
})
