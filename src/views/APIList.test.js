import { render, screen } from '@testing-library/react';
import APIList from './APIList';

//test dropdown displays
test('test for dropdown display', async () => {
  render(<APIList />);

  const dropdown = await screen.findByRole('combobox');
  expect(dropdown).toBeInTheDocument();
});

//test for category options exist
// test('test for dropdown display', async () => {
//   render(<APIList />);

//   const option = await screen.findByRole('menuitem', { name: /all/i });
//   expect(option).toBeInTheDocument();
// });

//test category select changes cards rendered
// test('test for category behavior', async () => {
//   render(<APIList />);

//   const category = await screen.findByRole('combobox', { name: /books/i });
//   userEvent.selectOptions(category);
//   expect(screen.getByRole('menuitem', { name: 'books' }).selected).toBe(true);
// });

//test api tiles render
