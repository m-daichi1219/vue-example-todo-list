import { expect } from 'chai'
import { mount, createLocalVue } from '@vue/test-utils'
import TaskMainView from '@/components/templates/TaskMainView.vue'

describe('TaskMainView.vue', () => {
  let taskMainView
  beforeEach(() => {
    taskMainView = mount(TaskMainView, {
      propsData: {
        tasks: [
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
            limit: '2019-12-15T12:59',
            id: 2
          },
          {
            name: 'TaskName3',
            tags: ['tag3', 'tag4'],
            detail: 'detail comment',
            limit: '2019-12-31T12:59',
            id: 3
          }
        ]
      }
    })
  })

  describe('プロパティ', () => {
    describe('tasks', () => {
      describe('デフォルト', () => {
        // TODO: expect
      })

      describe('期限が近い順チェックボックスが入力されている場合', () => {
        // TODO: expect
      })

      describe('タグが指定されている場合', () => {
        // TODO: expect
      })
    })
  })

  describe('イベント', () => {
    describe('タスクの追加', () => {
      it('タスク作成モーダルを表示', () => {
        // TODO: expect
      })
    })

    describe('タスクの更新', () => {
      it('タスク更新モーダルを表示', () => {
        // TODO: expect
      })
    })
  })
})
