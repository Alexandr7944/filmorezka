import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import { selectUser } from '@/store/selectors';
import store from '@/store';
import { Provider, useDispatch } from 'react-redux';
import User from '@/components/Header/DropDown/User/User';
import fetchMock from 'jest-fetch-mock';

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
jest.mock('../../../store/selectors.ts', () => ({
  selectUser: jest.fn(),
}));
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('DropDown.User', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({});
    (useDispatch as jest.Mock).mockReturnValue(dispatch);
    fetchMock.resetMocks();
  });

  it('should renders without errors', () => {
    (selectUser as jest.Mock).mockReturnValue({isAuth: false});
    render(<User content={{links : []}}/>);
  });

  it('should logout without errors', () => {
    (selectUser as jest.Mock).mockReturnValue({isAuth: true});
    const { getByTestId  } = render(<User content={{links : []}}/>);
    const button = getByTestId('get_out');
    fireEvent.click(button);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should renders ChatLogin without errors', () => {
    (selectUser as jest.Mock).mockReturnValue({isAuth: false});
    const { getByTestId, queryByTestId  } = render(<User content={{links : []}}/>);
    const button = getByTestId('authorization');
    fireEvent.click(button);
    const modal = queryByTestId('chatLogin');
    expect(modal).toBeInTheDocument();
  });
});