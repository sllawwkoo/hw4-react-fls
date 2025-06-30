import styles from "./TaskCard.module.scss";

function TaskCard({ title, text }) {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.text}>{text}</p>
		</div>
	);
}

export default TaskCard;
