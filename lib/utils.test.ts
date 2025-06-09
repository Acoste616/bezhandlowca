import { formatCurrency } from './utils'

describe('formatCurrency', () => {
  it('returns formatted currency for a number', () => {
    const value = 12345
    const expected = new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN',
    }).format(value)
    expect(formatCurrency(value)).toBe(expected)
  })

  it('returns 0 zł for nullish values', () => {
    expect(formatCurrency(0)).toBe('0 zł')
    expect(formatCurrency(null)).toBe('0 zł')
    expect(formatCurrency(undefined)).toBe('0 zł')
  })
})
