import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _32f3440e = () => interopDefault(import('..\\client\\pages\\dashboard.vue' /* webpackChunkName: "pages_dashboard" */))
const _46afc98f = () => interopDefault(import('..\\client\\pages\\events.vue' /* webpackChunkName: "pages_events" */))
const _4e21f400 = () => interopDefault(import('..\\client\\pages\\inbox.vue' /* webpackChunkName: "pages_inbox" */))
const _70859763 = () => interopDefault(import('..\\client\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _25834500 = () => interopDefault(import('..\\client\\pages\\logout.vue' /* webpackChunkName: "pages_logout" */))
const _60aa2123 = () => interopDefault(import('..\\client\\pages\\profile.vue' /* webpackChunkName: "pages_profile" */))
const _087d2299 = () => interopDefault(import('..\\client\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _e3be1fce = () => interopDefault(import('..\\client\\pages\\settings.vue' /* webpackChunkName: "pages_settings" */))
const _277062fc = () => interopDefault(import('..\\client\\pages\\users.vue' /* webpackChunkName: "pages_users" */))
const _1e376e0b = () => interopDefault(import('..\\client\\pages\\CRM\\contacts.vue' /* webpackChunkName: "pages_CRM_contacts" */))
const _5b4a5866 = () => interopDefault(import('..\\client\\pages\\CRM\\customers.vue' /* webpackChunkName: "pages_CRM_customers" */))
const _16a4f515 = () => interopDefault(import('..\\client\\pages\\Ecommerce\\orderDetail.vue' /* webpackChunkName: "pages_Ecommerce_orderDetail" */))
const _5ffc7b7f = () => interopDefault(import('..\\client\\pages\\Ecommerce\\orders.vue' /* webpackChunkName: "pages_Ecommerce_orders" */))
const _b46d0c04 = () => interopDefault(import('..\\client\\pages\\Ecommerce\\products.vue' /* webpackChunkName: "pages_Ecommerce_products" */))
const _56fc792a = () => interopDefault(import('..\\client\\pages\\Ecommerce\\sellers.vue' /* webpackChunkName: "pages_Ecommerce_sellers" */))
const _b2441768 = () => interopDefault(import('..\\client\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
      component: _32f3440e,
      name: "dashboard___en"
    }, {
      path: "/es/dashboard",
      component: _32f3440e,
      name: "dashboard___es"
    }, {
      path: "/fr/dashboard",
      component: _32f3440e,
      name: "dashboard___fr"
    }, {
      path: "/ar/dashboard",
      component: _32f3440e,
      name: "dashboard___ar"
    }, {
      path: "/events",
      component: _46afc98f,
      name: "events___en"
    }, {
      path: "/es/events",
      component: _46afc98f,
      name: "events___es"
    }, {
      path: "/fr/events",
      component: _46afc98f,
      name: "events___fr"
    }, {
      path: "/ar/events",
      component: _46afc98f,
      name: "events___ar"
    }, {
      path: "/inbox",
      component: _4e21f400,
      name: "inbox___en"
    }, {
      path: "/es/inbox",
      component: _4e21f400,
      name: "inbox___es"
    }, {
      path: "/fr/inbox",
      component: _4e21f400,
      name: "inbox___fr"
    }, {
      path: "/ar/inbox",
      component: _4e21f400,
      name: "inbox___ar"
    }, {
      path: "/login",
      component: _70859763,
      name: "login___en"
    }, {
      path: "/es/login",
      component: _70859763,
      name: "login___es"
    }, {
      path: "/fr/login",
      component: _70859763,
      name: "login___fr"
    }, {
      path: "/ar/login",
      component: _70859763,
      name: "login___ar"
    }, {
      path: "/logout",
      component: _25834500,
      name: "logout___en"
    }, {
      path: "/es/logout",
      component: _25834500,
      name: "logout___es"
    }, {
      path: "/fr/logout",
      component: _25834500,
      name: "logout___fr"
    }, {
      path: "/ar/logout",
      component: _25834500,
      name: "logout___ar"
    }, {
      path: "/profile",
      component: _60aa2123,
      name: "profile___en"
    }, {
      path: "/es/profile",
      component: _60aa2123,
      name: "profile___es"
    }, {
      path: "/fr/profile",
      component: _60aa2123,
      name: "profile___fr"
    }, {
      path: "/ar/profile",
      component: _60aa2123,
      name: "profile___ar"
    }, {
      path: "/register",
      component: _087d2299,
      name: "register___en"
    }, {
      path: "/es/register",
      component: _087d2299,
      name: "register___es"
    }, {
      path: "/fr/register",
      component: _087d2299,
      name: "register___fr"
    }, {
      path: "/ar/register",
      component: _087d2299,
      name: "register___ar"
    }, {
      path: "/settings",
      component: _e3be1fce,
      name: "settings___en"
    }, {
      path: "/es/settings",
      component: _e3be1fce,
      name: "settings___es"
    }, {
      path: "/fr/settings",
      component: _e3be1fce,
      name: "settings___fr"
    }, {
      path: "/ar/settings",
      component: _e3be1fce,
      name: "settings___ar"
    }, {
      path: "/users",
      component: _277062fc,
      name: "users___en"
    }, {
      path: "/es/users",
      component: _277062fc,
      name: "users___es"
    }, {
      path: "/fr/users",
      component: _277062fc,
      name: "users___fr"
    }, {
      path: "/ar/users",
      component: _277062fc,
      name: "users___ar"
    }, {
      path: "/CRM/contacts",
      component: _1e376e0b,
      name: "CRM-contacts___en"
    }, {
      path: "/es/CRM/contacts",
      component: _1e376e0b,
      name: "CRM-contacts___es"
    }, {
      path: "/fr/CRM/contacts",
      component: _1e376e0b,
      name: "CRM-contacts___fr"
    }, {
      path: "/ar/CRM/contacts",
      component: _1e376e0b,
      name: "CRM-contacts___ar"
    }, {
      path: "/CRM/customers",
      component: _5b4a5866,
      name: "CRM-customers___en"
    }, {
      path: "/es/CRM/customers",
      component: _5b4a5866,
      name: "CRM-customers___es"
    }, {
      path: "/fr/CRM/customers",
      component: _5b4a5866,
      name: "CRM-customers___fr"
    }, {
      path: "/ar/CRM/customers",
      component: _5b4a5866,
      name: "CRM-customers___ar"
    }, {
      path: "/Ecommerce/orderDetail",
      component: _16a4f515,
      name: "Ecommerce-orderDetail___en"
    }, {
      path: "/es/Ecommerce/orderDetail",
      component: _16a4f515,
      name: "Ecommerce-orderDetail___es"
    }, {
      path: "/fr/Ecommerce/orderDetail",
      component: _16a4f515,
      name: "Ecommerce-orderDetail___fr"
    }, {
      path: "/ar/Ecommerce/orderDetail",
      component: _16a4f515,
      name: "Ecommerce-orderDetail___ar"
    }, {
      path: "/Ecommerce/orders",
      component: _5ffc7b7f,
      name: "Ecommerce-orders___en"
    }, {
      path: "/es/Ecommerce/orders",
      component: _5ffc7b7f,
      name: "Ecommerce-orders___es"
    }, {
      path: "/fr/Ecommerce/orders",
      component: _5ffc7b7f,
      name: "Ecommerce-orders___fr"
    }, {
      path: "/ar/Ecommerce/orders",
      component: _5ffc7b7f,
      name: "Ecommerce-orders___ar"
    }, {
      path: "/Ecommerce/products",
      component: _b46d0c04,
      name: "Ecommerce-products___en"
    }, {
      path: "/es/Ecommerce/products",
      component: _b46d0c04,
      name: "Ecommerce-products___es"
    }, {
      path: "/fr/Ecommerce/products",
      component: _b46d0c04,
      name: "Ecommerce-products___fr"
    }, {
      path: "/ar/Ecommerce/products",
      component: _b46d0c04,
      name: "Ecommerce-products___ar"
    }, {
      path: "/Ecommerce/sellers",
      component: _56fc792a,
      name: "Ecommerce-sellers___en"
    }, {
      path: "/es/Ecommerce/sellers",
      component: _56fc792a,
      name: "Ecommerce-sellers___es"
    }, {
      path: "/fr/Ecommerce/sellers",
      component: _56fc792a,
      name: "Ecommerce-sellers___fr"
    }, {
      path: "/ar/Ecommerce/sellers",
      component: _56fc792a,
      name: "Ecommerce-sellers___ar"
    }, {
      path: "/",
      component: _b2441768,
      name: "index___en"
    }, {
      path: "/es/",
      component: _b2441768,
      name: "index___es"
    }, {
      path: "/fr/",
      component: _b2441768,
      name: "index___fr"
    }, {
      path: "/ar/",
      component: _b2441768,
      name: "index___ar"
    }],

    fallback: false
  })
}
