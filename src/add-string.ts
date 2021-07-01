function addStrings(num1: string, num2: string): string {
  const maxLength = Math.max(num1.length, num2.length);
  num1 = num1.padStart(maxLength, '0');
  num2 = num2.padStart(maxLength, '0');

  let result = '';
  let carry = 0;

  for (let i = maxLength - 1; i >= 0; i--) {
    const sum = Number(num1[i]) + Number(num2[i]) + carry;
    carry = sum > 9 ? 1 : 0;
    result = (sum % 10) + result;
  }

  return (carry || '') + result;
};
