import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { isAuthenticated } from '@elements/LoginForm.vue';

export function requireAuth(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
}
