import React from "react";
import { Card, Row, Col, Radio, Flex } from "antd";

import "./CardWrapper.scss";

const CardWrapper = ({ children, title, description, period, setPeriod }) => {
  const handlePeriod = (e) => {
    setPeriod(e.target.value);
  };

  return (
    <Card className="card-wrapper">
      <Row gutter={[20, 5]}>
        <Col span={18}>
          <div className="main__box">
            <div className="main__title">{title}</div>
            {description ? <div className="main__description">{description}</div> : null}
          </div>
        </Col>
        {period ? (
          <Col span={6}>
            <Flex justify="flex-end">
              <Radio.Group value={period} onChange={handlePeriod}>
                <Radio.Button value="day">Day</Radio.Button>
                <Radio.Button value="week">Week</Radio.Button>
                <Radio.Button value="month">Month</Radio.Button>
              </Radio.Group>
            </Flex>
          </Col>
        ) : null}
        {children}
      </Row>
    </Card>
  );
};

export default CardWrapper;
