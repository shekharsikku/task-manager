"use client"
import { useGlobalState } from "../context/globalProvider";
import Tasks from "../components/Tasks/Tasks";

const Important = () => {
    const { importantTasks } = useGlobalState();
    return <Tasks title="Important Tasks" tasks={importantTasks} />;
}

export default Important;