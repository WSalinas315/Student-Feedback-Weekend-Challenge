const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET for admin functionality


// POST for review page
router.post('/', (req, res) => {
  let feedback = req.body;
  console.log('Adding feedback entry', feedback);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                  VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments]).then(result =>{
    res.sendStatus(201);
  }).catch(error => {
    console.log(`Error adding new feedback`, error);
  });
});

// DELETE for admin functionality


module.exports = router;