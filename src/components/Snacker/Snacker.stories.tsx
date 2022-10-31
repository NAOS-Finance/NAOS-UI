import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Snacker from './Snacker'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'NAOS-UI/Snacker',
  component: Snacker,
} as ComponentMeta<typeof Snacker>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Snacker> = (args) => <Snacker {...args} />

// export const CommonModal = Template.bind({})
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// CommonModal.args = {}

// export const backgroundModal = Template.bind({})
// backgroundModal.args = {
//   children: 'Snacker',
//   backgroundStyle: {
//     backgroundColor: 'rgba(0, 0, 0, 0.36)',
//   },
// }

export const buttonCloseSnacker = () => {
  const [openSnacker, setOpenSnacker] = useState<boolean>(false)

  return (
    <div>
      <button onClick={() => setOpenSnacker(true)}>Open</button>
      {openSnacker && (
        <Snacker
          open={openSnacker}
          backgroundStyle={{
            backgroundColor: 'rgba(0, 0, 0, 0.36)',
          }}
        >
          <button onClick={() => setOpenSnacker(false)}>close</button>
          snacker
        </Snacker>
      )}
    </div>
  )
}
