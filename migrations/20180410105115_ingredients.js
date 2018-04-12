exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('ingredients', function(table) {
      table.increments('id').primary();
      table.string('ingredient');
      table.integer('reicpe_id').unsigned().notNullable().references('id').inTable('recipes');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('ingredient'),
  ]);
};