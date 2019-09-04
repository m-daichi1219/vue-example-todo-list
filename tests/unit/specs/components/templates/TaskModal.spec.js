import { expect } from 'chai'
import sinon from 'sinon'
import { mount } from '@vue/test-utils'
import TaskModal from '@/components/templates/TaskModal.vue'

describe('TaskModal.vue', () => {
  let $router
  let taskModal
  let back

  beforeEach(() => {
    $router = {
      push: sinon.spy()
    }
    back = sinon.spy()
  })

  describe('イベント', () => {
    describe('back', () => {
      beforeEach(() => {
        taskModal = mount(TaskModal, {
          mocks: { $router }
        })
      })

      it('リストのトップページに戻ること', () => {
        taskModal.vm.back()

        expect($router.push.called).to.equal(true)
        expect($router.push.args[0][0].path).to.equal('/')
      })
    })

    describe('handleClose', () => {
      beforeEach(() => {
        taskModal = mount(TaskModal, {
          mocks: { $router },
          methods: { back: back }
        })
      })

      it('backを実行すること', () => {
        taskModal.vm.handleClose()

        expect(back.called).to.equal(true)
      })

      it('ボタン押下時にbackメソッドを実行すること', () => {
        taskModal.find('#close').trigger('click')

        expect(back.called).to.equal(true)
      })
    })
  })
})
