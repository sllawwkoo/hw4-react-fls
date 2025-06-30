import styles from "./Player.module.scss";
import { useState } from "react";

function Player({
	name,
	isActive,
	guessedDigits,
	onGuess,
	hasLost,
	usedDigits,
	message,
	setMessage,
}) {
	const [input, setInput] = useState("");

	const handleClickButton = () => {
		const digit = parseInt(input);
		if (!isNaN(digit) && digit >= 0 && digit <= 9) {
			if (usedDigits.includes(digit)) {
				setMessage(`Число ${digit} вже вводилося`);
			} else {
				onGuess(digit);
				setMessage("");
			}
			setInput("");
		}
	};

	const handleClickChange = (e) => {
		setInput(e.target.value);
		if (message) setMessage("");
	};

	return (
		<div className={`${styles.player} ${isActive ? styles.active : ""}`}>
			<h3 className={styles.name}>{name}</h3>
			<div className={styles.guessedBlock}>
				<span>Вгадав: </span>
				{guessedDigits.map((digit, idx) => (
					<span key={idx}>{digit !== null ? digit : "_"}</span>
				))}
				</div>
			{hasLost && <p className={styles.lose}>Програв!</p>}
			{!hasLost && (
				<div className={styles.inputBlock}>
					<input
						className={styles.input}
						type="number"
						value={input}
						onChange={handleClickChange}
						min={0}
						max={9}
						disabled={!isActive}
					/>
					<button
						className={styles.button}
						onClick={handleClickButton}
						disabled={!isActive || input === ""}
					>
						Зробити хід
					</button>
				</div>
			)}
			{message && isActive && <div className={styles.message}>{message}</div>}
		</div>
	);
}

export default Player;
