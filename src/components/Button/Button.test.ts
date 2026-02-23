import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Button from './Button.vue';

describe('Button', () => {
  it('renders correctly as a button by default', () => {
    const wrapper = mount(Button, { slots: { default: 'Test' } });
    expect(wrapper.element.tagName).toBe('BUTTON');
    expect(wrapper.text()).toBe('Test');
  });

  it('renders as a link when using the "as" prop', () => {
    const wrapper = mount(Button, { props: { as: 'a' } });
    expect(wrapper.element.tagName).toBe('A');
  });

  it('applies the correct variant class', () => {
    const wrapper = mount(Button, { props: { variant: 'primary' } });
    expect(wrapper.classes()).toContain('bg-ui-primary');
  });
});