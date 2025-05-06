import React from "react";
import { Row, Col } from "antd";
import DashboardCard from "../../components/DashboardCard/DashboardCard";

import { upperCards } from "./dictionary";

import "./main.scss";

const Main = () => {
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
      </Row>
    </div>
  );
};

export default Main;
