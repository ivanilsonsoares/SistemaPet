
exports.up = function(knex) {
    return knex.schema.createTable('projects', function(table){
        table.increments();
        table.string('name').notNullable();
        table.string('imagem').notNullable();
        table.string('description').notNullable();
        table.string('organizadores').notNullable();
        
        table.string('user_email').notNullable();
        
        table.foreign('user_email').references('email').inTable('users');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('projects');
};