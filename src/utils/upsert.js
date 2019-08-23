async function upsert(knex, tableName = '', items = []) {
  return knex.transaction(trx => {
    const queries = items.map(item => {
      const insert = trx(tableName)
        .insert(item)
        .toString()
      const update = trx(tableName)
        .update(item)
        .toString()
        .replace(/^update(.*?)set\s/gi, '')

      return trx.raw(`${insert} ON DUPLICATE KEY UPDATE ${update}`).transacting(trx)
    })

    return Promise.all(queries)
      .then(trx.commit)
      .catch(trx.rollback)
  })
}

module.exports.upsert = upsert
