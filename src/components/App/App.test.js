import { render, screen } from '@testing-library/react';
import App from './App';

// test if element exists
test('renders Hello World', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello World/i);
  expect(textElement).toBeInTheDocument();
});

// bolean test
describe('true is truthy and false is falsy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true);
  });
 
  test('false is falsy', () => {
    expect(false).toBe(false);
  });
});

test('3 is 3', () => {
  expect(3).toBe(3);
});

test('text is text', () => {
  expect('text').toBe('text');
});

test('text not is tekst', () => {
  expect('text').not.toBe('tekst')
});