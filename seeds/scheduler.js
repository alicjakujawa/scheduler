export function seed(knex, Promise) {
  return knex('gyms').del()
    .then(function () {
      return Promise.all([
        knex('gyms').insert({name: 'Fitness Academy Marino', address: 'Sample address'}),
        knex('gyms').insert({name: 'Fitness Academy Arkady Wrocławskie', address: 'Sample address 2'}),
        knex('gyms').insert({name: 'Fitness Academy Galeria Dominikańska', address: 'Sample address 3'})
      ]);
    });
};
