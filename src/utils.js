/**
 * Suma dos números
 */
function sum(a, b) {
  return a + b;
}

/**
 * Verifica si un número es par
 */
function isEven(num) {
  return num % 2 === 0;
}

/**
 * Valida un email básico
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Capitaliza la primera letra de un string
 */
function capitalize(str) {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export { sum, isEven, isValidEmail, capitalize };

