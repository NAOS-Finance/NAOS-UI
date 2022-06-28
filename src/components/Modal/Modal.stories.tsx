import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Modal from './Modal'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'NAOS-UI/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const CommonModal = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CommonModal.args = {
  width: '50px',
  height: '3px',
}

export const RedModal = Template.bind({})
RedModal.args = {
  width: '150px',
  height: '5px',
  style: {
    background: 'red',
  },
}
