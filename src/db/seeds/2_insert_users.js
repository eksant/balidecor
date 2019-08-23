const { upsert } = require('../../utils/upsert')
const data = require('./dumb/2_users')
const tableName = 'users'

exports.seed = async function(knex) {
  await upsert(knex, tableName, data)
}
