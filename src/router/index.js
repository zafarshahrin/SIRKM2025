import { createRouter, createWebHistory } from "vue-router";

import Layout from "../components/layout.vue";
import Home from "../components/views/home.vue";
import Calls from "../components/views/calls.vue";
import InvitedSpeaker from "../components/views/invitedspeaker.vue";
import AbstractSubmission from "../components/views/abstractsubmission.vue";
import Programme from "../components/views/programme.vue";
import Registration from "../components/views/registration.vue";
import Committee from "../components/views/committee.vue";
import Media from "../components/views/media.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "", redirect: "/home" }, // default redirect
      { path: "home", name: "Home", component: Home },
      { path: "calls", name: "Calls", component: Calls },
      {
        path: "invited-speaker",
        name: "InvitedSpeaker",
        component: InvitedSpeaker,
      },
      {
        path: "abstract-submission",
        name: "AbstractSubmission",
        component: AbstractSubmission,
      },
      { path: "programme", name: "Programme", component: Programme },
      { path: "registration", name: "Registration", component: Registration },
      { path: "committee", name: "Committee", component: Committee },
      { path: "media", name: "Media", component: Media },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
