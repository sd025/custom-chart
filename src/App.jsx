import { useState } from "react";
import BarChart from "./BarChart";
import { CHART_DATA } from "./data";
import './App.css'
export default function App() {
    const [showChart, setShowChart] = useState(true)

    return (
    <main>
        <button>Toggle Chart</button>
        <button onClick={() => setShowChart(prev => !prev)}>Toggle Chart</button>
        {showChart ? 
            <BarChart data={CHART_DATA} /> : null
        }
    </main>
    )
}