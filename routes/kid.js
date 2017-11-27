var express = require('express')
var router = express.Router()
const queries = require('../db/queries')

const table = 'kid'

router.get('/', (req, res) => {
  queries[table].list()
  .then((data) => res.json(data))
});

router.delete('/:id', (req, res) => {
  queries[table].delete(req.params.id)
  .then(() => res.send(202))
});

router.get('/:id', (req, res) => {
  var withParents = req.query.withParents
  var query = queries[table].read(req.params.id)
  if(withParents){
    queries.parent_kid.getParentsForKid(req.params.id)
    .then((parents) => {
      return query.then((kid) => {
        kid.parents = parents
        res.json(kid)
      })
    })
  } else {
  query
  .then((kid) => res.json(kid))
}
});

router.post('/', (req, res) => {
  queries[table].create(req.body)
  .then((kid) => res.json(kid))
});

router.put('/:id', (req, res) => {
  queries[table].update(req.params.id, req.body)
  .then((kid) => res.send(200))
})


module.exports = router