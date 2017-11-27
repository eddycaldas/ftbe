
exports.up = function(knex, Promise) {
  return knex.schema.createTable('kid', (table) => {
    table.increments()
    table.text('name')
    table.text('place_of_birth')
    table.date('birthday')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('kid')
};
