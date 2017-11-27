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
  },
  
  parent: {
    list(){
      return knex('parent')
    },
    delete(id){
      return knex('parent').where({id}).delete()
    },
    read(id){
      return knex('parent').where({id}).first()
    },
    create(body){
      return knex('parent').insert(body)
    },
    update(id, body){
      return knex('parent').where({id}).update(body)
    },
  },
  
  parent_kid: {
    getKidsForParent(parent_id) {
      return knex('parent_kid').where({parent_id}).select('kid_id')
      .then((kids) => {
        return Promise.all(
          kids.map((kid) => knex('kid').where({id: kid.kid_id}).first()
        ))
      })
    },
    
    getParentsForKid(kid_id) {
      return knex('parent_kid').where({kid_id}).select('parent_id')
      .then((parents) => {
        return Promise.all(
          parents.map((parent) => knex('parent').where({id: parent.parent_id}).first()
        ))
      })
    },
    
  }
  
}