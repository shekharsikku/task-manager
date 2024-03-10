"use client"
import Tasks from "../components/Tasks/Tasks";
import { useGlobalState } from "../context/globalProvider";

const Completed = () => {
    const { completedTasks } = useGlobalState();
    return <Tasks title="Completed Tasks" tasks={completedTasks} />;
}

export default Completed;