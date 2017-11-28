
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
        },
        {
          name: "Rosie Ching",
          place_of_birth: "Seoul, Korea",
          birthday: '10-20-1967',
        },
        {
          name: "Nathan Gray",
          place_of_birth: "Florida, USA",
          birthday: '10-20-1977',
        },
        {
          name: "Elvis Roberts",
          place_of_birth: "Arizona, USA",
          birthday: '10-12-1979',
        },
        {
          name: "Ralph Morris",
          place_of_birth: "Montreal, Canada",
          birthday: '10-29-1969',
        },
        {
          name: "Marylin White",
          place_of_birth: "Chicago, USA",
          birthday: '12-20-1977',
        },
      ]);
    });
};
