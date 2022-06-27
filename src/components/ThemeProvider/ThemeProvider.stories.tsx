import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ThemeProvider from './ThemeProvider'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'NAOS-UI/ThemeProvider',
  component: ThemeProvider,
} as ComponentMeta<typeof ThemeProvider>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThemeProvider> = ({theme, children}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export const HelloWorld = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  children: 'Hello world!',
}