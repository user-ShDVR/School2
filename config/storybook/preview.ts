import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
// import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
// import { Theme } from '../../src/app/providers/ThemeProvider';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: ['app', 'light'], color: '#ffffff' },
            { name: 'dark', class: ['app', 'dark'], color: '#000000' },
        ],
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
// Сначала добавил ThemeDecorator потом нашел аддон который меняет тему и перешел на него,
// но оставил пока что(ThemeDecorator) вдруг потом пригодится
// addDecorator(ThemeDecorator(Theme.DARK));
addDecorator(RouterDecorator);
