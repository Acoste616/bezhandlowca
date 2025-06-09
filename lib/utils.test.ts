import { describe, it, expect } from 'vitest'
import { formatCurrency, formatDate, formatDateTime, getInitials, slugify } from './utils'

describe('utils', () => {
  it('formatCurrency returns "0 zł" for falsy values', () => {
    expect(formatCurrency(null)).toBe('0 zł')
    expect(formatCurrency(undefined)).toBe('0 zł')
    expect(formatCurrency(0)).toBe('0 zł')
  })

  it('formatCurrency formats numbers to PLN', () => {
    expect(formatCurrency(1234.56)).toBe('1234,56\u00A0zł')
  })

  it('formatDate formats a date string', () => {
    expect(formatDate('2024-01-05')).toBe('5 stycznia 2024')
  })

  it('formatDateTime formats a date and time string', () => {
    expect(formatDateTime('2024-01-05T15:45:00')).toBe('5 sty 2024, 15:45')
  })

  it('getInitials returns the first two initials', () => {
    expect(getInitials('Jan Kowalski')).toBe('JK')
  })

  it('slugify converts text to a slug', () => {
    expect(slugify('Hello World!')).toBe('hello-world')
  })
})
