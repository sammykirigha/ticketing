import express from 'express';
import {json} from 'body-parser';

const app = express();
app.use(json())

app.get('/api/users/currentuser', (req, res) => {
    res.send('Hi Samuel you made it happen bigups......')
})

app.listen(3000, () => {
   console.log('App listening on port 3000!......')
})