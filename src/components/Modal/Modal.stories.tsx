import React, { useState } from 'react'
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

export const backgroundModal = Template.bind({})
backgroundModal.args = {
  size: ModalSize.MEDIUM,
  children: 'IndexModal',
  backgroundStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.36)',
  },
}

export const buttonCloseModal = () => {
  const [openModal, setOpenModeal] = useState<boolean>(false)

  return (
    <div>
      <button onClick={() => setOpenModeal(true)}>Open</button>
      {openModal && (
        <Modal
          backgroundStyle={{
            backgroundColor: 'rgba(0, 0, 0, 0.36)',
          }}
        >
          <button onClick={() => setOpenModeal(false)}>close</button>
          -----Test Modal Content-----
        </Modal>
      )}
    </div>
  )
}

export const backgroundCloseModal = () => {
  const [openModal, setOpenModeal] = useState<boolean>(false)

  return (
    <div>
      <button onClick={() => setOpenModeal(true)}>Open</button>
      {openModal && (
        <Modal
          backgroundStyle={{
            backgroundColor: 'rgba(0, 0, 0, 0.36)',
          }}
          backroundClickEvent={() => setOpenModeal(false)}
        >
          -----click background to close modal-----
        </Modal>
      )}
    </div>
  )
}
