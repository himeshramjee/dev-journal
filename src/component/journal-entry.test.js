import { render, screen } from '@testing-library/react';
import JournalEntry from './journal-entry';

test("renders a text area", () => {
  render(<JournalEntry />);
  const textAreaElement = screen.getElementById("newJournalEntryTextArea");
  expect(textAreaElement).toBeInTheDocument();
});

test("renders 'Write a journal entry...' placeholder in text area", () => {
  render(<JournalEntry />);
  const textAreaPlaceholderElement = screen.getByText(/Write a journal entry.../i);
  expect(textAreaPlaceholderElement).toBeInTheDocument();
});

test("disables submit button if no input", () => {
  render(<JournalEntry />);
  const submitButtonElement = screen.getElementById("newJournalEntrySubmit");
  expect(submitButtonElement).toBeInTheDocument();
  expect(submitButtonElement).toHaveAttribute("disabled");
  expect(submitButtonElement).not.not.toBeDisabled();
});