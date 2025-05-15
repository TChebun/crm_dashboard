import React from "react";
import { Card, Flex, Progress, Row, Col } from "antd";
import CardWrapper from "../CardWrapper/CardWrapper";

import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const DashboardCard = ({ title, description, sum, color, progress, progressColor, down }) => {
  return (
    <CardWrapper title={title} description={description}>
      <Col span={6}>
        <div className="main__item">
          <Flex align="center" justify="flex-end" gap={8}>
            <div className="main__sum">{sum}</div>
            {down ? <ArrowDownOutlined style={{ color: color }} /> : <ArrowUpOutlined style={{ color: color }} />}
          </Flex>
        </div>
      </Col>
      <Col span={24}>
        <Progress
          percent={progress}
          showInfo={false}
          strokeColor={progressColor}
          size={{ height: 4 }}
          className="main__progress"
        />
      </Col>
    </CardWrapper>
  );
};

export default DashboardCard;
