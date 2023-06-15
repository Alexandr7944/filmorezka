import React from 'react';
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import NoFilms from '../../../components/ActorPage/NoFilms';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('NoFilms', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      locale: 'ru', // Here you can change the locale value
      locales: ['en', 'ru'],
    });
  });

  it('renders without errors', () => {
    render(<NoFilms />);
  });

  it('displays the correct text', () => {
    const { getByText } = render(<NoFilms />);
    expect(getByText("Нам жаль, но эти данные в базу не добавлены")).toBeInTheDocument();
  });
});