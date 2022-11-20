import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props: {
    organizer: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    }
  },

  data () {
    return {
      options: {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
      },
    }
  },

  computed: {
    fullDate () {
      return new Date(this.date)
    },

    time () {
      return this.fullDate.toLocaleDateString('en-US', this.options)
    },

    datetime () {
      return `${this.fullDate.getFullYear()}-${'0' + (this.fullDate.getMonth() + 1)}-${this.fullDate.getDate()}`
    }
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="this.datetime">{{ time }}</time>
      </li>
    </ul>`,
});
