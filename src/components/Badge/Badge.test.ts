import { flushPromises, mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Badge from "./Badge.vue";
import Icon from "../Icons/Icon.vue";

describe('Badge', () => {
  it('renders correctly as a div by default', async () => {
    const wrapper = mount(Badge, { slots: { default: 'Badge' } })

    await flushPromises()

    expect(wrapper.element.tagName).toBe('DIV')
    // expect(wrapper.text).toBe('Badge')
  })

  it('applies the correct variant class', () => {
    const wrapper = mount(Badge, { props: { variant: 'filled', color: 'brand' } })
    expect(wrapper.classes()).toContain('bg-(--ui-badge-color)')
  })

  it('renders the right icon', async () => {
    const wrapper = mount(Badge, { props: { icon: 'ImageCircle' } })

    await flushPromises()

    const iconWrapper = wrapper.findComponent(Icon)
    expect(iconWrapper.exists()).toBe(true)
    expect(iconWrapper.props('name')).toBe('ImageCircle')
  })

  it('does not render the icon when props is not added', async () => {
    const wrapper = mount(Badge)

    await flushPromises()
    const iconWrapper = wrapper.findComponent(Icon)

    expect(iconWrapper.exists()).toBe(false)
  })
})