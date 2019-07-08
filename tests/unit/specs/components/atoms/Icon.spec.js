import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Icon from '@/components/atoms/Icon.vue'

describe('Icon.vue', () => {
  describe('プロパティ', () => {
    describe('type', () => {
      describe('remove', () => {
        it('iconが×であること', () => {
          const icon = mount(Icon, {
            propsData: { type: 'remove' }
          })
          expect(icon.text()).to.equal('×')
        })
      })

      describe('add', () => {
        it('iconが+であること', () => {
          const icon = mount(Icon, {
            propsData: { type: 'add' }
          })
          expect(icon.text()).to.equal('+')
        })
      })
    })
  })
})
