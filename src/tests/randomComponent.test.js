import React, { } from 'react';
import { render, fireEvent } from '@testing-library/react';

import Provider from '../context';
import {
  RandomComponent,
} from '../components';

// jest.mock('../context', () => {
//   return {
//     ...jest.requireActual('./context');
//     Provider: ({ children }) => <div></div>
//   };
// });

describe('renderApp', () => {
  test('control new context', () => {
    const { getByDisplayValue, getByTestId } = render(<Provider><RandomComponent /></Provider>);

    expect(getByDisplayValue(0)).toBeInTheDocument();
    expect(getByDisplayValue("text")).toBeInTheDocument();

    fireEvent.click(getByTestId("number-input"), { target: { value: 16 } });
    fireEvent.click(getByTestId("text-input"), { target: { value: "batata quente" } });

    expect(getByDisplayValue(16)).toBeInTheDocument();
    expect(getByDisplayValue("batata quente")).toBeInTheDocument();
  });
});
