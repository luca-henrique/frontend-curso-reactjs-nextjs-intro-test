import React from 'react';
import { render, screen } from '@testing-library/react';
import { Posts } from './index';

const mock = {
  posts: [
    {
      title: 'title 1',
      body: 'body 1',
      id: 1,
      cover: 'img/img.png',
    },
    {
      title: 'title 2',
      body: 'body 2',
      id: 2,
      cover: 'img/img.png',
    },
    {
      title: 'title 3',
      body: 'body 3',
      id: 3,
      cover: 'img/img.png',
    },
  ],
};

describe('Name of the group', () => {
  test('should render posts heading', () => {
    render(<Posts {...mock} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
  });

  test('should render posts img', () => {
    render(<Posts {...mock} />);

    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
  });

  test('should render posts body', () => {
    render(<Posts {...mock} />);

    expect(screen.getAllByText(/body/i)).toHaveLength(3);
  });

  test('should match snapshot', () => {
    const { container } = render(<Posts />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
