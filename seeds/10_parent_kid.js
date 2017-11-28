
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
          parent_id: knex('parent').where('name', 'Rosie Ching').select('id'),
          kid_id: knex('kid').where('name', 'Sarah McDonalds').select('id')
        },
        {
          parent_id: knex('parent').where('name', 'Nathan Gray').select('id'),
          kid_id: knex('kid').where('name', 'Sarah McDonalds').select('id')
        },
        {
          parent_id: knex('parent').where('name', 'Elvis Roberts').select('id'),
          kid_id: knex('kid').where('name', 'Simon Donald').select('id')
        },
        {
          parent_id: knex('parent').where('name', 'Elvis Roberts').select('id'),
          kid_id: knex('kid').where('name', 'Cleare Johns').select('id')
        },
        {
          parent_id: knex('parent').where('name', 'Ralph Morris').select('id'),
          kid_id: knex('kid').where('name', 'Richard Rocks').select('id')
        },
        {
          parent_id: knex('parent').where('name', 'Ralph Morris').select('id'),
          kid_id: knex('kid').where('name', 'Michael Keeps').select('id')
        },
        {
          parent_id: knex('parent').where('name', 'Ralph Morris').select('id'),
          kid_id: knex('kid').where('name', 'Luis Martinez').select('id')
        },
        {
          parent_id: knex('parent').where('name', 'Ralph Morris').select('id'),
          kid_id: knex('kid').where('name', 'Rachel Marks').select('id')
        },
        {
          parent_id: knex('parent').where('name', 'Marylin White').select('id'),
          kid_id: knex('kid').where('name', 'Richard Rocks').select('id')
        },
        {
          parent_id: knex('parent').where('name', 'Marylin White').select('id'),
          kid_id: knex('kid').where('name', 'Michael Keeps').select('id')
        },
        {
          parent_id: knex('parent').where('name', 'Marylin White').select('id'),
          kid_id: knex('kid').where('name', 'Luis Martinez').select('id')
        },
        {
          parent_id: knex('parent').where('name', 'Marylin White').select('id'),
          kid_id: knex('kid').where('name', 'Rachel Marks').select('id')
        }
      ]);
    });
};
