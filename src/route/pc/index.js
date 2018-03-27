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
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/styleOneMain',
      name: 'styleOneMain',
      component: styleOneMain,
      meta: { title: 'style-one' },
      children: [
          {
              path: '/styleOneMain/Home',
              name: 'styleOneHome',
              component: styleOneHome,
              meta: { title: 'styleOneHome' },
          },
          {
              path: '/styleOneMain/history',
              name: 'styleOneHistory',
              component: styleOneHistory,
              meta: { title: 'styleOneHistory' },
          }
      ]
    },

      {
          path: '/styleTwoMain',
          name: 'styleTwoMain',
          component: styleTwoMain,
          meta: { title: 'style-two' },
          children: [
              {
                  path: '/styleTwoMain/Home',
                  name: 'styleTwoHome',
                  component: styleTwoHome,
                  meta: { title: 'styleTwoHome' },
              },
              {
                  path: '/styleTwoMain/history',
                  name: 'styleTwoHistory',
                  component: styleTwoHistory,
                  meta: { title: 'styleTwoHistory' },
              }
          ]
      },

      {
          path: '/styleThreeMain',
          name: 'styleThreeMain',
          component: styleThreeMain,
          meta: { title: 'style-three' },
          children: [
              {
                  path: '/styleThreeMain/Home',
                  name: 'styleThreeHome',
                  component: styleThreeHome,
                  meta: { title: 'styleThreeHome' },
              },
              {
                  path: '/styleThreeMain/history',
                  name: 'styleThreeHistory',
                  component: styleThreeHistory,
                  meta: { title: 'styleThreeHistory' },
              }
          ]
      },

      {
          path: '/styleFourMain',
          name: 'styleFourMain',
          component: styleFourMain,
          meta: { title: 'style-four' },
          children: [
              {
                  path: '/styleFourMain/Home',
                  name: 'styleFourHome',
                  component: styleFourHome,
                  meta: { title: 'styleFourHome' },
              },
              {
                  path: '/styleFourMain/history',
                  name: 'styleFourHistory',
                  component: styleFourHistory,
                  meta: { title: 'styleFourHistory' },
              }
          ]
      },

      {
          path: '/styleFiveMain',
          name: 'styleFiveMain',
          component: styleFiveMain,
          meta: { title: 'style-five' },
          children: [
              {
                  path: '/styleFiveMain/Home',
                  name: 'styleFiveHome',
                  component: styleFiveHome,
                  meta: { title: 'styleFiveHome' },
              },
              {
                  path: '/styleFiveMain/history',
                  name: 'styleFiveHistory',
                  component: styleFiveHistory,
                  meta: { title: 'styleFiveHistory' },
              }
          ]
      },

    {
      path: '*',
      redirect: '/styleOneMain/Home'
    }
  ]
});
