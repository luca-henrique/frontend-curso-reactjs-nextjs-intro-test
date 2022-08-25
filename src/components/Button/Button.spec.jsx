import React from 'react';

import { render, screen } from '@testing-library/react';
import { Button } from './index';

/*

  To solve your issue, you need to add the custom jest matchers from jest-dom by importing "@testing-library/jest-dom/extend-expect" in your test file. 
  expect(...).toBeInTheDocument is not a function
  
*/

import '@testing-library/jest-dom/extend-expect';

describe('<Button />', () => {
  test('should render the button with the text Load more ', () => {
    const { debug } = render(<Button text="Load more" />);
    const button = screen.getByRole('button', { name: /Load more/i });

    debug();

    expect(button).toBeInTheDocument();
  });
});
