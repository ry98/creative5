exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('steps', function(table) {
      table.increments('id').primary();
      table.string('step');
      table.integer('reicpe_id').unsigned().notNullable().references('id').inTable('recipes');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('steps'),
  ]);
};