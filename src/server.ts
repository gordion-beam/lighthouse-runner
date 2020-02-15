import moment from 'moment';
import helloworld from './hello';
import express, { Response, Request } from 'express';
const app = express();
const port = 9000;

app.get('/', async (req: Request, res: Response) => {
  const startTime = moment();
  const result = await helloworld();
  const time = moment().diff(startTime) / 1000;
  res.json({ time });
});

app.listen(port, () =>
  console.log(`Examplessss app listening on port ${port}!`)
);
