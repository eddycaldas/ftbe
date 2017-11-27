var express = require('express')
var router = express.Router()
const queries = require('../db/queries')

const table = 'parent'

router.get('/', (req, res) => {
  queries[table].list()
  .then((data) => res.json(data))
});

router.delete('/:id', (req, res) => {
  queries[table].delete(req.params.id)
  .then(() => res.send(202))
});

router.get('/:id', (req, res) => {
  var withKids = req.query.withKids
  var query = queries[table].read(req.params.id)
  if(withKids){
    queries.parent_kid.getKidsForParent(req.params.id)
    .then((kids) => {
      return query.then((parent) => {
        parent.kids = kids
        res.json(parent)
      })
    })
  } else {
  query
  .then((parent) => res.json(parent))
}
});

router.post('/', (req, res) => {
  queries[table].create(req.body)
  .then((parent) => res.json(parent))
});

router.put('/:id', (req, res) => {
  queries[table].update(req.params.id, req.body)
  .then((parent) => res.send(200))
})

module.exports = router