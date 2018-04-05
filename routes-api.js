const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    'MI PRIMER API': 'FUNCIONA'
  });
});

module.exports = router;
