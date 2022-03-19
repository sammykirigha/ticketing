import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
   res.send('heey am new ....')
})

export {router as currentUserRouter}