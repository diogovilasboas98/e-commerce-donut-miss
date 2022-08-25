import Login from '@/layouts/login.vue'
import Registration from '@/layouts/registration.vue'
import ForgotPassword from '@/layouts/forgot-password.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: ForgotPassword
  }
]

export default routes.map(route => {
  const meta = {
    public: true,
    onlyLoggedOut: true
  }
  return { ...route, meta }
})