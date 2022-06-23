import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Divider from './Divider'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'NAOS-UI/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />

export const CommonDivider = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CommonDivider.args = {
  width: '50px',
  height: '3px',
}

export const RedDivider = Template.bind({})
RedDivider.args = {
  width: '150px',
  height: '5px',
  style: {
    background: 'red',
  },
}
