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

interface TooltipPayload {
  payload: {
    contest_name: string;
    rank: number;
    submissions: number;
  };
}

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: TooltipPayload[];
}) => {
  if (active && payload && payload.length) {
    const { contest_name, rank, submissions } = payload[0].payload;

    return (
      <div className="bg-[rgba(51,51,51,0.9)] border border-white p-6 rounded-[5px] text-white shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
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

export const AtcoderGraph = () => (
  <div className="flex justify-center">
    <ResponsiveContainer width="90%" height={400}>
      <LineChart data={contests} className="bg-[#282c34] rounded-[10px]">
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
