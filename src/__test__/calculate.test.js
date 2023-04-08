import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('calculate', () => {
  it('resets the calculator when AC button is pressed', () => {
    const result = calculate({ total: 10, next: 5, operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('adds numbers correctly', () => {
    const result = calculate({ total: 10, next: 5, operation: '+' }, '=');
    expect(result).toEqual({ total: '15', next: null, operation: null });
  });

  it('subtracts numbers correctly', () => {
    const result = calculate({ total: 10, next: 5, operation: '-' }, '=');
    expect(result).toEqual({ total: '5', next: null, operation: null });
  });

  it('multiplies numbers correctly', () => {
    const result = calculate({ total: 10, next: 5, operation: 'x' }, '=');
    expect(result).toEqual({ total: '50', next: null, operation: null });
  });

  it('divides numbers correctly', () => {
    const result = calculate({ total: 10, next: 5, operation: '÷' }, '=');
    expect(result).toEqual({ total: '2', next: null, operation: null });
  });

  it('handles decimal point correctly', () => {
    const result = calculate({ total: null, next: '10', operation: null }, '.');
    expect(result).toEqual({ total: null, next: '10.', operation: null });
  });

  it('changes the sign correctly', () => {
    const result = calculate({ total: null, next: '10', operation: null }, '+/-');
    expect(result).toEqual({ total: null, next: '-10', operation: null });
  });
});

describe('operate', () => {
  it('adds numbers correctly', () => {
    const result = operate('10', '5', '+');
    expect(result).toEqual('15');
  });

  it('subtracts numbers correctly', () => {
    const result = operate('10', '5', '-');
    expect(result).toEqual('5');
  });

  it('multiplies numbers correctly', () => {
    const result = operate('10', '5', 'x');
    expect(result).toEqual('50');
  });

  it('divides numbers correctly', () => {
    const result = operate('10', '5', '÷');
    expect(result).toEqual('2');
  });
});
