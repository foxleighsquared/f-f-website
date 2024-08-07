import { http, HttpResponse, passthrough } from 'msw';

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
    'https://tcnivow2.api.sanity.io/v2023-05-03/data/query/production',
    async () => {
      return HttpResponse.json({ result: homepageData });
    }
  ),
  // Add a pass-through handler for Google Maps API
  http.get('https://maps.googleapis.com/*', async () => {
    return passthrough();
  })
];
