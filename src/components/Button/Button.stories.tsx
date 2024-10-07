import { Button, ButtonProps } from './Button';
import { Meta, StoryFn } from '@storybook/react';

// Define the metadata for the story
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
  },
};

export default meta;

// Define the template using Story<typeof Button>
const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// Create variants for the button
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
};
