import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppFunctional from './AppFunctional';


test('sanity', () => {
  expect(true).toBe(true)
});

test('renders without errors', () => {
  render(<AppFunctional />);
});

test('renders initial message', () => {
  render(<AppFunctional />);
  const message = screen.getByText(/coordinates/i);
  expect(message).toBeInTheDocument();
});

test('renders initial steps', () => {
  render(<AppFunctional />);
  const steps = screen.getByText(/time/i);
  expect(steps).toBeInTheDocument();
});

test('typing in email input updates its value', () => {
  render(<AppFunctional />);
  const emailInput = screen.getByPlaceholderText(/type email/i);
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  expect(emailInput.value).toBe('test@example.com');
});