import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { contests } from "../data/contest";

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: any[];
}) => {
  if (active && payload && payload.length) {
    const { contest_name, rank, submissions } = payload[0].payload;

    return (
      <div className="custom-tooltip" style={tooltipStyle}>
        <p>
          <strong>Contest Name:</strong> {contest_name}
        </p>
        <p>
          <strong>Rank:</strong> {rank}
        </p>
        <p>
          <strong>Submissions:</strong> {submissions}
        </p>
      </div>
    );
  }

  return null;
};

const tooltipStyle = {
  backgroundColor: "rgba(51, 51, 51, 0.9)",
  border: "1px solid #fff",
  padding: "24px",
  borderRadius: "5px",
  color: "white",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
};

export const AtcoderGraph = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <ResponsiveContainer width="90%" height={400}>
      <LineChart
        data={contests}
        style={{ backgroundColor: "#282c34", borderRadius: "10px" }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#555" />
        <XAxis dataKey="date" tick={{ fill: "white" }} />
        <YAxis domain={[0, 1200]} tick={{ fill: "white" }} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="rating" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);
