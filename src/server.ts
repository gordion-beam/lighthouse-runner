import moment from 'moment';
import helloworld from './hello';
import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 9000;

app.use(bodyParser.json());
app.post('/', async (req: Request, res: Response) => {
  const startTime = moment();
  const scores = await helloworld(req.body.site);
  const time = moment().diff(startTime) / 1000;
  res.json({ time, scores });
});

app.listen(port, () =>
  console.log(`Examplessss app listening on port ${port}!`)
);
