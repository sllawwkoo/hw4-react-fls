import styles from "./SecretNumber.module.scss";
function SecretNumber({ digits }) {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Число:</h2>
			<div className={styles.digits}>
				{digits.map((digit, idx) => (
					<span
						key={idx}
						className={styles.digit}
					>
						{digit !== null ? digit : "_"}
					</span>
				))}
			</div>
		</div>
	);
}

export default SecretNumber;