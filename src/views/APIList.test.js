import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import APIList from './APIList';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

//Mock Service Worker setup
//'rest' is the api endpoint we want to hit
//'rest' takes in api endpoint and callback function
// set up 'mock' server response

const api = [
  {
    API: 'Axolotl',
    Auth: '',
    Category: 'Animals',
    Cors: 'no',
    Description: 'Collection of axolotl pictures and facts',
    HTTPS: '',
    Link: 'https://theaxolotlapi.netlify.app/',
  },
  {
    API: 'Penguin Publishing',
    Description: 'Books, book covers and related data',
    Auth: '',
    HTTPS: true,
    Cors: 'yes',
    Link: 'http://www.penguinrandomhouse.biz/webservices/rest/',
    Category: 'Books',
  },
];

const categories = ['Animals', 'Books'];

const server = setupServer(
  rest.get('https://api.publicapis.org/entries', (req, res, ctx) => {
    // const select = req.url.searchParams.get('')

    return res(ctx.json({ entries: api }));
  }),
  rest.get('https://api.publicapis.org/categories', (req, res, ctx) => {
    return res(ctx.json(categories));
  })
);

// //runs before everything
beforeAll(() => {
  server.listen();
});

// //runs after everything
afterAll(() => {
  server.close();
});

test('That the mock server is intercepting requests', async () => {
  render(<APIList />);
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  const heading = await screen.findAllByRole('heading');
  expect(heading).toHaveLength(2);
});

//test dropdown displays
test('test for dropdown display', async () => {
  render(<APIList />);

  const dropdown = await screen.findByRole('combobox');
  expect(dropdown).toBeInTheDocument();
});

//test for category options exist
test('test for dropdown display', async () => {
  render(<APIList />);

  const option = await screen.findByRole('option', { name: /all/i });
  expect(option).toBeInTheDocument();
});

//test category select changes cards rendered
test('test for category behavior', async () => {
  render(<APIList />);

  const category = await screen.findByRole('combobox');
  userEvent.selectOptions(category, 'Books');
  expect(screen.getByRole('option', { name: 'Books' }).selected).toBe(true);
});
