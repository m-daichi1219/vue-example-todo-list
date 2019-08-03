import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import TaskList from '@/components/organisms/TaskList.vue'

describe('TaskList.vue', () => {
  describe('プロパティ', () => {
    describe('tasks', () => {
      describe('デフォルト', () => {
        it('タスクリストが表示されないこと', () => {
          const taskList = mount(TaskList, {
            propsData: {
              tasks: []
            }
          })

          expect(taskList.findAll('.task-card').length).to.equal(0)
        })
      })

      describe('タスクが渡された場合', () => {
        it('タスクの数だけリスト表示されること', () => {
          const taskList = mount(TaskList, {
            propsData: {
              tasks: [
                {
                  name: 'TaskName1',
                  tags: ['tag1', 'tag2', 'tag3'],
                  detail: 'detail comment',
                  limit: '2019-12-31T12:59',
                  id: 1
                },
                {
                  name: 'TaskName2',
                  tags: ['tag1', 'tag2', 'tag3'],
                  detail: 'detail comment',
                  limit: '2019-12-31T12:59',
                  id: 2
                }
              ]
            }
          })

          expect(taskList.findAll('.task-card').length).to.equal(2)
        })
      })
    })
  })
})
