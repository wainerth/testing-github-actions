import { sum, isEven, isValidEmail, capitalize } from '../../src/utils.js';

describe('Utils - Pruebas Unitarias', () => {
  
  describe('sum', () => {
    test('debe sumar dos números positivos correctamente', () => {
      expect(sum(2, 3)).toBe(5);
    });

    test('debe sumar números negativos', () => {
      expect(sum(-1, -2)).toBe(-3);
    });

    test('debe sumar cero correctamente', () => {
      expect(sum(5, 0)).toBe(5);
    });
  });

  describe('isEven', () => {
    test('debe retornar true para números pares', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(4)).toBe(true);
      expect(isEven(0)).toBe(true);
    });

    test('debe retornar false para números impares', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(3)).toBe(false);
      expect(isEven(-1)).toBe(false);
    });
  });

  describe('isValidEmail', () => {
    test('debe validar emails correctos', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co')).toBe(true);
    });

    test('debe rechazar emails inválidos', () => {
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });
  });

  describe('capitalize', () => {
    test('debe capitalizar la primera letra', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
    });

    test('debe manejar strings ya capitalizados', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });

    test('debe manejar strings vacíos o inválidos', () => {
      expect(capitalize('')).toBe('');
      expect(capitalize(null)).toBe('');
      expect(capitalize(undefined)).toBe('');
    });
  });
});
