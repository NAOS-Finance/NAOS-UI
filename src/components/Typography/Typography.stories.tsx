import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Typography, { TypographyProps } from './Typography'

export default {
  title: 'NAOS-UI/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = ({ children, variant, color, align }: TypographyProps) => (
  <Typography variant={variant} color={color} align={align}>
    {children}
  </Typography>
)

export const Default = Template.bind({})

Default.args = {
  children: 'Hello world!',
  variant: 'h2',
}
