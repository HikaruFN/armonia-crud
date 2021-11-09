import React, { useState } from "react";
import axios from "axios";
import "./add-user.css";
import {
  Layout,
  Typography,
  Card,
  Space,
  Input,
  Button,
  Checkbox,
  Form,
} from "antd";
const { Title } = Typography;
const { Header, Content, Sider } = Layout;

const AddUser = () => {
  const [newUser, setNewUser] = useState({
    id: Math.random(),
    name: "",
    avatar: "",
    age: "",
    job: "",
    createdAt: "2021-05-21T10:16:36.456Z",
  });

  const trackName = (event) => {
    setNewUser({
      ...newUser,
      name: event.target.value,
    });
  };

  const trackAge = (event) => {
    setNewUser({
      ...newUser,
      age: event.target.value,
    });
  };

  const trackJob = (event) => {
    setNewUser({
      ...newUser,
      job: event.target.value,
    });
  };

  const updateData = async () => {
    const response = await axios.post(
      "https://5db179198087400014d38a73.mockapi.io/api/v1/users",
      newUser
    );
    window.location.replace("/");
  };

  const submitHandler = (event) => {
    updateData();
  };

  return (
    <div>
      <Layout>
        <Header className="header-container">
          <Title type="success">Add user</Title>
        </Header>

        <Content>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input onChange={trackName} />
            </Form.Item>
            <Form.Item
              label="Job"
              name="job"
              rules={[{ required: true, message: "Please input your job!" }]}
            >
              <Input onChange={trackJob} />
            </Form.Item>
            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: "Please input your age!" }]}
            >
              <Input onChange={trackAge} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button onClick={submitHandler} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </div>
  );
};

export default AddUser;
