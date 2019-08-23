const tableName = 'users'

exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable(tableName, function(t) {
      t.uuid('id').primary()

      t.string('email')
        .unique()
        .notNull()
      t.string('username')
        .unique()
        .notNull()
      t.string('password').notNull()
      t.string('reset_token').nullable()
      t.datetime('reset_expired').nullable()
      t.string('status').notNull()

      t.timestamp('created_at')
        .defaultTo(knex.fn.now())
        .notNull()
      t.uuid('created_by').notNull()
      t.timestamp('updated_at').nullable()
      t.uuid('updated_by').nullable()
    }),
  ])
}

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTable(tableName)])
}
