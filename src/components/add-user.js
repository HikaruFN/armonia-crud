import React, { useState, useEffect } from "react";
import axios from "axios";
import "./add-user.css";
import { useParams } from "react-router";
import { Layout, Input, Button, Form } from "antd";
const { Header, Content } = Layout;

const AddUser = () => {
  /*Getting params*/
  const params = useParams();

  /*Settng state for EDIT*/
  const [datas, setData] = useState({});

  const getData = async () => {
    const response = await axios.get(
      `https://5db179198087400014d38a73.mockapi.io/api/v1/users/${params.id}`
    );
    setData({ ...response.data });
  };

  useEffect(() => {
    getData();
    console.log(datas);
  }, []);

  /*Settng state for ADD*/
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
    console.log(datas);
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

  /*Create new item POST*/
  const newData = async () => {
    const response = await axios.post(
      "https://5db179198087400014d38a73.mockapi.io/api/v1/users",
      newUser
    );
    window.location.replace("/");
  };
  /*Submit Create new item POST*/
  const submitHandler = (event) => {
    newData();
  };

  /*Create new item PUT*/
  const updateData = async () => {
    const response = await axios.put(
      `https://5db179198087400014d38a73.mockapi.io/api/v1/users/${params.id}`,
      {
        ...datas,
      }
    );
    window.location.replace(`/`);
  };
  /*submit new item PUT*/
  const onFinish = () => {
    updateData();
  };

  return (
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
            onFinish={onFinish}
            initialValues={{ name: datas.name }}
          >
            <Form.Item key={datas.name || "name"} label="Name" name="name">
              <Input
                onChange={trackEditName || trackName}
                defaultValue={datas.name || " "}
              />
            </Form.Item>

            <Form.Item key={datas.age || "age"} label="Age" name="age">
              <Input
                onChange={trackEditAge || trackAge}
                defaultValue={datas.age || " "}
              />
            </Form.Item>

            <Form.Item key={datas.job || "job"} label="Job" name="job">
              <Input
                onChange={trackEditJob || trackName}
                defaultValue={datas.job || " "}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                onClick={params.add ? submitHandler : onFinish}
                type="primary"
                htmlType="submit"
              >
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
