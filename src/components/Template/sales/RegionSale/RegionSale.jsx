import './RegionSale.css'
import {
    ComposedChart,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';

  import db from '../../../../Data/db.json'
import { useState } from 'react';

function RegionSale() {
    const [regionSales ,setRegionSales]= useState(db.RegionSale)
  return (
   <section className="regionSale">
        <h5 className="title">فروش های منطقه ای</h5>
        <div className="regionSale-chart">
                <ComposedChart
                    layout="vertical"
                    width={500}
                    height={300}
                    data={regionSales}
                    margin={{
                        top: 15,
                        right: 20,
                        bottom: 5,
                        left: 0,
                      }}
                >
                    <CartesianGrid stroke="#55A6EB"/>
                    <XAxis type='number'/>
                    <YAxis dataKey="country" type="category" scale="band" />
                    <Tooltip/>
                    <Legend/>
                    <Area/>
                    <Bar dataKey="crowd"  barSize={10} fill="#413ea0"/>
                </ComposedChart>
        </div>

        <div className="regionSale-items">
            <div className="regionSale-item">
                <h6 className="regionSale-item-number">4,234,760 تومان</h6>
                <span className="regionSale-item-title">مجموع فروش</span>
            </div>
            <div className="regionSale-item">
                <h6 className="regionSale-item-number">620,000 تومان</h6>
                <span className="regionSale-item-title">میانگین</span>
            </div>
            <div className="regionSale-item">
                <h6 className="regionSale-item-number">20,876 تومان</h6>
                <span className="regionSale-item-title">بازگشت</span>
            </div>
        </div>
   </section>
  )
}

export default RegionSale