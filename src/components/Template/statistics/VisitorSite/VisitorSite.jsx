import "./VisitorSite.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import db from "../../../../Data/db.json";
import { useState } from "react";
import VisitorCard from "../VisitorCard/VisitorCard";

function VisitorSite() {
  const [visitSite, setVisitSite] = useState(db.visitSites);
  const [visitClient, setVisitClient] = useState(db.visitorClient);
  return (
    <section className="visitorSite">
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <div className="box">
            <h5 className="title">نمودار بازیدگنندگان</h5>
            <div className="visitorSiteChart">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  width={500}
                  height={400}
                  data={visitSite}
                  margin={{
                    bottom: 40,
                  }}
                >
                  <CartesianGrid strokeDasharray="1" />
                  <XAxis dataKey="month" angle={-45} tickMargin={20} />
                  <YAxis strokeWidth="1" tickMargin={40} />
                  <Tooltip />
                  <Bar dataKey="Europe" fill="#3B5998" />
                  <Bar dataKey="Africa" fill="#55A6EB" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="box">
            <div className="visitor-content">
              {visitClient.map((visit) => (
                <VisitorCard
                  key={visit.id}
                  title={visit.title}
                  text={visit.text}
                  number={visit.number.toLocaleString()}
                  color={visit.bgColor}
                  progress={visit.progress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisitorSite;
