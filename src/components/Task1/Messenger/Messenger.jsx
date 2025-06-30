import styles from "./Messenger.module.scss";
import { useState, useEffect, useRef } from "react";
import { messagesList } from "../dataTask1";
import MessageItem from "../MessageItem/MessageItem";
import MessageInput from "../MessageInput/MessageInput";

function Messenger() {
	const [messages, setMessages] = useState(() => messagesList);
	const [value, setValue] = useState("");
	const messagesEndRef = useRef(null);

	const handleChangeValue = (e) => {
		setValue(e.target.value);
	};

	const addMessage = () => {
		if (!value) return;

		setMessages([
			...messages,
			{
				id: new Date().getTime(),
				text: value,
				likes: 0,
				dislikes: 0,
			},
		]);
		setValue("");
	};

	const handleClickReaction = (id, type) => {
		setMessages(
			messages.map((msg) =>
				msg.id === id
					? {
							...msg,
							[type]: (msg[type] || 0) + 1,
					  }
					: msg
			)
		);
	};

	const scrollToBottom = () => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.messages}>
					{messages.map(({ id, text, likes, dislikes }) => (
						<MessageItem
							key={id}
							message={text}
							id={id}
							like={likes}
							dislike={dislikes}
							onAction={handleClickReaction}
						/>
					))}
					<div ref={messagesEndRef} />
				</div>
				<MessageInput
					value={value}
					onChangeValue={handleChangeValue}
					onSubmit={addMessage}
				/>
			</div>
		</div>
	);
}

export default Messenger;
