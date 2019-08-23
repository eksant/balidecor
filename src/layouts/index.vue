<template>
  <div>
    <layoutAdmin v-if="isLoggedIn && rules === 'admin'" />
    <layoutUser v-if="isLoggedIn && rules === 'user'" />
    <layoutPublic v-if="rules !== 'admin'" />
  </div>
</template>

<script>
import { storage } from '@/utils'
import layoutLogin from './login'
import layoutAdmin from './admin'
import layoutUser from './user'
import layoutPublic from './public'

export default {
  components: { layoutLogin, layoutAdmin, layoutUser, layoutPublic },
  data() {
    return {
      isLoggedIn: false,
      rules: null,
    }
  },
  created() {
    const token = storage.get('token')
    if (token) {
      const rules = storage.get('rules')
      let that = this
      that.isLoggedIn = true
      that.rules = rules
    }
  },
}
</script>