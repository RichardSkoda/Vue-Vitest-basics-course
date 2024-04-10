import LoginForm from '@/components/LoginForm.vue'
import { describe, it, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'


describe('LoginForm', () => {
  it('emits an event with user data payload', () => {
    const wrapper = mount(LoginForm) 
    const input = wrapper.find('input[type="text"]') // Find text input

    input.setValue('Richard Skoda') // Set value for text input
    wrapper.trigger('submit') // 3. Simulate form submission

    // 4. Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)

    // Assert payload is correct 
    const expectedPayload = { name: 'Richard Skoda' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)

  })
})