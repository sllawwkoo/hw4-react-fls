import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import Game from "./Game/Game";

function Task2() {
	const { title, text } = tasks[1];
	return (
		<>
			<TaskCard
				title={title}
				text={text}
			/>
			<Game/>
		</>
	);
}

export default Task2;
