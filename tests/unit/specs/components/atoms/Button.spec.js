import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Button from '@/components/atoms/Button.vue'

describe('Button.vue', () => {
  describe('プロパティ', () => {
    // describe('type', () => {
    //   describe('デフォルト', () => {
    //     it('buttonクラスを持つbutton要素で構成されること', () => {
    //       const button = mount(Button)
    //       expect(button.is('button')).to.equal(true)
    //       expect(button.classes()).to.include('button')
    //     })
    //   })

    //   describe('button', () => {
    //     it('buttonクラスを持つbutton要素で構成されること', () => {
    //       const button = mount(Button, {
    //         propsData: { type: 'button' }
    //       })
    //       expect(button.is('button')).to.equal(true)
    //       expect(button.classes()).to.include('button')
    //     })
    //   })

    //   describe('text', () => {
    //     it('button-textクラスを持つbutton要素で構成されること', () => {
    //       const button = mount(Button, {
    //         propsData: { type: 'text' }
    //       })
    //       expect(button.is('button')).to.equal(true)
    //       expect(button.classes()).to.include('button-text')
    //     })
    //   })
    // })

    describe('type', () => {
      describe('デフォルト', () =>{
        it('btn btn-primaryクラスを持つbutton要素で構成されること', () => {
          const button = mount(Button)

          expect(button.is('button')).to.equal(true)
          expect(button.classes()).to.include('btn', 'btn-primary')
        })
      })

      describe('add', () => {
        it('btn btn-primaryクラスを持つbutton要素で構成されること', () => {
          const button = mount(Button, {
            propsData: { type: 'add' }
          })

          expect(button.is('button')).to.equal(true)
          expect(button.classes()).to.include('btn', 'btn-primary')
        })
      })

      describe('remove', () => {
        it('btn btn-outline-darkクラスを持つbutton要素で構成されること', () => {
          const button = mount(Button, {
            propsData: { type: 'remove' }
          })

          expect(button.is('button')).to.equal(true)
          expect(button.classes()).to.include('btn', 'btn-outline-dark')
        })
      })
    })

    describe('disabled', () => {
      describe('デフォルト', () => {
        it('disabled属性が付与されていないこと', () => {
          const button = mount(Button)
          expect(button.attributes().disabled).to.be.an('undefined')
        })
      })

      describe('true', () => {
        it('disabled属性が付与されていること', () => {
          const button = mount(Button, {
            propsData: { disabled: true }
          })
          expect(button.attributes().disabled).to.equal('disabled')
        })
      })

      describe('false', () => {
        it('disabled属性が付与されていないこと', () => {
          const button = mount(Button, {
            propsData: { disabled: false }
          })
          expect(button.attributes().disabled).to.be.an('undefined')
        })
      })
    })
  })

  describe('イベント', () => {
    describe('click', () => {
      it('イベントが発行されること', () => {
        const button = mount(Button)
        button.trigger('click')
        expect(button.emitted().click.length).to.equal(1)
      })
    })
  })

  describe('スロット', () => {
    describe('コンテンツ挿入あり', () => {
      it('挿入されていること', () => {
        const button = mount(Button, {
          slots: { default: '<p>hello</p>' }
        })
        expect(button.text()).to.equal('hello')
      })
    })

    describe('コンテンツ挿入なし', () => {
      it('挿入されていないこと', () => {
        const button = mount(Button)
        expect(button.text()).to.equal('')
      })
    })
  })
})
