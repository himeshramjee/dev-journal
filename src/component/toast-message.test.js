import { render, screen } from '@testing-library/react';
import ToastMessage from './toast-message.js';

test("renders on page", () => {
  render(<ToastMessage />);
  const toastMessageElement = screen.getElementById("newJournalEntryTextArea");
  expect(toastMessageElement).toBeInTheDocument();
});eibccbcgkcuttcrddgrjgkridlkrnghjvcuhrndjutkj
