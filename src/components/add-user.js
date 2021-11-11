import React, { useState, useEffect } from "react";
import axios from "axios";
import "./add-user.css";
import { useParams } from "react-router";
import { Layout, Input, Button, Form } from "antd";
const { Header, Content } = Layout;

const AddUser = () => {
  const [form] = Form.useForm();
  /*Getting params*/
  const params = useParams();

  /*Settng state for EDIT*/
  const [datas, setData] = useState({ name: "name", age: "age", job: "job" });

  const getData = async () => {
    const response = await axios.get(
      `https://5db179198087400014d38a73.mockapi.io/api/v1/users/${params.id}`
    );
    setData({ ...response.data });
  };

  useEffect(() => {
    if (params.edit) {
      getData();
    }
  }, []);

  useEffect(() => {
    if (params.edit)
      form.setFieldsValue({
        name: datas.name,
        age: datas.age,
        job: datas.job,
      });
  }, [datas]);

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
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            onFinish={onFinish}
          >
            <Form.Item label="Name" name="name">
              <Input onChange={params.edit ? trackEditName : trackName} />
            </Form.Item>

            <Form.Item label="Age" name="age">
              <Input onChange={params.edit ? trackEditAge : trackAge} />
            </Form.Item>

            <Form.Item label="Job" name="job">
              <Input onChange={params.edit ? trackEditJob : trackJob}/>
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
