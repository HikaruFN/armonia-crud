import React, { useState, useEffect } from "react";
import axios from "axios";
import "./add-user.css";
import { useParams } from "react-router";
import { Layout, Typography, Input, Button, Form } from "antd";
const { Title } = Typography;
const { Header, Content } = Layout;

const AddUser = () => {
  const [datas, setData] = useState();

  const getData = async () => {
    const response = await axios.get(
      `https://5db179198087400014d38a73.mockapi.io/api/v1/users/${params.id}`
    );
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const params = useParams();

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

  const trackEditName = (event) => {
    setData({
      ...datas,
      name: event.target.value,
    });
  };

  const trackEditAge = (event) => {
    setData({
      ...datas,
      age: event.target.value,
    });
  };

  const trackEditJob = (event) => {
    setData({
      ...datas,
      job: event.target.value,
    });
  };

  const newData = async () => {
    const response = await axios.post(
      "https://5db179198087400014d38a73.mockapi.io/api/v1/users",
      newUser
    );
    window.location.replace("/");
  };

  const submitHandler = (event) => {
    newData();
  };

  const updateData = async () => {
    const response = await axios.put(
      `https://5db179198087400014d38a73.mockapi.io/api/v1/users/${params.id}`,
      {
        ...datas,
      }
    );
    window.location.replace(`/`);
  };

  const onFinish = () => {
    updateData();
  };

  return params.add ? (
    /*Rendered if /add */
    <div>
      <Layout>
        <Header>
          <Button type="primary" href="/">
            Back to Home
          </Button>
        </Header>

        <Content>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item label="Name" name="name">
              <Input onChange={trackName} />
            </Form.Item>
            <Form.Item label="Job" name="job">
              <Input onChange={trackJob} />
            </Form.Item>
            <Form.Item label="Age" name="age">
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
  ) : (
    /*Rendered in /Edit/id*/
    <Layout>
      <Header className="header-container__edit-user">
        <Button type="primary" href="/">
          Back to Home
        </Button>
      </Header>
      <Content>
        {datas && (
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={onFinish}
          >
            <Form.Item label="New Name" name="name">
              <Input onChange={trackEditName} defaultValue={datas.name} />
            </Form.Item>
            <Form.Item label="New Job" name="job">
              <Input onChange={trackEditJob} defaultValue={datas.job} />
            </Form.Item>
            <Form.Item label="New Age" name="age">
              <Input onChange={trackEditAge} defaultValue={datas.age} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </Content>
    </Layout>
  );
};

export default AddUser;
