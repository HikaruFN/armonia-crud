import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Layout, Typography, Input, Button, Form } from "antd";
const { Title } = Typography;
const { Header, Content } = Layout;

const EditUser = () => {
  const params = useParams();

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

  const trackName = (event) => {
    setData({
      ...datas,
      name: event.target.value,
    });
  };

  const trackAge = (event) => {
    setData({
      ...datas,
      age: event.target.value,
    });
  };

  const trackJob = (event) => {
    setData({
      ...datas,
      job: event.target.value,
    });
    console.log(datas);
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

  return (
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
              <Input
                placeholder={datas.name}
                onChange={trackName}
                value={datas.name}
              />
            </Form.Item>
            <Form.Item label="New Job" name="job">
              <Input
                placeholder={datas.job}
                onChange={trackJob}
                value={datas.job}
              />
            </Form.Item>
            <Form.Item label="New Age" name="age">
              <Input
                placeholder={datas.age}
                onChange={trackAge}
                value={datas.age}
              />
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

export default EditUser;
