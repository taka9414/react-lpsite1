import React from "react";
import { Tab, TabContent, Tabs } from "react-bootstrap";

export const ComponentsTabs = (props) => {
  const { className } = props;
  return (
    <>
      <div className={className}>
        <Tabs defaultActiveKey="tab1">
          <Tab eventKey="tab1" title="タブ1">
            <TabContent className="border border-top-0">
              タブ1の内容が入ります。
              <br />
              改行テスト
              <br />
              改行テスト
              <br />
              改行テスト
            </TabContent>
          </Tab>
          <Tab eventKey="tab2" title="タブ2">
            <TabContent className="border border-top-0">
              タブ2の内容が入ります。
              <br />
              改行テスト
            </TabContent>
          </Tab>
          <Tab eventKey="tab3" title="タブ3">
            <TabContent className="border border-top-0">
              タブ3の内容が入ります。
            </TabContent>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};
