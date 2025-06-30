import styles from "./MainPage.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { tasks } from "../../data.js";

function MainPage() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className={styles.title}>Домашня робота №4</h1>
				<Tabs className={styles.tasks}>
					<TabList className={styles.tasksList}>
						{tasks.map(({ id, title }) => (
							<Tab
								key={id}
								className={styles.task}
							>
								{title}
							</Tab>
						))}
					</TabList>
					{tasks.map(({ id, Component }) => (
						<TabPanel key={id}>
							<Component />
						</TabPanel>
					))}
				</Tabs>
			</div>
		</div>
	);
}

export default MainPage;
