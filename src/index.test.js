import React from 'react';
import { cleanup, render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import Component from './Component';

jest.mock('axios');

afterEach(cleanup);

describe('useFetch', () => {
  test('component renders loading when fetching', () => {
    const { getByText } = render(<Component />);
    expect(getByText('Loading').toBeInTheDocument);
  });

  test('component renders error when fetch errors', async () => {
    axios.mockResolvedValue();
    const { getByText } = render(<Component />);
    const element = await waitForElement(() => getByText('Error'));
    expect(element.toBeInTheDocument);
  });

  test('component renders Hello World when fetch succeeds', async () => {
    axios.mockResolvedValue({ data: {} });
    const { getByText } = render(<Component />);
    const element = await waitForElement(() => getByText('Hello World'));
    expect(element.toBeInTheDocument);
  });
});
