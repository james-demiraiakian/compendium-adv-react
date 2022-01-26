import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import APIList from './APIList';

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

//test api tiles render
