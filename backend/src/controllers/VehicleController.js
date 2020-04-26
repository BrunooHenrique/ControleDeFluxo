const crypto = require('crypto');
const connection = require('../database/connection')


module.exports = {
    async index(request, response) {
        const vehicles = await connection('vehicles').select('*');

        return response.json(vehicles)
    },

    async create(request, response) {
        const { numero_vaga} = request.body;
        const ocupado = "Nao"
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('vehicles').insert({
            id,
            numero_vaga,
            ocupado

           
        })

        console.log(request.body);

        return response.json({ id });
    },


    async delete(request, response) {
        const { id } = request.params;

        const vehicles = await connection('vehicles').where('id', id).delete();

        return response.status(204).send();
    }
}