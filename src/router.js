// router.js

import { createRouter, createWebHistory } from "vue-router";

// Import your Vue components for each route
import Home from "./views/Home.vue";
import AboutUs from "./views/About.vue";
import Employee from "./views/Employee.vue";
import Employer from "./views/Employer.vue";
import Legal from "./views/Legal.vue";
import Laws from "./views/Laws.vue";
import ContactUs from "./views/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: AboutUs },
  { path: "/employee", component: Employee },
  { path: "/employer", component: Employer },
  { path: "/legal", component: Legal },
  { path: "/laws", component: Laws },
  { path: "/contactus", component: ContactUs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
