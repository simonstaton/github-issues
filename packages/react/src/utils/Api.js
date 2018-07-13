import axios from 'axios';

// Abstract caching - nodejs has no access to localStorage so use memcache directly
const store = typeof IS_CLIENT !== 'undefined' ? localStorage : require('@github-issues/cache');

export class Api {
  static get(organisation = 'categories', repo, params = {}) {
    const url = `/api/${organisation}/${repo || ''}`;
    const cached = store.getItem(url);
    if (cached) return new Promise(res => res(JSON.parse(cached)));

    // @TODO - Setup native fetch() and include polyfil for nodejs
    return axios
      .get(url, params)
      .then((res) => {
        store.setItem(url, JSON.stringify(res.data));
        return res.data;
      });
  }
}
