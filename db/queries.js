const knex = require('./')


module.exports = {
  kid: {
    list(){
      return knex('kid')
    },
    delete(id){
      return knex('kid').where({id}).delete()
    },
    read(id){
      return knex('kid').where({id}).first()
    },
    create(body){
      return knex('kid').insert(body)
    },
    update(id, body){
      return knex('kid').where({id}).update(body)
    }
  }
}