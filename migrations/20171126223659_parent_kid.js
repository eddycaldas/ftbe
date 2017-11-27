
exports.up = function(knex, Promise) {
  return knex.schema.createTable('parent_kid', (table) => {
    table.integer('kid_id')
      .references('kid.id')
      .onDelete('CASCADE')
    table.integer('parent_id')
      .references('parent.id')
      .onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('parent_kid')
};
