export const onlyNumbersValidate = (
  ev: React.KeyboardEvent<HTMLInputElement>
): void => {
  if (ev.charCode < 48 || ev.charCode > 57) {
    ev.preventDefault();
  }
};
