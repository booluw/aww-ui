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
})