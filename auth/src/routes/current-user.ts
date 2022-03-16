import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
   res.send('hi there current user in the app....')
})

export {router as currentUserRouter}