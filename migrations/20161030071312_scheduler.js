export function up(knex, Promise) {
  return Promise.all([

    knex.schema.createTable('gyms', function(table) {
      table.increments();
      table.string('name').unique();
      table.string('address');
      table.timestamps();
    }),

    knex.schema.createTable('schedules', function(table) {
      table.increments();
      table.string('name');
      table.date('start_date');
      table.date('end_date');
      table.integer('gym_id').references('id').inTable('gyms');
      table.timestamps();
    }),

    knex.schema.createTable('workouts', function(table) {
      table.increments();
      table.string('name');
      table.timestamp('start_time');
      table.timestamp('end_time');
      table.integer('schedule_id').references('id').inTable('schedules');
      table.timestamps();
    })

  ]);
};

export function down(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('gyms'),
    knex.schema.dropTable('schedules'),
    knex.schema.dropTable('workouts')
  ]);
};
