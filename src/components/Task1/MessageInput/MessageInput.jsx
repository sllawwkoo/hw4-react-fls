import styles from "./MessageInput.module.scss";
import { SendHorizonal } from "lucide-react";
function MessageInput({value, onChangeValue, onSubmit}) {
	return (
		<div className={styles.wrapper}>
			<input
				className={styles.input}
				type="text"
				placeholder="Введіть повідомлення..."
				value={value}
				onChange={onChangeValue}
			/>
			<button
				className={styles.button}
				type="submit"
				onClick={onSubmit}
			>
				<SendHorizonal />
			</button>
		</div>
	);
}

export default MessageInput;