"use client"
import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@app/components/base/select"
import { GoDotFill } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js'
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)
function LineChart() {
  const data = {
    labels: [" ","Mon","Tue","Wed","Thur","Fri","Sat", "Sun"],
    datasets:[{
      data: [0, 4,2, 7, 6, 5.9, 9, 11],
      // data: ["8k","8k", "6k","8k", "7k", "5k","6k"],
      backgroundColor:'transparent',
      borderColor:'#FF6B00',
      pointBorderColor:'transparent',
      pointBorderWidth:4,
      tension:0.5
    }]
  }
  const options = {
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
       min:0,
       max:15,
       ticks:{
        stepSize:5,
        callback: (value)=> value + "M",
       }
      }
    }
  }
  return (
    <div className='h-[34.375rem] w-[34.375rem] mt-1 ml-5 '>
     <div className='flex flex-row mb-1'>
        <h1 className='font-extrabold text-[18px] text-black mb-2 mr-2'>User Overview</h1>
        <Select>
          <SelectTrigger className="w-20 rounded-[6px] h-7">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Jan">January</SelectItem>
              <SelectItem value="Feb">February</SelectItem>
              <SelectItem value="Mar">March</SelectItem>
              <SelectItem value="April">April</SelectItem>
              <SelectItem value="May">May</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
     <div className='rounded-[16px] border border-[#D6D6D6] w-[34.375rem] p-2 h-[20.0625rem] '>
      <div className='flex justify-between'>
        <div className='w-44'>
            <div className='flex justify-around'>
                <h1 className='text-[#1C1C1C] font-extrabold text-xs'>Users</h1>
                <div className="border-r-2 border-[#00000033]"></div>
                <div className='flex'>
                  <GoDotFill className='text-[#FF6B00] mt-1 mr-2'/>
                  <p className='text-[#1C1C1C] text-xs mt-1'>New users</p>
                </div>        
            </div>
        </div>
        <div className='flex w-32 justify-between'>
          <Select>
            <SelectTrigger className="w-[80px] rounded-[6px] h-7">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Jan">This week</SelectItem>
                <SelectItem value="Feb">This Month</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <BsThreeDots />
        </div>
      </div>
      <Line data={data} options={options}></Line>
     </div>
      
    </div>
  )
}

export default LineChart