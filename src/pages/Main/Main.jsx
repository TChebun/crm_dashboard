import { useEffect, useState } from "react";
import { Row, Col, Tag, Table } from "antd";
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip } from "recharts";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import CardWrapper from "../../components/CardWrapper/CardWrapper";

import { UPPERCARDS, ORDERSDAY, ORDERSWEEK, ORDERSMONTH, PLANNEDMONTH, TABLEDAY } from "./dictionary";

import "./main.scss";

const columns = [
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
    render: (text) => (
      <div className="table-product__box">
        <span className="table-product__name">{text.name}</span>
        <span className="table-product__item">{text.id}</span>
      </div>
    ),
  },
  {
    title: "Customer",
    dataIndex: "customer",
    key: "customer",
    render: (text) => (
      <div className="table-product__box">
        <span className="table-product__name">{text.name}</span>
        <span className="table-product__item">{text.email}</span>
      </div>
    ),
  },
  {
    title: "Delivery",
    dataIndex: "delivery",
    key: "delivery",
    render: (text) => (
      <div className="table-product__box">
        <span className="table-product__name">{text.country}</span>
        <span className="table-product__item">{text.address}</span>
      </div>
    ),
  },
  {
    title: "Shipping",
    dataIndex: "shipping",
    key: "shipping",
    render: (text) => <div className="table-product__name">${text}</div>,
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    render: (text) => <div className="table-product__name">${text}</div>,
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (text) => {
      let color;
      if (text === "Shipped") {
        color = "green";
      } else {
        color = "gold";
      }
      return <Tag color={color}>{text}</Tag>;
    },
  },
];

const Main = () => {
  const [ordersPeriod, setOrdersPeriod] = useState("day");
  const [salesPeriod, setSalesPeriod] = useState("day");
  const [orders, SetOrders] = useState([]);

  useEffect(() => {
    if (ordersPeriod === "day") SetOrders(ORDERSDAY);
    if (ordersPeriod === "week") SetOrders(ORDERSWEEK);
    if (ordersPeriod === "month") SetOrders(ORDERSMONTH);
  }, [ordersPeriod]);

  return (
    <div className="main">
      <Row gutter={[30, 30]}>
        {UPPERCARDS.map((el) => (
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
            <Col span={24}>
              <AreaChart
                className="main__chart"
                width={1184}
                height={260}
                data={orders}
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
            </Col>
          </CardWrapper>
        </Col>
        <Col span={8}>
          <CardWrapper title="Planned Income">
            <Col span={24}>
              <AreaChart
                className="main__chart"
                width={586}
                height={260}
                data={PLANNEDMONTH}
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
                <Area type="monotone" dataKey="uv" stackId="1" fillOpacity={0.4} stroke="#9698D6" fill="#9698D6" />
              </AreaChart>
            </Col>
          </CardWrapper>
        </Col>
        <Col span={24}>
          <CardWrapper title="Latest Sales" period={salesPeriod} setPeriod={setSalesPeriod}>
            <Col span={24}>
              <div className="main__table">
                <Table columns={columns} dataSource={TABLEDAY} />
              </div>
            </Col>
          </CardWrapper>
        </Col>
      </Row>
    </div>
  );
};

export default Main;
