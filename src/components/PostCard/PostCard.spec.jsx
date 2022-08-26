import React from 'react';
import { render, screen } from '@testing-library/react';
import { PostCard } from './index';

import { postCardPropsMock } from './mock';

describe('Name of the group', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...postCardPropsMock} />);

    expect(screen.getByRole('img', { name: postCardPropsMock.title })).toHaveAttribute('src', postCardPropsMock.cover);
  });

  it('should render heading PostCard ', () => {
    render(<PostCard {...postCardPropsMock} />);

    expect(screen.getByRole('heading', { name: postCardPropsMock.title })).toBeInTheDocument();
  });

  it('should render body PostCard ', () => {
    render(<PostCard {...postCardPropsMock} />);

    expect(screen.getByText(postCardPropsMock.body)).toBeInTheDocument();
  });

  it('should match snapshot ', () => {
    const { container } = render(<PostCard {...postCardPropsMock} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="post"
      >
        <img
          alt="title 1"
          src="img/img.png"
        />
        <div
          class="post-content"
        >
          1
          <h2>
            title 1
          </h2>
          <p>
            body 1
          </p>
        </div>
      </div>
    `);
  });
});
