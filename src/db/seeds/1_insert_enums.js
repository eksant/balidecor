const { upsert } = require('../../utils/upsert')
const data = require('./dumb/1_enums')
const tableName = 'enums'

exports.seed = async function(knex) {
  await upsert(knex, tableName, data)
}
