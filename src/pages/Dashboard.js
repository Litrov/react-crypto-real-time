import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function Dashboard({ price, data }) {
    const opts = {
        tooltips: {
            intersect: false,
            mode: "index"
        },
        responsive: true,
        maintainAspectRatio: false
    };
    if (price === "0.00") {
        return <h2>please select a currency pair</h2>;
    }
    if(data)
    return (
        <div className="dashboard">
            <h2>{`$${price}`}</h2>

            <div className="chart-container">
                <Line data={data} options={opts} type='line'/>
            </div>
        </div>
    );
}

export default Dashboard;