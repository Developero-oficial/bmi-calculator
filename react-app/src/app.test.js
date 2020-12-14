import React from 'react'
import {screen, render, fireEvent} from '@testing-library/react'

import App from './App'

beforeEach(() => render(<App />))

test('calculator UI', () => {
  expect(screen.queryByLabelText('Height (KG)')).toBeInTheDocument()
  expect(screen.queryByLabelText('Weight (M)')).toBeInTheDocument()
  expect(screen.queryByRole('button', {name: 'Send'})).toBeInTheDocument()
})

test('calculator Thinness result', () => {
  const heightInput = screen.queryByLabelText('Height (KG)')
  const weightInput = screen.queryByLabelText('Weight (M)')
  const submitBtn = screen.queryByRole('button', {name: 'Send'})

  heightInput.value = '1.7'
  weightInput.value = '50'

  fireEvent.click(submitBtn)

  expect(screen.queryByText('Result: 17.301')).toBeInTheDocument()
  expect(screen.queryByText('Estimation: Thinness')).toBeInTheDocument()
})

test('calculator Normal result', () => {
  const heightInput = screen.queryByLabelText('Height (KG)')
  const weightInput = screen.queryByLabelText('Weight (M)')
  const submitBtn = screen.queryByRole('button', {name: 'Send'})

  heightInput.value = '1.7'
  weightInput.value = '60'

  fireEvent.click(submitBtn)

  expect(screen.queryByText('Result: 20.761')).toBeInTheDocument()
  expect(screen.queryByText('Estimation: Normal')).toBeInTheDocument()
})

test('calculator Overweight result', () => {
  const heightInput = screen.queryByLabelText('Height (KG)')
  const weightInput = screen.queryByLabelText('Weight (M)')
  const submitBtn = screen.queryByRole('button', {name: 'Send'})

  heightInput.value = '1.7'
  weightInput.value = '80'

  fireEvent.click(submitBtn)

  expect(screen.queryByText('Result: 27.682')).toBeInTheDocument()
  expect(screen.queryByText('Estimation: Overweight')).toBeInTheDocument()
})

test('calculator Obese result', () => {
  const heightInput = screen.queryByLabelText('Height (KG)')
  const weightInput = screen.queryByLabelText('Weight (M)')
  const submitBtn = screen.queryByRole('button', {name: 'Send'})

  heightInput.value = '1.7'
  weightInput.value = '100'

  fireEvent.click(submitBtn)

  expect(screen.queryByText('Result: 34.602')).toBeInTheDocument()
  expect(screen.queryByText('Estimation: Obese')).toBeInTheDocument()
})
