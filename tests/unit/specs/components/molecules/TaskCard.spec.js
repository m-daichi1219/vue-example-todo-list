import { expect } from 'chai'
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import TaskCard from '@/components/molecules/TaskCard.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('TaskCard.vue', () => {
  describe('router-link', () => {
    it('router-linkが使用できること', () => {
      const taskCard = mount(TaskCard, {
        propsData: { id: 1, name: 'task' },
        stubs: {
          RouterLink: RouterLinkStub
        },
        localVue,
        router
      })

      taskCard.vm.$nextTick(() => {
        expect(taskCard.find(RouterLinkStub).props().to.name).to.equal('taskDetailModal')
        expect(taskCard.find(RouterLinkStub).props().to.params.id).to.equal(1)
      })
    })
  })
})
