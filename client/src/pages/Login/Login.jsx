import { Alert, Button, Container, Form, Row } from "react-bootstrap";
import './Login.scss'

const Login = () => {
  return (
    <Form className='login-form'>
      <Alert.Heading>Đăng nhập</Alert.Heading>
      <Form.Control type="username" placeholder="username" />
      <Form.Control type="password" placeholder="password" />
      <Button type="submit">Đăng nhập</Button>
    </Form>
  );
};

export default Login;
