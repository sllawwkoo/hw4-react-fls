export function generateThreeDigitNumber() {
	const digits = new Set();
	while (digits.size < 3) {
		const rand = Math.floor(Math.random() * 10);
		if (digits.size === 0 && rand === 0) continue; // перша цифра не може бути 0
		digits.add(rand);
	}
	return Array.from(digits);
}
