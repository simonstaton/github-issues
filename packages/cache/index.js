if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load(); // eslint-disable-line
}

const Memcached = require('memcached');

const memcached = new Memcached(process.env.MEMCACHED_SERVER, { retries: 1 });

module.exports = {

  memcached,

  memcacheMiddleware: (duration, id) => (req, res, next) => {
    const key = id || `${req.originalUrl || req.url}`;
    memcached.get(key, (err, data) => {
      if (err) return next(err);
      if (data) return res.send(data);
      return next(key);
    });
  },

};
