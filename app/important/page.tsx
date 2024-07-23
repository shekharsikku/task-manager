"use client"

import { useGlobalState } from "../context/globalProvider";
import Tasks from "../components/Tasks/Tasks";
import { useEffect } from "react";
import { redirect } from "next/navigation";

const Important = () => {
  const { user, importantTasks } = useGlobalState();

  useEffect(() => {
    if (!user) {
      redirect("/sign-in");
    }
  }, []);

  return <Tasks title="Important Tasks" tasks={importantTasks} />;
}

export default Important;