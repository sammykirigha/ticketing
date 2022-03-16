import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  res.send('hi there toka hapa...')
})

export {router as signoutRouter}