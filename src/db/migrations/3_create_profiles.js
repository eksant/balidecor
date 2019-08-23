const tableName = 'profiles'

exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable(tableName, function(t) {
      t.uuid('id').primary()
      t.uuid('user_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade')
        .notNull()

      t.string('mobile_no')
        .unique()
        .notNull()
      t.string('rules').nullable()
      t.string('first_name').notNull()
      t.string('last_name').nullable()
      t.string('gender').nullable()
      t.string('address').nullable()
      t.string('province').nullable()
      t.string('city').nullable()
      t.integer('zip_code').nullable()
      t.string('photo_url').nullable()

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
