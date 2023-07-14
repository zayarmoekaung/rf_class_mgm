exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
      table.increments('id');
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.enum('role', ['admin', 'student']).notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users');
  };