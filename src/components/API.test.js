import { render, screen } from '@testing-library/react';
import API from './API';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import App from '../App';
// import APIList from '../views/APIList';

const api = {
  API: 'Axolotl',
  Auth: '',
  Category: 'Animals',
  Cors: 'no',
  Description: 'Collection of axolotl pictures and facts',
  HTTPS: '',
  Link: 'https://theaxolotlapi.netlify.app/',
};

// const server = setupServer(
//   rest.get('https://api.publicapis.org/', (req, res, ctx) => {
//     return res(ctx.json([...api]));
//   })
// );

// // //runs before everything
// beforeAll(() => {
//   server.listen();
// });

// // //runs after everything
// afterAll(() => {
//   server.close();
// });

test('test that API Name renders', async () => {
  render(<API {...api} />);
  expect(await screen.findByText('Name of API: Axolotl')).toBeInTheDocument();
});

test('test that API Auth renders', async () => {
  render(<API {...api} />);
  expect(screen.getByText('Auth:')).toBeInTheDocument();
});

test('test that API Category renders', async () => {
  render(<API {...api} />);
  expect(screen.getByText('Category: Animals')).toBeInTheDocument();
});

test('test that API Cors renders', async () => {
  render(<API {...api} />);
  expect(screen.getByText('CORS: no')).toBeInTheDocument();
});

test('test that API Description renders', async () => {
  render(<API {...api} />);
  expect(
    screen.getByText('Description: Collection of axolotl pictures and facts')
  ).toBeInTheDocument();
});

test('test that API HTTPS renders', async () => {
  render(<API {...api} />);
  expect(screen.getByText('HTTPS:')).toBeInTheDocument();
});

test('test that API Link renders', async () => {
  render(<API {...api} />);
  expect(screen.getByText('Link: Axolotl')).toBeInTheDocument();
});
