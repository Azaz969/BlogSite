import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const ContactForm = () => (
  <Form name="basic" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <Form.Item
        
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input className=" p-3 mb-2" placeholder="Enter Your Name" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "Please provide a valid email",
            },
          ]}
        >
          <Input className=" p-3 mb-2" placeholder="Enter Email Address" />
        </Form.Item>

        <Form.Item
          name="subject"
          rules={[
            {
              required: true,
              message: "Please input your subject!",
            },
          ]}
        >
          <Input className=" p-3 mb-2" placeholder="Subject" />
        </Form.Item>
      </div>
      <div>
        <Form.Item>
          <TextArea rows={9} placeholder="Enter Message" />
        </Form.Item>
      </div>
    </div>

    <div className="flex">
      <Button type="primary" className="ms-auto" htmlType="submit">
        SEND MESSAGE
      </Button>
    </div>
  </Form>
);
export default ContactForm;
