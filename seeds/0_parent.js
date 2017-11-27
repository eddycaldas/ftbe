
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parent').del()
    .then(function () {
      // Inserts seed entries
      return knex('parent').insert([
        {
          name: "Eddy Caldas",
          place_of_birth: "Lima, Peru",
          birthday: '10-06-1973',
        },
        {
          name: "Erica Caldas",
          place_of_birth: "Ohio, USA",
          birthday: '10-20-1987',
        }
      ]);
    });
};
