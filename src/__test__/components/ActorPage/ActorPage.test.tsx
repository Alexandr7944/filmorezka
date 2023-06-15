import React from 'react';
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import ActorPages from '../../../components/ActorPage/ActorPage';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('ActorPages', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      locale: 'en', 
    });
  });

  it('renders without errors', () => {
    render(<ActorPages actorID="1245312" />);
  });

  // Add more tests as needed
});