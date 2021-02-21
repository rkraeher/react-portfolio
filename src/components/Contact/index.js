import emailjs from 'emailjs-com';
import { Form, Input, Button, message } from "antd";
import "./styles.css";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

export default function Contact() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        emailjs.send(SERVICE_ID, TEMPLATE_ID, values, USER_ID)
            .then((result) => {
                console.log(result.text);
                messageFeedback();
            }, (error) => {
                console.log(error.text);
            })
            .finally(() => {
                form.resetFields();
            })
    };

    const messageFeedback = () => {
        message.success({
            content: "Message sent. Thank you for reaching out.",
            className: "messages"
        });
    }

    return (
        <Form {...layout} form={form} onFinish={onFinish} >
            <Form.Item name="from_name" label="Name" rules={[
                {
                    required: true,
                    message: "Please enter your name."
                }
            ]}>
                <Input />
            </Form.Item>
            <Form.Item name="from_email" label="Email" rules={[
                {
                    required: true,
                    message: "Please enter your email."
                },
                {
                    type: 'email',
                    message: "Please enter a valid email."
                }
            ]}>

                <Input />
            </Form.Item>
            <Form.Item name="message" label="Message" rules={[
                {
                    required: true,
                    message: "Please include a message."
                }
            ]}>
                <Input.TextArea />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}