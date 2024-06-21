import { useMemo } from "react"

const Bar = ({
    name,
    counter,
    height,
    colour
}) => {
    return (
        <>
            <div className="bar"
            style={{
                // height: `${counter}`,
                height: `${height}`,
                backgroundColor: colour
            }}
            >
                <div className="tooltip">
                    {name} - {counter}
                </div>
            </div>
        </>
    )
}
const BarChart = ({data}) => {
    const maxCount = useMemo(() => {
        return Math.max(...data.map(item => item.counter))
    }, [])
    return (
        <div className="container">
            <div className="chart">
                {
                    data.map(item => {
                        return <Bar
                            key={item.id}
                            height={(item.counter / maxCount) * 100}
                            {...item}
                        />
                    })
                }
                <div className="x-axis-label">number of tickets</div>
                <div className="y-axis-label">departments</div>
            </div>
        </div>
    )
}
export default BarChart