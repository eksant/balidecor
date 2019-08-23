const { upsert } = require('../../utils/upsert')
const data = require('./dumb/3_profiles')
const tableName = 'profiles'

exports.seed = async function(knex) {
  const admins = await knex('users')
    .select()
    .where({ username: 'admin' })
    .limit(1)
  const admin = Array.isArray(admins) ? admins[0] : admins

  if (data && data.length > 0) {
    data.map(item => {
      item.user_id = admin.id
      item.created_by = admin.id
      return item
    })
  }

  await upsert(knex, tableName, data)
}
