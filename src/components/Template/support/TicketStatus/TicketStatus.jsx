import "./TicketStatus.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import db from '../../../../Data/db.json'
import { useState } from "react";


function TicketStatus() {
    const [ticketStatus ] =useState(db.ticketStatus)
  return (
    <div className="ticketStatus">
      <div className="box">
        <div className="row">
          <div className="col-12">
            <h5 className="title">وضعیت تیکت</h5>
          </div>
        </div>
        <div className="row mt-4">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              width={600}
              height="100%"
              data={ticketStatus}
              margin={{
                bottom: 40,
              }}
            >
              <CartesianGrid  strokeDasharray="1"  />
              <XAxis dataKey="month" interval={0} angle={-45} tickMargin={20}/>
              <YAxis strokeWidth="1" tickMargin={20} />
              <Tooltip />
              <Bar dataKey="new" fill="#55A6EB" stackId='a' /> 
              <Bar dataKey='solved' fill="#0ABB87" stackId='a' />
              <Bar dataKey='waiting' fill="#F6C8C8" stackId='a' />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default TicketStatus;
