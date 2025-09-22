import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Calls from '../views/Calls.vue';
import InvitedSpeaker from '../views/InvitedSpeaker.vue';
import AbstractSubmission from '../views/AbstractSubmission.vue';
import Programme from '../views/Programme.vue';
import Registration from '../views/Registration.vue';
import Committee from '../views/Committee.vue';
import Media from '../views/Media.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/calls', name: 'Calls', component: Calls },
  { path: '/invited-speaker', name: 'InvitedSpeaker', component: InvitedSpeaker },
  { path: '/abstract-submission', name: 'AbstractSubmission', component: AbstractSubmission },
  { path: '/programme', name: 'Programme', component: Programme },
  { path: '/registration', name: 'Registration', component: Registration },
  { path: '/committee', name: 'Committee', component: Committee },
  { path: '/media', name: 'Media', component: Media },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
