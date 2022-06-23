import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Card from './Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'NAOS-UI/Card',
  component: Card,
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const CommonCard = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CommonCard.args = {
  width: '50px',
  height: '3px',
}

export const RedCard = Template.bind({})
RedCard.args = {
  width: '150px',
  height: '5px',
  style: {
    background: 'red',
  },
}
