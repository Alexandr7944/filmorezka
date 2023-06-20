import React from 'react';
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import NoFilms from '../../../components/ActorPage/NoFilms';
import { Provider } from 'react-redux';
import store from '@/store';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('NoFilms', () => {
  it('renders without errors', () => {
    render(<Provider store={store}><NoFilms /></Provider>);
  });

  it('displays the correct text', () => {
    const { getByText } = render(<Provider store={store}><NoFilms /></Provider>);
    expect(getByText("Нам жаль, но эти данные в базу не добавлены")).toBeInTheDocument();
  });
});