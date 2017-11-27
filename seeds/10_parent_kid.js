
exports.seed = function(knex, Promise) {
  return knex('parent_kid').del()
    .then(function () {
      return knex('parent_kid').insert([
        {
          parent_id: knex('parent').where('name', 'Eddy Caldas').select('id'),
          kid_id: knex('kid').where('name', 'Katherine Caldas').select('id')
        },
        {
          parent_id: knex('parent').where('name', 'Eddy Caldas').select('id'),
          kid_id: knex('kid').where('name', 'Eddie Jr Caldas').select('id')
        },
        {
          parent_id: knex('parent').where('name', 'Erica Caldas').select('id'),
          kid_id: knex('kid').where('name', 'Katherine Caldas').select('id')
        },
        {
          parent_id: knex('parent').where('name', 'Erica Caldas').select('id'),
          kid_id: knex('kid').where('name', 'Eddie Jr Caldas').select('id')
        }
      ]);
    });
};
