import Vue from 'vue';
import VueRouter from 'vue-router';
const styleOneMain = () => import(/* webpackChunkName: "group-route" */ 'modules/pc/view/styleOne/main.vue');
const styleOneHome = () => import(/* webpackChunkName: "group-route" */ 'modules/pc/view/styleOne/home.vue');
const styleOneHistory = () => import(/* webpackChunkName: "group-route" */ 'modules/pc/view/styleOne/history.vue');

const styleTwoMain = () => import(/* webpackChunkName: "group-route" */ 'modules/pc/view/styleTwo/main.vue');
const styleTwoHome = () => import(/* webpackChunkName: "group-route" */ 'modules/pc/view/styleTwo/home.vue');
const styleTwoHistory = () => import(/* webpackChunkName: "group-route" */ 'modules/pc/view/styleTwo/history.vue');

const styleThreeMain = () => import(/* webpackChunkName: "group-route" */ 'modules/pc/view/styleThree/main.vue');
const styleThreeHome = () => import(/* webpackChunkName: "group-route" */ 'modules/pc/view/styleThree/home.vue');
const styleThreeHistory = () => import(/* webpackChunkName: "group-route" */ 'modules/pc/view/styleThree/history.vue');

const styleFourMain = () => import(/* webpackChunkName: "group-route" */ 'modules/pc/view/styleFour/main.vue');
const styleFourHome = () => import(/* webpackChunkName: "group-route" */ 'modules/pc/view/styleFour/home.vue');
const styleFourHistory = () => import(/* webpackChunkName: "group-route" */ 'modules/pc/view/styleFour/history.vue');

const styleFiveMain = () => import(/* webpackChunkName: "group-route" */ 'modules/pc/view/styleFive/main.vue');
const styleFiveHome = () => import(/* webpackChunkName: "group-route" */ 'modules/pc/view/styleFive/home.vue');
const styleFiveHistory = () => import(/* webpackChunkName: "group-route" */ 'modules/pc/view/styleFive/history.vue');

const styleSixMain = () => import(/* webpackChunkName: "group-route" */ 'modules/pc/view/styleSix/main.vue');
const styleSixHome = () => import(/* webpackChunkName: "group-route" */ 'modules/pc/view/styleSix/home.vue');
const styleSixHistory = () => import(/* webpackChunkName: "group-route" */ 'modules/pc/view/styleSix/history.vue');
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/india',
      name: 'india',
      component: styleOneMain,
      meta: { title: 'india' },
      children: [
          {
              path: '/india/Home',
              name: 'styleOneHome',
              component: styleOneHome,
              meta: { title: 'styleOneHome' },
          },
          {
              path: '/india/history',
              name: 'styleOneHistory',
              component: styleOneHistory,
              meta: { title: 'styleOneHistory' },
          }
      ]
    },

      {
          path: '/germany',
          name: 'germany',
          component: styleTwoMain,
          meta: { title: 'germany' },
          children: [
              {
                  path: '/germany/Home',
                  name: 'styleTwoHome',
                  component: styleTwoHome,
                  meta: { title: 'styleTwoHome' },
              },
              {
                  path: '/germany/history',
                  name: 'styleTwoHistory',
                  component: styleTwoHistory,
                  meta: { title: 'styleTwoHistory' },
              }
          ]
      },

      {
          path: '/vietnam',
          name: 'styleThreeMain',
          component: styleThreeMain,
          meta: { title: 'Vietnam' },
          children: [
              {
                  path: '/vietnam/Home',
                  name: 'styleThreeHome',
                  component: styleThreeHome,
                  meta: { title: 'styleThreeHome' },
              },
              {
                  path: '/vietnam/history',
                  name: 'styleThreeHistory',
                  component: styleThreeHistory,
                  meta: { title: 'styleThreeHistory' },
              }
          ]
      },

      {
          path: '/austrilia',
          name: 'styleFourMain',
          component: styleFourMain,
          meta: { title: 'austrilia' },
          children: [
              {
                  path: '/austrilia/Home',
                  name: 'styleFourHome',
                  component: styleFourHome,
                  meta: { title: 'styleFourHome' },
              },
              {
                  path: '/austrilia/history',
                  name: 'styleFourHistory',
                  component: styleFourHistory,
                  meta: { title: 'styleFourHistory' },
              }
          ]
      },

      {
          path: '/bhutan',
          name: 'styleFiveMain',
          component: styleFiveMain,
          meta: { title: 'bhutan' },
          children: [
              {
                  path: '/bhutan/Home',
                  name: 'styleFiveHome',
                  component: styleFiveHome,
                  meta: { title: 'styleFiveHome' },
              },
              {
                  path: '/bhutan/history',
                  name: 'styleFiveHistory',
                  component: styleFiveHistory,
                  meta: { title: 'styleFiveHistory' },
              }
          ]
      },

      {
          path: '/brazil',
          name: 'styleSixMain',
          component: styleSixMain,
          meta: { title: 'brazil' },
          children: [
              {
                  path: '/brazil/Home',
                  name: 'styleSixHome',
                  component: styleSixHome,
                  meta: { title: 'styleSixHome' },
              },
              {
                  path: '/brazil/history',
                  name: 'styleSixHistory',
                  component: styleSixHistory,
                  meta: { title: 'styleSixHistory' },
              }
          ]
      },

    {
      path: '*',
      redirect: '/india/Home'
    }
  ]
});
