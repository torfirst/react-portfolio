export function validateEmail(email) {
  const re = /\w+@\w+\.\w{2,}/;
  return re.test(String(email).toLowerCase());
}
