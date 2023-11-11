import './Reports.css'
import { BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,LabelList } from 'recharts'
import db from '../../../../Data/db.json'
import { useState } from 'react'
function Reports() {
 const [reports ,setReports] =useState(db.Reports)
 
       
  return (
    <div className="reports">
        <h5 className="title">گزارشات</h5>
        <div className="reports-sale-average">
            <div className="reports-sale">
                <h5 className="reports-sale-number">56,234,076 تومان</h5>
                <span className="reports-sale-text">مجموع فروش</span>
            </div>
            
            <div className="reports-average">
                <h5 className="reports-average-number">620,076 تومان</h5>
                <span className="reports-average-text">میانگین</span>
            </div>
        </div>

            <BarChart
                width={500} 
                height={300}
                data={reports}
            >
                <CartesianGrid strokeDasharray="2"/>
                <XAxis dataKey='year' />
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar   dataKey="sale" fill="#3B5998" minPointSize={10} >
                </Bar>
                <Bar dataKey='average' fill="#55A6EB"  minPointSize={10}/>
            </BarChart>
    </div>
  )
}

export default Reports