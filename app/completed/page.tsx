"use client";

import Tasks from "../components/Tasks/Tasks";
import { useGlobalState } from "../context/globalProvider";
import { useEffect } from "react";
import { redirect } from "next/navigation";

const Completed = () => {
  const { user, completedTasks } = useGlobalState();

  useEffect(() => {
    if (!user) {
      redirect("/sign-in");
    }
  }, []);

  return <Tasks title="Completed Tasks" tasks={completedTasks} />;
}

export default Completed;