const connection = require('../database/connection')
const crypto = require('crypto');

module.exports = {

    async index(request, response) {
        const { id } = request.params;
        const space = await connection('vehicles')
        .where('id', id)
        .select('*');

        return response.json(space)
    },

    async update(request, response) {
        const { ocupado, placa, hora_entrada, hora_saida, movimentacao, autorizacao, apartamento, data_inicio_reserva, data_fim_reserva } = request.body;
        const {numero_vaga} = request.params;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('vehicles').where('numero_vaga', numero_vaga).update({
            id,
            ocupado,
            placa,
            hora_entrada,
            hora_saida,
            movimentacao,
            autorizacao,
            apartamento,
            data_inicio_reserva,
            data_fim_reserva,
        })
    

        console.log(request.body);

        return response.json({ id });

    },
}