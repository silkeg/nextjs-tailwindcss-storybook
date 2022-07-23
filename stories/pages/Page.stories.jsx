import { Page } from '../../pages/Page';

export default {
  title: 'Pages/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const HomePage = () => <Page />;
