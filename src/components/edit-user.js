import React from "react";
import axios from "axios";
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

const EditUser = () => {
  return (
    <Layout>
      <Header className="header-container__edit-user">
        <Title type="success">Edit user</Title>
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
            <Input placeholder="Insert new name..." />
          </Form.Item>
          <Form.Item label="Job" name="job">
            <Input placeholder="Insert new job..." />
          </Form.Item>
          <Form.Item label="Age" name="age">
            <Input placeholder="Insert new age..." />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button onClick type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default EditUser;
