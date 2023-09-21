import { html } from 'lit';
import '../src/owl-card.js';

export default {
  title: 'OwlCard',
  component: 'owl-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <owl-card
      style="--owl-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </owl-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
