import styles from "./MessageItem.module.scss";
import { ThumbsUp, ThumbsDown } from "lucide-react";

function MessageItem({ message, id, like, dislike, onAction }) {
	return (
		<div className={styles.wrapper}>
			<p className={styles.message}>{message}</p>
			<div className={styles.actions}>
				<button
					className={`${styles.button} ${styles.like}`}
					onClick={() => onAction(id, "likes")}
				>
					<ThumbsUp />
					<span className={styles.count}>{like}</span>
				</button>
				<button
					className={`${styles.button} ${styles.dislike}`}
					onClick={() => onAction(id, "dislikes")}
				>
					<ThumbsDown />
					<span className={styles.count}>{dislike}</span>
				</button>
			</div>
		</div>
	);
}

export default MessageItem;
