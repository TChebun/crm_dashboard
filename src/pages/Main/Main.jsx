import React from "react";
import { Row, Col, Card, Flex, Progress } from "antd";

import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <Row gutter={[30, 30]}>
        <Col span={8}>
          <Card>
            <Flex align="center" justify="space-between">
              <div className="main__box">
                <div className="main__title">Sales</div>
                <div className="main__description">Week comparison</div>
              </div>
              <div className="main__item">
                <Flex align="center" gap={8}>
                  <div className="main__sum">1.345</div>
                  <ArrowUpOutlined style={{ color: "#7CE7AC" }} />
                </Flex>
              </div>
            </Flex>
            <Progress percent={50} showInfo={false} strokeColor="#7CE7AC" size={{ height: 4 }} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Flex align="center" justify="space-between">
              <div className="main__box">
                <div className="main__title">Leads</div>
                <div className="main__description">Month comparison</div>
              </div>
              <div className="main__item">
                <Flex align="center" gap={8}>
                  <div className="main__sum">3.820</div>
                  <ArrowDownOutlined style={{ color: "#7CE7AC" }} />
                </Flex>
              </div>
            </Flex>
            <Progress percent={50} showInfo={false} strokeColor="#5E81F4" size={{ height: 4 }} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Flex align="center" justify="space-between">
              <div className="main__box">
                <div className="main__title">Income</div>
                <div className="main__description">Week comparison</div>
              </div>
              <div className="main__item">
                <Flex align="center" gap={8}>
                  <div className="main__sum">&#36;690.00</div>
                  <ArrowUpOutlined style={{ color: "#7CE7AC" }} />
                </Flex>
              </div>
            </Flex>
            <Progress percent={50} showInfo={false} strokeColor="#FF808B" size={{ height: 4 }} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Main;
