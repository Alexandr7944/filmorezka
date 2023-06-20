import { render, screen } from '@testing-library/react';
import Footer from '../../../components/Footer/Footer';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from '@/store';
jest.mock("next/router", () => ({
    useRouter: jest.fn(),
  }));
 
it('renders Footer component', () => {
  render(<Provider store={store}><Footer /></Provider>);

  
  // check icons
  const envelopeIcon = screen.getByTestId('envelope-icon');
  expect(envelopeIcon).toBeInTheDocument();

  const phoneIcon = screen.getByTestId('phone-icon');
  expect(phoneIcon).toBeInTheDocument();
// have attribute
  const writeButton = screen.getByText("ask.ivi.ru");
  expect(writeButton).toHaveAttribute('href', 'https://ask.ivi.ru/');
});