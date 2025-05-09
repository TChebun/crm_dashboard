import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip } from "recharts";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import CardWrapper from "../../components/CardWrapper/CardWrapper";

import { upperCards } from "./dictionary";

import "./main.scss";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Aug",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Sep",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Oct",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Nov",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 4300,
  },
];

const Main = () => {
  const [ordersPeriod, setOrdersPeriod] = useState("day");
  const [salesPeriod, setSalesPeriod] = useState("day");
  return (
    <div className="main">
      <Row gutter={[30, 30]}>
        {upperCards.map((el) => (
          <Col key={el.sum} span={8}>
            <DashboardCard
              title={el.title}
              description={el.description}
              sum={el.sum}
              color={el.color}
              progress={el.progress}
              progressColor={el.progressColor}
              down={el.title === "Leads"}
            />
          </Col>
        ))}
        <Col span={16}>
          <CardWrapper title="Orders" period={ordersPeriod} setPeriod={setOrdersPeriod}>
            <AreaChart
              width={1160}
              height={260}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid horizontal={false} strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stackId="1" fillOpacity={0.4} stroke="#7CE7AC" fill="#7CE7AC" />
              <Area type="monotone" dataKey="pv" stackId="1" fillOpacity={0.4} stroke="#5E81F4" fill="#5E81F4" />
            </AreaChart>
          </CardWrapper>
        </Col>
        <Col span={8}>
          <CardWrapper title="Planned Income">2</CardWrapper>
        </Col>
        <Col span={24}>
          <CardWrapper title="Latest Sales" period={salesPeriod} setPeriod={setSalesPeriod}>
            3
          </CardWrapper>
        </Col>
      </Row>
    </div>
  );
};

export default Main;
