import { useState } from "react";
import BarChart from "./BarChart";

export default function App() {
    const [showChart, setShowChart] = useState(false)

    return (
    <main>
        <button>Toggle Chart</button>
        {showChart ? 
        <BarChart /> : null}
    </main>
    )
}