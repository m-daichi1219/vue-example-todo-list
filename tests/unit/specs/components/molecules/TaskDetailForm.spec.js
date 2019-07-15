import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import TaskDetailForm from '@/components/molecules/TaskDetailForm.vue'

describe('TaskDetailForm', () => {
  describe('プロパティ', () => {
    describe('valid', () => {
      describe('デフォルト', () => {
        it('invalid', () => {
          const taskDetailForm = mount(TaskDetailForm)

          expect(taskDetailForm.vm.valid).to.equal(false)
        })
      })

      describe('name', () => {
        it('invalid', () => {
          const taskDetailForm = mount(TaskDetailForm, {
            propsData: {
              name: 'TaskName'
            }
          })
          expect(taskDetailForm.vm.valid).to.equal(false)
        })
      })

      describe('tags', () => {
        it('invalid', () => {
          const taskDetailForm = mount(TaskDetailForm, {
            propsData: {
              tags: ['tag1', 'tag2']
            }
          })
          expect(taskDetailForm.vm.valid).to.equal(false)
        })
      })

      describe('detail', () => {
        it('invalid', () => {
          const taskDetailForm = mount(TaskDetailForm, {
            propsData: {
              detail: 'detail comment'
            }
          })
          expect(taskDetailForm.vm.valid).to.equal(false)
        })
      })

      describe('detail', () => {
        it('invalid', () => {
          const taskDetailForm = mount(TaskDetailForm, {
            propsData: {
              limit: '2019-12-31T12:59'
            }
          })
          expect(taskDetailForm.vm.valid).to.equal(false)
        })
      })

      describe('tag以外の項目に入力されている場合', () => {
        it('valid', () => {
          const taskDetailForm = mount(TaskDetailForm, {
            propsData: {
              name: 'TaskName',
              detail: 'detail comment',
              limit: '2019-12-31T12:59'
            }
          })
          expect(taskDetailForm.vm.valid).to.equal(true)
        })
      })

      describe('全ての項目に入力されている場合', () => {
        it('valid', () => {
          const taskDetailForm = mount(TaskDetailForm, {
            propsData: {
              name: 'TaskName',
              tags: ['tag1', 'tag2'],
              detail: 'detail comment',
              limit: '2019-12-31T12:59'
            }
          })
          expect(taskDetailForm.vm.valid).to.equal(true)
        })
      })
    })

    describe('mode', () => {
      describe('add', () => {
        it('追加ボタンが表示されていること', () => {

        })
      })

      describe('update', () => {
        it('更新ボタンが表示されていること', () => {

        })
      })
    })

    describe('イベント', () => {
      describe('add', () => {

      })

      describe('remove', () => {
        
      })
    })
  })
})
