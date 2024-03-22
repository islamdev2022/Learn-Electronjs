import Chart from "react-apexcharts";
import { useState } from "react";
const Graph = () => {
    
    const [state,setState]=useState({
        series: [{
            name: 'Earnings',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
          }, {
            name: 'Number of tests',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
          }],
          options: {
            colors: [ '#025643', '#FF9800'],
            chart: {
              height: 350,
              type: 'line',
            },
            stroke: {
              width: [0, 4]
            },
            title: {
              text: 'View my statistics',
              
            },
            dataLabels: {
              enabled: true,
              enabledOnSeries: [1]
            },
            labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
            xaxis: {
              type: 'datetime'
            },
            yaxis: [{
              title: {
                text: 'Earnings',
              },
            
            }, {
              opposite: true,
              title: {
                text: 'Number of Tests'
              }
            }]
}})
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-6 mt-4">
          <p className="text-3xl font-semibold">12-Weeks Trend</p>
          <div className="flex flex-row justify-center gap-24 ">
            <p className="flex items-center gap-1"><div className="h-4 w-4 bg-green rounded-2xl"></div>Earnings : $3500</p>
            <div>
              <p className="flex items-center gap-1"><div className="h-4 w-4 bg-orange-400 rounded-2xl"></div>Number of tests : 500</p>
            </div>
          </div>
        </div>
        <hr className=""/>
        <div>
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            height={350}
          />
        </div>
        <hr />
        <div className="flex h-full">
          <div className="flex flex-col justify-center items-center p-6 border-e-2 gap-3">
            <p className="font-bold underline">Time Frame</p>
            <select className="rounded-lg p-1 px-2 outline">
              <option value="" >year</option>
              <option value={2023}>2023</option>
              <option value={2024}>2024</option>
              <option value={2024}>2024</option>
              <option value={2024}>2024</option>
              <option value={2024}>2024</option>
               </select>
          </div>
          <div className="p-6">
            <p className="font-bold underline">Number of Tests</p>
          <br />
          <span className="flex justify-start">100</span>
          </div>
          <div className="p-6">
            <p className="font-bold underline">Total Net</p>
          <br />
          <span>100$</span>
          </div>
          
        </div>
      </div>
    );
}
 
export default Graph;