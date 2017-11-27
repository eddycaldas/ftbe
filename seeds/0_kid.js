
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kid').del()
    .then(function () {
      // Inserts seed entries
      return knex('kid').insert([
        {
          name: "Katherine Caldas",
          place_of_birth: "Colorado Springs, CO",
          birthday: '11-02-2011'
        },
        {
          name: "Eddie Jr Caldas",
          place_of_birth: "Aurora, CO",
          birthday: '07-14-2001'
          
        }
      ]);
    });
};
