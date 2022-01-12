const router = require('express').Router();

router.post('/sign-up', (req, res) => {
  console.log(req.body);
  const data = req.body.email;
  res.send(data);
});

module.exports = router;
