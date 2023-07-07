import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

// export const PrimaryDARK = Template.bind({});
// PrimaryDARK.args = {
//     children: 'Text',
// };
// PrimaryDARK.decorators = [ThemeDecorator(Theme.DARK)];

// export const ClearDARK = Template.bind({});
// ClearDARK.args = {
//     children: 'Text',
//     theme: ThemeButton.CLEAR,
// };
// ClearDARK.decorators = [ThemeDecorator(Theme.DARK)];

// export const OutlineDARK = Template.bind({});
// OutlineDARK.args = {
//     children: 'Text',
//     theme: ThemeButton.OUTLINE,
// };
// OutlineDARK.decorators = [ThemeDecorator(Theme.DARK)];
