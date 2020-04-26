
exports.up = function(knex) {
  return knex.schema.createTable('vehicles', function(table){
      table.string('id').primary();
      table.string('ocupado');
      table.string('placa');
      table.timestamp('hora_entrada');
      table.timestamp('hora_saida');
      table.string('movimentacao');
      table.string('autorizacao');
      table.string('apartamento');
      table.string('numero_vaga').notNullable();
      table.string('data_inicio_reserva');
      table.string('data_fim_reserva');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('vehicles');
};
