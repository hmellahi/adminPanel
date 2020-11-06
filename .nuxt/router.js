import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _16fcab92 = () => interopDefault(import('../client/pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _16ea3c06 = () => interopDefault(import('../client/pages/events.vue' /* webpackChunkName: "pages/events" */))
const _7e23d6a9 = () => interopDefault(import('../client/pages/inbox.vue' /* webpackChunkName: "pages/inbox" */))
const _bef10be8 = () => interopDefault(import('../client/pages/login.vue' /* webpackChunkName: "pages/login" */))
const _850e6012 = () => interopDefault(import('../client/pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _d08404e8 = () => interopDefault(import('../client/pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _98365960 = () => interopDefault(import('../client/pages/register.vue' /* webpackChunkName: "pages/register" */))
const _3988a0d0 = () => interopDefault(import('../client/pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _1c49b12b = () => interopDefault(import('../client/pages/users.vue' /* webpackChunkName: "pages/users" */))
const _5846699e = () => interopDefault(import('../client/pages/CRM/contacts.vue' /* webpackChunkName: "pages/CRM/contacts" */))
const _5d3dc932 = () => interopDefault(import('../client/pages/CRM/customers.vue' /* webpackChunkName: "pages/CRM/customers" */))
const _4486e4f3 = () => interopDefault(import('../client/pages/Ecommerce/orderDetail.vue' /* webpackChunkName: "pages/Ecommerce/orderDetail" */))
const _9080ce3e = () => interopDefault(import('../client/pages/Ecommerce/orders.vue' /* webpackChunkName: "pages/Ecommerce/orders" */))
const _193ac6e0 = () => interopDefault(import('../client/pages/Ecommerce/products.vue' /* webpackChunkName: "pages/Ecommerce/products" */))
const _10c5eff0 = () => interopDefault(import('../client/pages/Ecommerce/sellers.vue' /* webpackChunkName: "pages/Ecommerce/sellers" */))
const _52405216 = () => interopDefault(import('../client/pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/dashboard",
      component: _16fcab92,
      name: "dashboard___en"
    }, {
      path: "/es/dashboard",
      component: _16fcab92,
      name: "dashboard___es"
    }, {
      path: "/fr/dashboard",
      component: _16fcab92,
      name: "dashboard___fr"
    }, {
      path: "/ar/dashboard",
      component: _16fcab92,
      name: "dashboard___ar"
    }, {
      path: "/events",
      component: _16ea3c06,
      name: "events___en"
    }, {
      path: "/es/events",
      component: _16ea3c06,
      name: "events___es"
    }, {
      path: "/fr/events",
      component: _16ea3c06,
      name: "events___fr"
    }, {
      path: "/ar/events",
      component: _16ea3c06,
      name: "events___ar"
    }, {
      path: "/inbox",
      component: _7e23d6a9,
      name: "inbox___en"
    }, {
      path: "/es/inbox",
      component: _7e23d6a9,
      name: "inbox___es"
    }, {
      path: "/fr/inbox",
      component: _7e23d6a9,
      name: "inbox___fr"
    }, {
      path: "/ar/inbox",
      component: _7e23d6a9,
      name: "inbox___ar"
    }, {
      path: "/login",
      component: _bef10be8,
      name: "login___en"
    }, {
      path: "/es/login",
      component: _bef10be8,
      name: "login___es"
    }, {
      path: "/fr/login",
      component: _bef10be8,
      name: "login___fr"
    }, {
      path: "/ar/login",
      component: _bef10be8,
      name: "login___ar"
    }, {
      path: "/logout",
      component: _850e6012,
      name: "logout___en"
    }, {
      path: "/es/logout",
      component: _850e6012,
      name: "logout___es"
    }, {
      path: "/fr/logout",
      component: _850e6012,
      name: "logout___fr"
    }, {
      path: "/ar/logout",
      component: _850e6012,
      name: "logout___ar"
    }, {
      path: "/profile",
      component: _d08404e8,
      name: "profile___en"
    }, {
      path: "/es/profile",
      component: _d08404e8,
      name: "profile___es"
    }, {
      path: "/fr/profile",
      component: _d08404e8,
      name: "profile___fr"
    }, {
      path: "/ar/profile",
      component: _d08404e8,
      name: "profile___ar"
    }, {
      path: "/register",
      component: _98365960,
      name: "register___en"
    }, {
      path: "/es/register",
      component: _98365960,
      name: "register___es"
    }, {
      path: "/fr/register",
      component: _98365960,
      name: "register___fr"
    }, {
      path: "/ar/register",
      component: _98365960,
      name: "register___ar"
    }, {
      path: "/settings",
      component: _3988a0d0,
      name: "settings___en"
    }, {
      path: "/es/settings",
      component: _3988a0d0,
      name: "settings___es"
    }, {
      path: "/fr/settings",
      component: _3988a0d0,
      name: "settings___fr"
    }, {
      path: "/ar/settings",
      component: _3988a0d0,
      name: "settings___ar"
    }, {
      path: "/users",
      component: _1c49b12b,
      name: "users___en"
    }, {
      path: "/es/users",
      component: _1c49b12b,
      name: "users___es"
    }, {
      path: "/fr/users",
      component: _1c49b12b,
      name: "users___fr"
    }, {
      path: "/ar/users",
      component: _1c49b12b,
      name: "users___ar"
    }, {
      path: "/CRM/contacts",
      component: _5846699e,
      name: "CRM-contacts___en"
    }, {
      path: "/es/CRM/contacts",
      component: _5846699e,
      name: "CRM-contacts___es"
    }, {
      path: "/fr/CRM/contacts",
      component: _5846699e,
      name: "CRM-contacts___fr"
    }, {
      path: "/ar/CRM/contacts",
      component: _5846699e,
      name: "CRM-contacts___ar"
    }, {
      path: "/CRM/customers",
      component: _5d3dc932,
      name: "CRM-customers___en"
    }, {
      path: "/es/CRM/customers",
      component: _5d3dc932,
      name: "CRM-customers___es"
    }, {
      path: "/fr/CRM/customers",
      component: _5d3dc932,
      name: "CRM-customers___fr"
    }, {
      path: "/ar/CRM/customers",
      component: _5d3dc932,
      name: "CRM-customers___ar"
    }, {
      path: "/Ecommerce/orderDetail",
      component: _4486e4f3,
      name: "Ecommerce-orderDetail___en"
    }, {
      path: "/es/Ecommerce/orderDetail",
      component: _4486e4f3,
      name: "Ecommerce-orderDetail___es"
    }, {
      path: "/fr/Ecommerce/orderDetail",
      component: _4486e4f3,
      name: "Ecommerce-orderDetail___fr"
    }, {
      path: "/ar/Ecommerce/orderDetail",
      component: _4486e4f3,
      name: "Ecommerce-orderDetail___ar"
    }, {
      path: "/Ecommerce/orders",
      component: _9080ce3e,
      name: "Ecommerce-orders___en"
    }, {
      path: "/es/Ecommerce/orders",
      component: _9080ce3e,
      name: "Ecommerce-orders___es"
    }, {
      path: "/fr/Ecommerce/orders",
      component: _9080ce3e,
      name: "Ecommerce-orders___fr"
    }, {
      path: "/ar/Ecommerce/orders",
      component: _9080ce3e,
      name: "Ecommerce-orders___ar"
    }, {
      path: "/Ecommerce/products",
      component: _193ac6e0,
      name: "Ecommerce-products___en"
    }, {
      path: "/es/Ecommerce/products",
      component: _193ac6e0,
      name: "Ecommerce-products___es"
    }, {
      path: "/fr/Ecommerce/products",
      component: _193ac6e0,
      name: "Ecommerce-products___fr"
    }, {
      path: "/ar/Ecommerce/products",
      component: _193ac6e0,
      name: "Ecommerce-products___ar"
    }, {
      path: "/Ecommerce/sellers",
      component: _10c5eff0,
      name: "Ecommerce-sellers___en"
    }, {
      path: "/es/Ecommerce/sellers",
      component: _10c5eff0,
      name: "Ecommerce-sellers___es"
    }, {
      path: "/fr/Ecommerce/sellers",
      component: _10c5eff0,
      name: "Ecommerce-sellers___fr"
    }, {
      path: "/ar/Ecommerce/sellers",
      component: _10c5eff0,
      name: "Ecommerce-sellers___ar"
    }, {
      path: "/",
      component: _52405216,
      name: "index___en"
    }, {
      path: "/es/",
      component: _52405216,
      name: "index___es"
    }, {
      path: "/fr/",
      component: _52405216,
      name: "index___fr"
    }, {
      path: "/ar/",
      component: _52405216,
      name: "index___ar"
    }],

    fallback: false
  })
}
