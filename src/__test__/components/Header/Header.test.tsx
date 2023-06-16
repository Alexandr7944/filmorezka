import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Header } from '@/components';
import { useRouter } from 'next/router';
import { selectGenres, selectUser } from '@/store/selectors';

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
jest.mock('../../../store/selectors.ts', () => ({
  selectUser: jest.fn(),
  selectGenres: jest.fn()
}));

describe('Header', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({});
    (selectUser as jest.Mock).mockReturnValue({isAuth: false});
    (selectGenres as jest.Mock).mockReturnValue({genres: []});
  });

  it('should renders without errors', () => {
    render(<Header/>);
  });

  it('should renders SearchModal without errors', () => {
    const { getByTestId } = render(<Header/>);
    const button = getByTestId('searchModal');
    fireEvent.click(button);
    const modal = getByTestId('search');
    expect(modal).toBeInTheDocument();
  });
});