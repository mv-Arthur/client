import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import classes from "./login.module.css";
import { useState } from "react";
import axios from "axios";
function Login() {
  const [logData, setLogData] = useState({
    email: "",
    password: "",
  });

  const onLog = async () => {
    try {
      const { data } = await axios.post("/auth/login", {
        ...logData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("успешно", data);
    } catch (err) {
      console.log("произошла ошибка", err);
    }
  };

  return (
    <div className="container">
      <h1 style={{ marginBottom: "40px" }}>Авторизуйтесь</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Введите ваш email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={logData.email}
            onChange={(e) => {
              setLogData({ ...logData, email: e.target.value });
            }}
          />
          <Form.Text className="text-muted"></Form.Text>{" "}
          {/* выше оставить сообщение валидации */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Введите пароль</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={logData.password}
            autoComplete="on"
            onChange={(e) => {
              setLogData({ ...logData, password: e.target.value });
            }}
          />
          <Form.Text className="text-muted"></Form.Text>{" "}
          {/* выше оставить сообщение валидации */}
        </Form.Group>

        <Link
          onClick={() => {
            onLog();
          }}
          className="mybtn"
        >
          войти
        </Link>
        <span className={classes.span}>
          нет аккаунта? <Link to="/auth/reg">зарегестрируйтесь</Link>
        </span>
      </Form>
    </div>
  );
}

export default Login;
