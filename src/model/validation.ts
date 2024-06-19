export function isValidationForm(value: string): boolean {
  if (value.length !== 0 && value.trim() !== "") {
    return true;
  }
  return false;
}
