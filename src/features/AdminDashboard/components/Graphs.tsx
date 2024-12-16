"use client"
import React, { PureComponent } from "react";
import {
  Area,
  AreaChart,
  BarChart, 
  Bar,
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const users = [
  { name: 'Sun', users: 150, },
  { name: 'Mon', users: 250, },
  { name: 'Tue', users: 200, },
  { name: 'Wed', users: 270, },
  { name: 'Thur', users: 250, },
  { name: 'Fri', users: 240, },
  { name: 'Sat', users: 300, },
  { name: 'Sun', users: 400, },
];

export class UserChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height={220}>
        <LineChart
          data={users}
          margin={{ top: 20, right: 30, left: -10, bottom: 5 }}
        >
            <XAxis 
                dataKey="name" 
                axisLine={false}
                tick={{ fontSize: 11, fill:'darkgray'}}    
            />
            <YAxis 
                axisLine={false}
                tick={{ fontSize: 12, fill:'darkgray'}}
            />
            <CartesianGrid vertical={false} stroke="lightgray" strokeWidth={0.3}/>
            <Tooltip/>
            <Line type="monotone" dataKey="users" stroke="#FF6B00" strokeWidth={3} activeDot={{ r: 8 }} dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
};