const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const{title, ong_id, description, value} = request.body;
        request.headers
    }
}