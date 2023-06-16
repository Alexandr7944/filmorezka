import { render, screen } from '@testing-library/react';
import Footer from '../../../components/Footer/Footer';
import { useRouter } from 'next/router';
jest.mock("next/router", () => ({
    useRouter: jest.fn(),
  }));
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      locale: "en",
    });
  });
it('renders Footer component', () => {
  render(<Footer />);

  
  const sectionElement = screen.getByText(/section/i);
  expect(sectionElement).toBeInTheDocument();
  // check icons
  const envelopeIcon = screen.getByTestId('envelope-icon');
  expect(envelopeIcon).toBeInTheDocument();

  const phoneIcon = screen.getByTestId('phone-icon');
  expect(phoneIcon).toBeInTheDocument();
// have attribute
  const writeButton = screen.getByText("ask.ivi.ru");
  expect(writeButton).toHaveAttribute('href', 'https://ask.ivi.ru/');
});