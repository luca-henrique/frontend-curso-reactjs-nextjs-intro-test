import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { TextInput } from './index';

describe('Name of the group', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();

    const { debug } = render(<TextInput handleChange={fn} searchValue="testando" />);

    const input = screen.getByPlaceholderText(/type your search/i);

    expect(input).toBeInTheDocument();
  });

  it('should have a value', () => {
    const fn = jest.fn();

    render(<TextInput handleChange={fn} searchValue="testando" />);

    const input = screen.getByPlaceholderText(/type your search/i);

    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();

    render(<TextInput handleChange={fn} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    const valueInput = 'o valor';

    userEvent.type(input, valueInput);

    expect(input.value).toBe(valueInput);

    expect(fn).toHaveBeenCalledTimes(valueInput.length);
  });

  it('should match snapshot', () => {
    const { container } = render(<TextInput />);

    expect(container).toMatchSnapshot();
  });
});
