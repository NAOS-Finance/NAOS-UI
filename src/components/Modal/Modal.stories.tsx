import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Modal, { ModalSize } from './Modal'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'NAOS-UI/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const CommonModal = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CommonModal.args = {}

export const SmallModal = Template.bind({})
SmallModal.args = {
  size: ModalSize.SMALL,
  children: 'Small Modal',
}

export const IndexModal = Template.bind({})
SmallModal.args = {
  size: ModalSize.MEDIUM,
  children: 'IndexModal',
  backgoundStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.36)',
  },
}
