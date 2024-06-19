import { useState } from "react";
import BarChart from "./BarChart";
import { CHART_DATA } from "./data";

export default function App() {
    const [showChart, setShowChart] = useState(false)

    return (
    <main>
        <button onClick={() => setShowChart(prev => !prev)}>Toggle Chart</button>
        {showChart ? 
        <BarChart data={CHART_DATA} /> : null}
    </main>
    )
}