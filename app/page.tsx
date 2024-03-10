'use client'
import React from 'react'
import Tasks from './components/Tasks/Tasks';
import { useGlobalState } from "@/app/context/globalProvider";

const Home = () => {
    const { tasks } = useGlobalState();
    return <Tasks title="All Tasks" tasks={tasks} />;
}

export default Home;