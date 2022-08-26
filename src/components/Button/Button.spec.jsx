import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './index';

/*

  To solve your issue, you need to add the custom jest matchers from jest-dom by importing "@testing-library/jest-dom/extend-expect" in your test file. 
  expect(...).toBeInTheDocument is not a function
  
*/

import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  test('should render the button with the text Load more ', () => {
    render(<Button text="Load more" />);
    const button = screen.getByRole('button', { name: /Load more/i });

    expect(button).toBeInTheDocument();
  });

  test('should call function button click ', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /Load more/i });

    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('should be disabled when disabled is true ', () => {
    render(<Button text="Load more" disabled={true} />);

    const button = screen.getByRole('button', { name: /Load more/i });

    expect(button).toBeDisabled();
  });

  test('should be enable when disabled is false ', () => {
    render(<Button text="Load more" disabled={false} />);

    const button = screen.getByRole('button', { name: /Load more/i });

    expect(button).toBeEnabled();
  });
});
