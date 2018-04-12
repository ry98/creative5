exports.up = function(knex, Promise) {
  return Promise.all([
    knex.raw("alter table recipes add fulltext(recipe)"),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.raw("alter table recipes drop index recipe"),
  ]);
};