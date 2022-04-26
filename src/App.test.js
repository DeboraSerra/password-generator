import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import renderWithRedux from './renderWithRedux';

describe('tests the password generator application', () => {
  it('tests if there is an input field that can\' be changed', () => {
    renderWithRedux(<App />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'test');
    expect(input).not.toHaveTextContent('test');
  });
  it('tests if there is a range to chose a length', () => {
    renderWithRedux(<App />);
    const lengthRange = screen.getByRole('slider');
    expect(lengthRange).toBeInTheDocument();
    expect(lengthRange).toHaveValue('8');
    fireEvent.change(lengthRange, { target: { value: '12' } });
    expect(lengthRange).toHaveValue('12');
  });
  it('tests the switch to include uppercase', () => {
    renderWithRedux(<App />);
    const upperSwitch = screen.getByLabelText(/include uppercase/i);
    expect(upperSwitch).toBeInTheDocument();
    expect(upperSwitch).not.toBeChecked();
    userEvent.click(upperSwitch);
    expect(upperSwitch).toBeChecked();
  });
  it('tests the switch to include lowercase', () => {
    renderWithRedux(<App />);
    const lowerSwitch = screen.getByLabelText(/include lowercase/i);
    expect(lowerSwitch).toBeInTheDocument();
    expect(lowerSwitch).toBeChecked();
    userEvent.click(lowerSwitch);
    expect(lowerSwitch).not.toBeChecked();
  });
  it('tests the switch to include numbers', () => {
    renderWithRedux(<App />);
    const numberSwitch = screen.getByLabelText(/include numbers/i);
    expect(numberSwitch).toBeInTheDocument();
    expect(numberSwitch).not.toBeChecked();
    userEvent.click(numberSwitch);
    expect(numberSwitch).toBeChecked();
  });
  it('tests the switch to include symbols', () => {
    renderWithRedux(<App />);
    const symbolSwitch = screen.getByLabelText(/include symbols/i);
    expect(symbolSwitch).toBeInTheDocument();
    expect(symbolSwitch).not.toBeChecked();
    userEvent.click(symbolSwitch);
    expect(symbolSwitch).toBeChecked();
  });
  it('tests if the password is generated', () => {
    renderWithRedux(<App />);
    const input = screen.getByRole('textbox');
    const lengthRange = screen.getByRole('slider');
    const upperSwitch = screen.getByLabelText(/include uppercase/i);
    const lowerSwitch = screen.getByLabelText(/include lowercase/i);
    const numberSwitch = screen.getByLabelText(/include numbers/i);
    const symbolSwitch = screen.getByLabelText(/include symbols/i);
    const generateBtn = screen.getByRole('button');
    const defaultLength = 8;
    userEvent.click(generateBtn);
    expect(input.value).toMatch(/[a-z]{1,}/);
    expect(input.value).not.toMatch(/[A-Z]{1,}/);
    expect(input.value).not.toMatch(/[0-9]{1,}/);
    expect(input.value).not.toMatch(/\W{1,}/);
    expect(input.value).toHaveLength(defaultLength);
    fireEvent.change(lengthRange, { target: { value: '12' } });
    const inputLength = 12;
    userEvent.click(upperSwitch);
    userEvent.click(lowerSwitch);
    userEvent.click(numberSwitch);
    userEvent.click(symbolSwitch);
    userEvent.click(generateBtn);
    expect(input.value).not.toMatch(/[a-z]{1,}/);
    expect(input.value).toMatch(/[A-Z]{1,}/);
    expect(input.value).toMatch(/[0-9]{1,}/);
    expect(input.value).toMatch(/\W{1,}/);
    expect(input.value).toHaveLength(inputLength);
  });
});
