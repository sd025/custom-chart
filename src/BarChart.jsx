import { useState } from "react";
const Bar = ({
    name,
    counter,
    colour
}) => {
    return (
        <>
            <div className="bar">

            </div>
        </>
    )
}
const BarChart = ({data}) => {
    return (
        <div className="container">
            <div className="chart">
                <div className="x-axis-label">number of tickets</div>
                <div className="y-axis-label">departments</div>
            </div>
        </div>
    )
}
export default BarChart