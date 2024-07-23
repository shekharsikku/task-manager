"use client";

import Tasks from "./components/Tasks/Tasks";
import { useGlobalState } from "@/app/context/globalProvider";
import { useEffect } from "react";
import { redirect } from "next/navigation";

const Home = () => {
  const { user, tasks } = useGlobalState();

  useEffect(() => {
    if (!user) {
      redirect("/sign-in");
    }
  }, []);

  return <Tasks title="All Tasks" tasks={tasks} />;
}

export default Home;