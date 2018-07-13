import Express from 'express';
import flash from 'req-flash';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import reactHandler from './react-handler';
import errorHandler from './error-handler';
import api from './api';

const IS_DEV = process.env.NODE_ENV === 'development';
const app = new Express();
const port = IS_DEV ? 3000 : 8080;

app
  .use(cookieParser())
  .use(session({
    secret: '123',
    resave: true,
    saveUninitialized: true,
  }))
  .use('/scripts', Express.static(`${__dirname}/../node_modules/@github-issues/react/dist/static`))
  .use(flash()) // @TODO - bind flash messages to react store and implement toast component
  .use('/api', api)
  .get('*', reactHandler)
  .use(errorHandler)
  .listen(port, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.info(`http://localhost:${port}/`);
    }
  });

export default app;
