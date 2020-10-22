const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World',
    page: req.query.page,
    limit: req.query.limit
  });
});

router.post('/', (req, res) => {
  console.log(req.body);

  res.json({
    message: "Request data telah diterima",
    ...req.body
  });
});

module.exports = router;