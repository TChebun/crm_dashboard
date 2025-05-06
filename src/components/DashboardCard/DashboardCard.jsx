import React from "react";
import { Card, Flex, Progress } from "antd";

import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const DashboardCard = ({ title, description, sum, color, progress, progressColor, down }) => {
  return (
    <Card>
      <Flex align="center" justify="space-between">
        <div className="main__box">
          <div className="main__title">{title}</div>
          <div className="main__description">{description}</div>
        </div>
        <div className="main__item">
          <Flex align="center" gap={8}>
            <div className="main__sum">{sum}</div>
            {down ? <ArrowDownOutlined style={{ color: color }} /> : <ArrowUpOutlined style={{ color: color }} />}
          </Flex>
        </div>
      </Flex>
      <Progress percent={progress} showInfo={false} strokeColor={progressColor} size={{ height: 4 }} />
    </Card>
  );
};

export default DashboardCard;
