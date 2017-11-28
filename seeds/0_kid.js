
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
        },
        {
          name: "Ashley Marts",
          place_of_birth: "California, USA",
          birthday: '10-21-1997',
        },
        {
          name: "Rose McKittle",
          place_of_birth: "New York, USA",
          birthday: '10-10-1997',
        },
        {
          name: "Jack Morris",
          place_of_birth: "Montana, USA",
          birthday: '07-20-1999',
        },
        {
          name: "Katherine Brown",
          place_of_birth: "Nevada, USA",
          birthday: '02-10-2001',
        },
        {
          name: "Sarah McDonalds",
          place_of_birth: "Los Angeles, USA",
          birthday: '12-10-2011',
        },
        {
          name: "Simon Donald",
          place_of_birth: "Chicago, USA",
          birthday: '07-12-2001',
        },
        {
          name: "Cleare Johns",
          place_of_birth: "Montana, USA",
          birthday: '10-07-2017',
        },
        {
          name: "Richard Rocks",
          place_of_birth: "cancun, Mexico",
          birthday: '09-10-2015',
        },
        {
          name: "Michael Keeps",
          place_of_birth: "London, England",
          birthday: '12-10-2011',
        },
        {
          name: "Luis Martinez",
          place_of_birth: "Bogota, Colombia``",
          birthday: '02-23-2014',
        },
        {
          name: "Rachel Marks",
          place_of_birth: "Venize, Italy",
          birthday: '01-18-2010',
        },
        
      ]);
    });
};
