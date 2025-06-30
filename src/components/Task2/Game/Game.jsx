import styles from "./Game.module.scss";
import { useState, useEffect, useRef } from "react";
import { generateThreeDigitNumber } from "../utils";
import SecretNumber from "../SecretNumber/SecretNumber";
import Player from "../Player/Player";

function Game() {
	const secretRef = useRef(generateThreeDigitNumber());
	const [revealedDigits, setRevealedDigits] = useState([null, null, null]);
	const [usedDigits, setUsedDigits] = useState([]);
	const [player1Guesses, setPlayer1Guesses] = useState([null, null, null]);
	const [player2Guesses, setPlayer2Guesses] = useState([null, null, null]);
	const [activePlayer, setActivePlayer] = useState(1);
	const [message, setMessage] = useState("");
	const [loser, setLoser] = useState(null);

	// const handleClickGuess = (digit) => {
	// 	if (loser !== null || usedDigits.includes(digit)) return;

	// 	const secret = secretRef.current;
	// 	const newRevealed = [...revealedDigits];
	// 	const isPlayer1 = activePlayer === 1;
	// 	const currentGuesses = isPlayer1
	// 		? [...player1Guesses]
	// 		: [...player2Guesses];
	// 	const otherGuesses = isPlayer1 ? player2Guesses : player1Guesses;

	// 	let matched = false;

	// 	for (let i = 0; i < secret.length; i++) {
	// 		// Якщо це входження ще не відкрито
	// 		if (secret[i] === digit && newRevealed[i] === null) {
	// 			// Але інший гравець не відкрив це місце
	// 			if (otherGuesses[i] !== digit) {
	// 				newRevealed[i] = digit;
	// 				currentGuesses[i] = digit;
	// 				matched = true;
	// 				break; // ✅ відкрили тільки перше входження
	// 			}
	// 		}
	// 	}

	// 	if (!matched && secret.includes(digit)) return; // було, але відкрито іншим

	// 	// Оновлюємо стани
	// 	setRevealedDigits(newRevealed);
	// 	if (isPlayer1) {
	// 		setPlayer1Guesses(currentGuesses);
	// 	} else {
	// 		setPlayer2Guesses(currentGuesses);
	// 	}

	// 	if (matched) {
	// 		setUsedDigits([]); // обнуляємо тільки якщо вдало
	// 		if (newRevealed.every((n) => n !== null)) {
	// 			setLoser(activePlayer);
	// 			return;
	// 		}
	// 	} else {
	// 		setUsedDigits((prev) => [...prev, digit]);
	// 	}

	// 	setActivePlayer(isPlayer1 ? 2 : 1);
	// };


	const handleClickGuess = (digit) => {
		if (loser !== null || usedDigits.includes(digit)) return;

		const secret = secretRef.current;
		const newRevealed = [...revealedDigits];
		const isPlayer1 = activePlayer === 1;
		let matched = false;

		// Відкриваємо всі входження цифри
		for (let i = 0; i < secret.length; i++) {
			if (secret[i] === digit) {
				newRevealed[i] = digit;
				matched = true;
			}
		}

		setRevealedDigits(newRevealed);

		// Якщо була вгадана — додаємо в список вгаданих гравця
		if (matched) {
			const updatedGuesses = isPlayer1
				? [...player1Guesses]
				: [...player2Guesses];
			for (let i = 0; i < secret.length; i++) {
				if (secret[i] === digit) {
					updatedGuesses[i] = digit;
				}
			}
			if (isPlayer1) {
				setPlayer1Guesses(updatedGuesses);
			} else {
				setPlayer2Guesses(updatedGuesses);
			}
		}
		

		// Додаємо до списку використаних у будь-якому випадку
		setUsedDigits((prev) => [...prev, digit]);

		// Перевірка на завершення гри
		if (matched && newRevealed.every((n) => n !== null)) {
			setLoser(activePlayer);
			return;
		}

		// Перемикання гравця
		setActivePlayer(isPlayer1 ? 2 : 1);
	};


	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.game}>
					<h1 className={styles.title}>Гра "Вгадай Число"</h1>
					<SecretNumber digits={revealedDigits} />
					<div className={styles.players}>
						<Player
							name="Гравець 1"
							isActive={activePlayer === 1}
							guessedDigits={player1Guesses}
							onGuess={handleClickGuess}
							hasLost={loser === 1}
							usedDigits={usedDigits}
							message={message}
							setMessage={setMessage}
						/>
						<Player
							name="Гравець 2"
							isActive={activePlayer === 2}
							guessedDigits={player2Guesses}
							onGuess={handleClickGuess}
							hasLost={loser === 2}
							usedDigits={usedDigits}
							message={message}
							setMessage={setMessage}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Game;
