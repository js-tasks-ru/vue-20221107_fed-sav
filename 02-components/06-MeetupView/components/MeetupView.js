import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupDescription from '../../02-MeetupDescription/components/MeetupDescription.js';
import MeetupCover from '../../03-MeetupCover/components/MeetupCover.js';
import MeetupInfo from '../../04-MeetupInfo/components/MeetupInfo.js';
import MeetupAgenda from '../../05-MeetupAgenda/components/MeetupAgenda.js';


export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupCover,
    MeetupInfo,
    MeetupAgenda,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <MeetupCover :image='meetup.image' :title='meetup.title'/>

      <ui-container>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <MeetupDescription :description='meetup.description'/>

            <h3>Программа</h3>
            <MeetupAgenda :agenda='meetup.agenda' v-if='meetup.agenda.length != 0'/>
            <ui-alert v-else>Программа пока пуста...</ui-alert>
          </div>
          <div class="meetup__aside">
            <MeetupInfo :organizer='meetup.organizer' :place='meetup.place' :date='meetup.date'/>
          </div>
        </div>
      </ui-container>
    </div>`,
});
