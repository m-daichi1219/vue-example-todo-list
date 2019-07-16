import { expect } from 'chai'
import sinon from 'sinon'
import { mount } from '@vue/test-utils'
import TaskDetailForm from '@/components/molecules/TaskDetailForm.vue'

describe('TaskDetailForm', () => {
  describe('プロパティ', () => {
    describe('valid', () => {
      describe('デフォルト', () => {
        it('invalid', () => {
          const taskDetailForm = mount(TaskDetailForm, {
            propsData: {
              task: {}
            }
          })

          expect(taskDetailForm.vm.valid).to.equal(false)
        })
      })

      describe('name', () => {
        it('invalid', () => {
          const taskDetailForm = mount(TaskDetailForm, {
            propsData: {
              task: {
                name: 'TaskName'
              }
            }
          })
          expect(taskDetailForm.vm.valid).to.equal(false)
        })
      })

      describe('tags', () => {
        it('invalid', () => {
          const taskDetailForm = mount(TaskDetailForm, {
            propsData: {
              task: {
                tags: ['tag1', 'tag2']
              }
            }
          })
          expect(taskDetailForm.vm.valid).to.equal(false)
        })
      })

      describe('detail', () => {
        it('invalid', () => {
          const taskDetailForm = mount(TaskDetailForm, {
            propsData: {
              task: {
                detail: 'detail comment'
              }
            }
          })
          expect(taskDetailForm.vm.valid).to.equal(false)
        })
      })

      describe('detail', () => {
        it('invalid', () => {
          const taskDetailForm = mount(TaskDetailForm, {
            propsData: {
              task: {
                limit: '2019-12-31T12:59'
              }
            }
          })
          expect(taskDetailForm.vm.valid).to.equal(false)
        })
      })

      describe('tag以外の項目に入力されている場合', () => {
        it('valid', () => {
          const taskDetailForm = mount(TaskDetailForm, {
            propsData: {
              task: {
                name: 'TaskName',
                detail: 'detail comment',
                limit: '2019-12-31T12:59'
              }
            }
          })
          expect(taskDetailForm.vm.valid).to.equal(true)
        })
      })

      describe('全ての項目に入力されている場合', () => {
        it('valid', () => {
          const taskDetailForm = mount(TaskDetailForm, {
            propsData: {
              task: {
                name: 'TaskName',
                tags: ['tag1', 'tag2'],
                detail: 'detail comment',
                limit: '2019-12-31T12:59'
              }
            }
          })
          expect(taskDetailForm.vm.valid).to.equal(true)
        })
      })
    })

    describe('mode', () => {
      describe('add', () => {
        it('追加ボタンが表示されていること', () => {
          const taskDetailForm = mount(TaskDetailForm, {
            propsData: {
              task: {},
              mode: 'add'
            }
          })
          expect(taskDetailForm.find('button').text()).to.equal('追加')
        })
      })

      describe('update', () => {
        it('更新ボタンが表示されていること', () => {
          const taskDetailForm = mount(TaskDetailForm, {
            propsData: {
              task: {},
              mode: 'update'
            }
          })
          expect(taskDetailForm.find('button').text()).to.equal('更新')
        })
      })
    })

    describe('tag', () => {
      describe('デフォルト', () => {
        it('何も入力されていないこと', () => {
          const taskDetailForm = mount(TaskDetailForm, {
            propsData: {
              task: {},
              mode: 'update'
            }
          })
          expect(taskDetailForm.vm.tag).to.equal('')
        })
      })

      describe('タグが登録されている場合', () => {
        it('半角スペース区切りでタグが表示されていること', () => {
          const taskDetailForm = mount(TaskDetailForm, {
            propsData: {
              task: {
                name: 'TaskName',
                tags: ['tag1', 'tag2', 'tag3'],
                detail: 'detail comment',
                limit: '2019-12-31T12:59'
              },
              mode: 'update'
            }
          })
          expect(taskDetailForm.vm.tag).to.equal('tag1 tag2 tag3')
        })
      })
    })
  })

  describe('イベント', () => {
    let onclickStub
    let taskDetailForm
    beforeEach(done => {
      onclickStub = sinon.stub()
      taskDetailForm = mount(TaskDetailForm, {
        propsData: {
          task: {},
          mode: 'update',
          onclick: onclickStub
        }
      })
      taskDetailForm.vm.$nextTick(done)
    })

    describe('resolve', () => {
      it('イベントが実行されること', () => {
        onclickStub.resolves()

        taskDetailForm.find('button').trigger('click')
        expect(onclickStub.called).to.equal(false)
        expect(taskDetailForm.vm.error).to.equal('')

        taskDetailForm.vm.$nextTick(() => {
          expect(onclickStub.called).to.equal(true)
        })
      })
    })
  })
})
