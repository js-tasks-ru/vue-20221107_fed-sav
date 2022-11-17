import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
    },
    image: {
      type: String,
    }
  },

  template: `
    <div class="meetup-cover" v-if='image != null' :style="\`--bg-url: url('\${image}')\`">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>
    <div class="meetup-cover" v-else >
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
