import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ChatLogin from '@/components/ChatLogin/ChatLogin';
import { GoogleOAuthProvider } from '@react-oauth/google';

describe('ChatLogin', () => {
  const dispatch = jest.fn();

  it('should renders without errors', () => {
    render(
      <GoogleOAuthProvider clientId={""}>
        <ChatLogin dispatch={dispatch}/> 
      </GoogleOAuthProvider>,
    );
  });

  it('an error should appear on the email', () => {
    const {getByTestId} = render(
      <GoogleOAuthProvider clientId={""}>
        <ChatLogin dispatch={dispatch}/> 
      </GoogleOAuthProvider>,
    );
    
    const emailInput = getByTestId('emailInput');
    fireEvent.change(emailInput, { target: { value: 'test' } });
    const button = getByTestId('sendEmail');
    fireEvent.click(button);

    const error = getByTestId('error');
    expect(error).toBeInTheDocument();
  })
});