import express from 'express';

const router = express.Router();

router
  .get('/:organisation', (req, res) => {
    res.send({
      foo: 'bar',
    });
  })
  .get('/:organisation/:issue', (req, res) => {
    res.send({
      foo: 'bar',
    });
  });

export default router;
