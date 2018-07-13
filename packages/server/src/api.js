import express from 'express';
import request from 'request';
import { memcacheMiddleware, memcached } from '@github-issues/cache';

const router = express.Router();
const api = 'https://api.github.com';
const options = {
  json: true,
  headers: {
    'User-Agent': 'Github Issues Agent v1.0.0',
  },
};

router

  .get('/:org', memcacheMiddleware(), (key, { params }, res, next) => {
    request({ ...options, url: `${api}/orgs/${params.org}/repos` }, (err, response, body) => {
      if (err) return next(err);
      if (response.statusCode !== 200) return next(body);
      // @TODO encapsulate in middelware via res.send() monkeypatch
      memcached.set(key, body, 60 * 60, (cacheErr) => {
        if (cacheErr) return next(cacheErr);
        res.send(body);
      });
    });
  })

  .get('/:org/:repo', memcacheMiddleware(), (key, { params, query }, res, next) => {
    request({ ...options, url: `${api}/repos/${params.org}/${params.repo}/issues?state=${query.state || 'open'}` }, (err, response, body) => {
      if (err) return next(err);
      if (response.statusCode !== 200) return next(body);
      memcached.set(key, body, 60 * 60, (cacheErr) => {
        if (cacheErr) return next(cacheErr);
        res.send(body);
      });
    });
  });

export default router;
