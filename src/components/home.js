import axios from "axios";
import "./home.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { DeleteOutlined, EditOutlined  } from '@ant-design/icons';
import { Button } from "antd";
import React, { useState, useEffect } from "react";
const { Header, Content } = Layout;

const Home = () => {
  const [datas, setDatas] = useState([]);

  const callData = async () => {
    const response = await axios.get(
      "https://5db179198087400014d38a73.mockapi.io/api/v1/users"
    );
    const responseDatas = response.data;
    setDatas(responseDatas);
  };

  useEffect(() => {
    callData();
  }, []);

  return (
    <div>
      <Header className="add-user-container">
        <h1>Users list</h1>
      </Header>
      <Content>
        <h2>Add User</h2>
        <Button size="large" type="primary">
          Create
        </Button>
        {datas.map((item, index) => {
          return (
            <div className="item-card" key={index}>
              <div className="item-card__info">
                <span>Name: {item.name}</span>
                <span>Age: {item.age}</span>
                <span>Job: {item.job}</span>
              </div>
              <div className="item-card__operations">
                <Button className="item-card__button" type="primary"><EditOutlined /></Button>
                <Button className="item-card__button" type="danger"><DeleteOutlined /></Button>
              </div>
            </div>
          );
        })}
      </Content>
    </div>
  );
};

export default Home;
