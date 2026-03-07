import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Accordion from "./Accordion.vue";

describe('Accordion', () => {
  it('renders correctly a div by default', async () => {
    const wrapper = mount(Accordion, {
      props: {
        position: 'left', size: 'lg', items: [
          {
            key: 'first',
            title: 'Title of first item',
            content: 'Content of first item'
          }
        ]
      }
    })

    expect(wrapper.element.tagName).toBe('DIV')
  })

  // it('renders html in the accordion body', async () => {
  //   const items = [
  //     {
  //       key: 'first',
  //       title: 'Title of first item',
  //       content: 'Content of first item',
  //       isHtml: false,
  //     },
  //     {
  //       key: 'first',
  //       title: 'Title of first item',
  //       content: '<b>Content of first item</b>',
  //       isHtml: true,
  //     }
  //   ]
    
  //   const wrapper = mount(Accordion, {
  //     props: { position: 'left', size: 'lg', items }
  //   })

  //   items.forEach(async (item) => {
  //     const block = wrapper.find(`#${item.key}-html`)

  //     if (item.isHtml) {
  //       expect(block.exists()).toBeFalsy()
  //       expect(block.html()).toContain(item.content.replace(/<\/?p.*?>/g, ''))
  //     } else {
  //       // expect(block.exists()).toBeTruthy()
  //       // expect(block.html()).toContain(item.content)
  //     }
  //   })
  // })
})