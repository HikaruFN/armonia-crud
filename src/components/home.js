import axios from "axios";
import "./home.css";
import "antd/dist/antd.css";
import { Layout, Button, Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
const { Title } = Typography;
const { Header, Content, Sider } = Layout;

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

  /*Directs to add users page*/
  const directToCreate = () => {
    window.location.replace("/add");
  };

  /*Deletes items and filters array*/
  const handleDelete = async (id) => {
    const response = await axios.delete(
      `https://5db179198087400014d38a73.mockapi.io/api/v1/users/${id}`
    );
    setDatas(datas.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Layout>
        <Header className="header-container">
          <Title type="success">Users list</Title>
        </Header>

        <Layout>
          <Sider>
            <div className="sider-item-container">
              <Button size="large" type="primary" onClick={directToCreate}>
                Create new user
              </Button>
            </div>
          </Sider>

          <Content>
            {datas.map((item, index) => {
              return (
                <div className="item-card" key={index}>
                  <span>Name: {item.name}</span>
                  <span>Age: {item.age}</span>
                  <span>Job: {item.job}</span>

                  <Button className="item-card__button" type="primary">
                    <EditOutlined />
                  </Button>
                  <Button
                    onClick={() => handleDelete(item.id)}
                    className="item-card__button"
                    type="danger"
                  >
                    <DeleteOutlined />
                  </Button>
                </div>
              );
            })}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
