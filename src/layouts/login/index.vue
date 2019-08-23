<template>
  <div class="login-background">
    <a-row type="flex" justify="center" align="middle">
      <a-col>
        <a-card :title="$t('Login Bali Decor Rental')" class="login-card">
          <a-form :form="form" @submit="handleSubmit">
            <a-form-item>
              <a-input
                :placeholder="$t('Username...')"
                v-decorator="[ 'username',
                  {
                    initialValue: 'admin', 
                    rules: [{ required: true, message: $t('Please input Your username!') 
                  }]}
                ]"
              >
                <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                type="password"
                :placeholder="$t('Password...')"
                v-decorator="[ 'password',
                  {
                    initialValue: 'P@ssw0rd',
                    rules: [{ required: true, message: $t('Please input Your Password!' )
                  }]}
                ]"
              >
                <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-checkbox
                v-decorator="[ 'remember',
                  {
                    valuePropName: 'checked',
                    initialValue: true,
                  }
                ]"
              >{{$t('Remember me')}}</a-checkbox>
              <a class="login-form-forgot" href="/">{{$t('Forgot password')}}</a>
              <a-button type="primary" html-type="submit" class="login-form-button">{{$t('Log in')}}</a-button>
              <a href="/">{{$t('register now!')}}</a>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { storage, encrypt } from '@/utils'
import knex from 'knex'
// import mysql from 'serverless-mysql'
import config from '@/config'

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this)
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        if (!err) {
          const { username, password, remember } = values
          const db = knex(config.db)
          db.client.transacting = true
          const results = db('enums')
            .select()
            .debug()
            .then(result => console.log(result))
            .catch(err => console.log(err))

          // const db = mysql({
          //   config: {
          //     host: '139.162.57.73',ˇ
          //     database: 'balideco_db',
          //     user: 'balideco_root',
          //     password: 'oK57jrCQ6$WM',
          //   },
          // })

          // let results = await mysql.query('SELECT * FROM enums')
          // await mysql.end()
          console.log('====db', results)

          // db.select()
          //   .from('enums')
          //   .debug()
          //   .then(result => {
          //     console.log('===result', result)
          //   })
          //   .catch(err => console.log('ERR', err))

          // this.$store
          //   .dispatch('authLogin', values)
          //   .then(result => {
          //     console.log('==result', result)
          //   })
          //   .catch(err => {
          //     console.log('ERR', err)
          //   })

          // this.$store.commit('authLogin', values)

          // storage.set('token', 'fake-token')
          // storage.set('rules', username === 'admin' ? 'admin' : 'user')
          // if (remember) {
          //   storage.set('usr', encrypt(username))
          //   storage.set('pwd', encrypt(password))
          // }
          // window.location.href = '/'
          // this.$router.push('/')
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.login-background {
  height: 100vh;
  background: rgb(228, 227, 240);
  background: -moz-linear-gradient(
    146deg,
    rgba(228, 227, 240, 1) 0%,
    rgba(176, 176, 236, 1) 35%,
    rgba(46, 201, 232, 1) 100%
  );
  background: -webkit-linear-gradient(
    146deg,
    rgba(228, 227, 240, 1) 0%,
    rgba(176, 176, 236, 1) 35%,
    rgba(46, 201, 232, 1) 100%
  );
  background: linear-gradient(
    146deg,
    rgba(228, 227, 240, 1) 0%,
    rgba(176, 176, 236, 1) 35%,
    rgba(46, 201, 232, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#e4e3f0",endColorstr="#2ec9e8",GradientType=1);
}
.login-card {
  width: 350px;
  margin-top: 20%;
  max-width: 350px;
  box-shadow: 2px 0 5px rgba(0, 21, 41, 0.15);
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
}
</style>