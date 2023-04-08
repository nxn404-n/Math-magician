import operate from '../logic/operate';

describe('operate function', () => {
  it('adds two numbers correctly', () => {
    expect(operate('10', '5', '+')).toBe('15');
  });

  it('subtracts two numbers correctly', () => {
    expect(operate('10', '5', '-')).toBe('5');
  });

  it('multiplies two numbers correctly', () => {
    expect(operate('10', '5', 'x')).toBe('50');
  });

  it('divides two numbers correctly', () => {
    expect(operate('10', '5', '÷')).toBe('2');
  });

  it('returns an error message when dividing by zero', () => {
    expect(operate('10', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('returns the modulo of two numbers correctly', () => {
    expect(operate('10', '3', '%')).toBe('1');
  });

  it('returns an error message when finding modulo by zero', () => {
    expect(operate('10', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('throws an error when given an unknown operation', () => {
    expect(() => operate('10', '5', '&')).toThrow("Unknown operation '&'");
  });
});
