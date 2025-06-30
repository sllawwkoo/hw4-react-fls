import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import Messenger from "./Messenger/Messenger";

function Task1() {
	const { title, text } = tasks[0];
	return (
		<>
			<TaskCard
				title={title}
				text={text}
			/>
			< Messenger/>
		</>
	);
}

export default Task1;
