import emailjs from 'emailjs-com';
import { Form, Input, Button, Row, Col, message } from "antd";
import "./styles.css";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

const layout = {
    wrapperCol: {
        span: 24,
    }
};

//TODO: Add captcha - google integrates w/emailJS

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
            .then(() => {
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
        <Row className="form">
            <Col lg={12} md={14} sm={16}>
                <div>
                    <h1 className="contact-heading">
                        Contact Me
                    </h1>
                    <p className="contact-details">If you have any questions or opportunities to discuss don't hesitate to reach out!</p>
                </div>
                <Form {...layout} form={form} onFinish={onFinish} >
                    <Form.Item name="from_name" rules={[
                        {
                            required: true,
                            message: "Please enter your name."
                        }
                    ]}>
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item name="from_email" rules={[
                        {
                            required: true,
                            message: "Please enter your email."
                        },
                        {
                            type: 'email',
                            message: "Please enter a valid email."
                        }
                    ]}>

                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item name="message" rules={[
                        {
                            required: true,
                            message: "Please include a message."
                        }
                    ]}>
                        <Input.TextArea placeholder="Message" />
                    </Form.Item>

                    <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
}