import { http, HttpResponse } from 'msw';

import homepageData from './sanity/homepage.json';

export const handlers = [
  http.get('/api/user', () => {
    return HttpResponse.json({
      id: '2342432432',
      name: 'Josdfsdfsdhn Doe',
      email: 'john@example.com'
    });
  }),
  http.get(
    `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2023-05-03/data/query/production`,
    async () => {
      return HttpResponse.json({ result: homepageData });
    }
  )
];
