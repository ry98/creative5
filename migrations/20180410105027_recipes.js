exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('recipes', function(table) {
      table.increments('id').primary();
      table.string('recipe');
      table.dateTime('created');
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('recipes'),
  ]);
};
