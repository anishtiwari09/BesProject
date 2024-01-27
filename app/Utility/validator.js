export function emailValidator(text) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(text);
}
export function numberValidator(text) {
  let number = /^\d+$/;
  return number.test(text);
}
