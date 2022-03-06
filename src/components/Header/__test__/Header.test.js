import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('should render same text passed into title prop', async () => {
    render(<Header title='My Header' />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
});

// it('by role', async () => {
//   render(<Header title='My Header' />);
//   const headingElement = screen.getByRole('heading', { name: 'My Header' });
//   expect(headingElement).toBeInTheDocument();
// });

// it('gets by title', async () => {
//   render(<Header title='My Header' />);
//   const headingElement = screen.getByTitle('Header');
//   expect(headingElement).toBeInTheDocument();
// });

// it('gets by id', async () => {
//   render(<Header title='My Header' />);
//   const headingElement = screen.getByTestId('header-1');
//   expect(headingElement).toBeInTheDocument();
// });

// // FIND BY

// it('find by', async () => {
//   render(<Header title='My Header' />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// // QueryBy

// it('get by', async () => {
//   render(<Header title='My Header' />);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// it('get all by', async () => {
//   render(<Header title='My Header' />);
//   const headingElements = screen.getAllByRole('heading');
//   expect(headingElements.length).toBe(2);
// });
