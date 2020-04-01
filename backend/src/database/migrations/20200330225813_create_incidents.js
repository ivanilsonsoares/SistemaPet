
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('user_email').notNullable();
        
        table.foreign('user_email').references('email').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
