import './StatusSales.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid , Tooltip, ResponsiveContainer } from 'recharts';
import db from '../../../../Data/db.json'
import { useState } from 'react';

function StatusSales() {
    const [statusSale ] =useState(db.StatusSales)
  return (
    <section className="statusSales">
        <h5 className="title">وضعیت خرید</h5>
        <div className="status-chart ">
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={statusSale} height={400} width={400} >
                <CartesianGrid  strokeDasharray="1"/>
                <XAxis dataKey='month' angle={-15} tickMargin={9}/>
                <YAxis tickMargin={10} />
                <Tooltip/>
                <Line dataKey='return' stroke="#0ABB87" strokeWidth={4} strokeDasharray="3 1"/>
                <Line dataKey='success' stroke="#E04B4B" strokeWidth={4} strokeDasharray="3 1"/>
            </LineChart>   
            </ResponsiveContainer>    
        </div>
        <div className="statusSaleReports">
            <div className="statusSales-item">
                <h5 className="statusSales-item-number">234,076 تومان</h5>
                <span className="statusSales-item-text">مجموع فروش</span>
            </div>
            <div className="statusSales-item">
                <h5 className="statusSales-item-number">20,076 تومان</h5>
                <span className="statusSales-item-text">بازگشت</span>
            </div>
        </div>
    </section>
  )
}

export default StatusSales