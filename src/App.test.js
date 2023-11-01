import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Magicians/i);
  expect(linkElement).toBeInTheDocument();
});

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });
});
