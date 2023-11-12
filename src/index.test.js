import { myFunction } from './index';

describe('myFunction', () => {
  it('should return true when input is positive', () => {
    expect(myFunction(1)).toBe(true);
  });

  it('should return false when input is negative', () => {
    expect(myFunction(-1)).toBe(false);
  });
});