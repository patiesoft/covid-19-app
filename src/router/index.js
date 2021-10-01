import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
	{
		path: "/certificate",
		name: "certificate",
		component: () => import(/* webpackChunkName: "about" */ "../views/certificate.vue"),
	},
	{
		path: "/qrcode",
		name: "qrcode",
		component: () => import(/* webpackChunkName: "about" */ "../views/QRCode.vue"),
	},
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
