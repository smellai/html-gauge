import { render, screen } from '@testing-library/react';
import { Gauge } from './gauge/Gauge';

test('renders Gauge with value in the middle', () => {
  render(<Gauge min={0} max={100} current={50} />);
  const positionElement = screen.getByTestId('position-element');
  expect(positionElement).toBeInTheDocument();
  const style = window.getComputedStyle(positionElement);
  expect(style.transform).toBe('rotate(0deg)');
});

test('renders Gauge with value at the beginning', () => {
  render(<Gauge min={0} max={100} current={0} />);
  const positionElement = screen.getByTestId('position-element');
  const style = window.getComputedStyle(positionElement);
  expect(style.transform).toBe('rotate(-120deg)');
});

test('renders Gauge with value at the end', () => {
  render(<Gauge min={0} max={100} current={100} />);
  const positionElement = screen.getByTestId('position-element');
  const style = window.getComputedStyle(positionElement);
  expect(style.transform).toBe('rotate(120deg)');
});

test('renders Gauge with min !== 0', () => {
  render(<Gauge min={50} max={100} current={80} />);
  const positionElement = screen.getByTestId('position-element');
  const style = window.getComputedStyle(positionElement);
  expect(style.transform).toBe('rotate(24deg)');
});

test('renders Gauge with min < 0', () => {
  render(<Gauge min={-50} max={100} current={80} />);
  const positionElement = screen.getByTestId('position-element');
  const style = window.getComputedStyle(positionElement);
  expect(style.transform).toBe('rotate(88deg)');
});

// Error cases

test('min >= max = error', () => {
  render(<Gauge min={500} max={100} current={80} />);
  const errorText = screen.getByText('Error: Max should be greater than Min');
  expect(errorText).toBeInTheDocument();
});

test('out of range', () => {
  render(<Gauge min={0} max={100} current={500} />);
  const errorText = screen.getByText('Error: Current value out of range');
  expect(errorText).toBeInTheDocument();
});
