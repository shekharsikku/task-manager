"use client"

import Tasks from "../components/Tasks/Tasks";
import { useGlobalState } from "../context/globalProvider";
import { useEffect } from "react";
import { redirect } from "next/navigation";

const InComplete = () => {
  const { user, incompleteTasks } = useGlobalState();

  useEffect(() => {
    if (!user) {
      redirect("/sign-in");
    }
  }, []);

  return <Tasks title="Incomplete Tasks" tasks={incompleteTasks} />;
}

export default InComplete;