import { flushPromises, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Avatar from "./Avatar.vue";

describe('Avatar', () => {
  it('renders correctly a div by default', async () => {
    const wrapper = mount(Avatar, { slots: { default: 'B' } })
    
    await flushPromises()
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('applies the correct variant class', () => {
    const wrapper = mount(Avatar, { props: { variant: 'icon', color: 'branded' } })
    
    expect(wrapper.classes()).contain('bg-[color-mix(in_oklab,var(--ui-avatar-color),white_90%)]')
  })

  it('renders the image', async () => {
    const wrapper = mount(Avatar, { props: { variant: 'img', src: 'https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_neytiri_16x9_1098_01_0e7d844a.jpeg?region=420%2C0%2C1080%2C1080' } })

    await flushPromises()
    const img = wrapper.find("img")
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_neytiri_16x9_1098_01_0e7d844a.jpeg?region=420%2C0%2C1080%2C1080')
  })
})