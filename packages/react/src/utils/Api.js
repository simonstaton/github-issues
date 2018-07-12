import axios from 'axios';

export class Api {
  static get(organisation = 'categories', repo, params = {}) {
    // @TODO - Setup localStorage to cache data on the client
    // @TODO - Swap out axios for native fetch()
    return axios
      .get(`/api/${organisation}/${repo || ''}`, params)
      .then(res => res.data)
      .catch((err) => {
        throw new Error('Error fetching from API', err);
      });
  }
}
