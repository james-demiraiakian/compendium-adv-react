import { render, screen } from '@testing-library/react';
import API from './API';

const api = {
  API: 'Axolotl',
  Auth: '',
  Category: 'Animals',
  Cors: 'no',
  Description: 'Collection of axolotl pictures and facts',
  HTTPS: '',
  Link: 'https://theaxolotlapi.netlify.app/',
};

test('test that 1 api card is displayed', async () => {
  render(<API {...api} />);
  screen.debug();
  // const ax =
  expect(screen.getByText('Name of API: Axolotl')).toBeInTheDocument();
});
