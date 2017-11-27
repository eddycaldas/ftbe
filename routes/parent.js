const router = require('Express').Router()
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
  queries[table].read(req.params.id)
  .then((kid) => res.json(kid))
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