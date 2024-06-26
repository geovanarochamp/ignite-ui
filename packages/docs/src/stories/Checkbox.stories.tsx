import { Box, Checkbox, CheckboxProps, Text } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<CheckboxProps> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text>Accept terms of use</Text>
        </Box>
      )
    },
  ],
}

export default meta

export const Primary: StoryObj<CheckboxProps> = {}
