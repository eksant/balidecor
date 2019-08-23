<template>
  <a-layout id="header">
    <a-layout-header class="header-top">
      <div class="logo" v-if="auth.isLoggedIn && rules === 'admin'" />
      <a-row type="flex" align="middle">
        <a-col :span="12" class="header-left">
          <a-menu mode="horizontal" :selectable="false" :defaultSelectedKeys="[]">
            <a-menu-item key="contact">
              <a-icon type="phone" />+62 821 1234 5678
            </a-menu-item>
            <a-menu-item key="email">
              <a-icon type="mail" />bukan@email.com
            </a-menu-item>
          </a-menu>
        </a-col>
        <a-col :span="12" class="header-right">
          <a-menu mode="horizontal" :selectable="false" :defaultSelectedKeys="[]">
            <a-menu-item key="instagram">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <a-icon type="instagram" />
              </a>
            </a-menu-item>
            <a-sub-menu>
              <span slot="title" class="submenu-title-wrapper">
                <a-avatar shape="square" :size="16" :src="lang" />
              </span>
              <a-menu-item key="en" @click="onChangeLang('en')">
                <a-avatar shape="square" :size="16" :src="flags.en" class="flag" />English
              </a-menu-item>
              <a-menu-item key="id" @click="onChangeLang('id')">
                <a-avatar shape="square" :size="16" :src="flags.id" class="flag" />Indonesia
              </a-menu-item>
            </a-sub-menu>
            <a-menu-item key="login" v-if="!auth.isLoggedIn">
              <router-link to="/login">
                <a-icon type="login" />
                {{$t('Login or Register')}}
              </router-link>
            </a-menu-item>
            <a-sub-menu v-if="auth.isLoggedIn">
              <span slot="title" class="submenu-title-wrapper">
                <a-icon type="user" />admin@email.com
              </span>
              <a-menu-item key="account">
                <a-icon type="idcard" />
                {{$t('Profile')}}
              </a-menu-item>
              <a-menu-item key="logout" v-on:click="onLogout">
                <a-icon type="logout" />
                {{$t('Log out')}}
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-col>
      </a-row>
    </a-layout-header>
  </a-layout>
</template>

<script>
import { mapState } from 'vuex'
import { storage } from '@/utils'
import i18n from '@/plugins/i18n'
import flagEn from '@/assets/images/flags/us.svg'
import flagId from '@/assets/images/flags/id.svg'

export default {
  data() {
    return {
      // rules: null,
      // isLoggedIn: false,
      flags: { en: flagEn, id: flagId },
      lang: storage.get('lang') === 'en' ? flagEn : flagId,
    }
  },
  // created() {
  // const token = storage.get('token')
  // if (token) {
  //   const rules = storage.get('rules')
  //   let that = this
  //   that.isLoggedIn = true
  //   that.rules = rules
  // }
  // },
  // computed: {
  //   isLoggedIn() {
  //     return this.$store.state.auth.isLoggedIn
  //   },
  //   rules() {
  //     return this.$store.state.auth.rules
  //   },
  // },
  computed: mapState(['auth']),
  methods: {
    onChangeLang(lang) {
      if (lang) {
        let that = this
        i18n.locale = lang
        storage.set('lang', lang)
        that.lang = lang === 'en' ? flagEn : flagId
      }
    },
    onLogout: async () => {
      await storage.remove('token')
      await storage.remove('rules')
      await storage.remove('usr')
      await storage.remove('pwd')
      window.location.href = '/'
    },
  },
}
</script>

<style lang="scss" scoped>
#header .logo {
  height: 40px;
  width: 190px;
  padding: 0 10px;
  background: rgba(214, 150, 150, 0.2);
  float: left;
}
.flag {
  margin-right: 10px;
}
.header-top {
  position: fixed;
  width: 100%;
  .ant-menu {
    line-height: 39px;
  }
  .ant-menu-horizontal {
    border-bottom: 0;
  }
  .ant-menu-item {
    border-bottom: 0;
  }
  .ant-menu-item:hover {
    border-bottom: 0;
  }
  .ant-menu-submenu {
    border-bottom: 0;
  }
  .ant-menu-submenu:hover {
    border-bottom: 0;
  }
  .header-left {
    float: left;
  }
  .header-right {
    float: right;
    text-align: right;
    .ant-menu-item {
      padding: 0 5px;
    }
  }
}
.ant-layout-header {
  height: 40px;
  padding: 0 10px;
  background: none repeat scroll 0 0 #f0f0e9;
}
.ant-menu-horizontal {
  background: none repeat scroll 0 0 #f0f0e9 !important;
}
</style>
