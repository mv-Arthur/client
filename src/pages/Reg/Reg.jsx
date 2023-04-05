import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import classes from "./reg.module.css";
import { useState } from "react";
import axios from "../../axios";
const Reg = () => {
  const [regData, setRegData] = useState({
    email: "",
    password: "",
    surname: "",
    name: "",
    patronimyc: "",
    pasportData: "",
  });

  const onReg = async () => {
    try {
      const { data } = await axios.post("/auth/reg", {
        ...regData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {" "}
      <div className="container">
        <h1 style={{ marginBottom: "40px" }}>Зарегестрируйтесь</h1>
        <Form className={classes.form}>
          <Form.Group className="mb-3">
            <Form.Label>Введите ваш email</Form.Label>
            <Form.Control
              style={{ width: "300px" }}
              type="email"
              placeholder="Enter email"
              value={regData.email}
              onChange={(e) => {
                setRegData({ ...regData, email: e.target.value });
              }}
            />
            <Form.Text className="text-muted"></Form.Text>{" "}
            {/* выше оставить сообщение валидации */}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Введите пароль</Form.Label>
            <Form.Control
              autoComplete="on"
              style={{ width: "300px" }}
              type="password"
              placeholder="Password"
              value={regData.password}
              onChange={(e) => {
                setRegData({ ...regData, password: e.target.value });
              }}
            />
            <Form.Text className="text-muted"></Form.Text>{" "}
            {/* выше оставить сообщение валидации */}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Введите фамилию</Form.Label>
            <Form.Control
              style={{ width: "300px" }}
              type="text"
              placeholder=""
              value={regData.surname}
              onChange={(e) => {
                setRegData({ ...regData, surname: e.target.value });
              }}
            />
            <Form.Text className="text-muted"></Form.Text>{" "}
            {/* выше оставить сообщение валидации */}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Введите имя</Form.Label>
            <Form.Control
              style={{ width: "300px" }}
              type="text"
              placeholder=""
              value={regData.name}
              onChange={(e) => {
                setRegData({ ...regData, name: e.target.value });
              }}
            />
            <Form.Text className="text-muted"></Form.Text>{" "}
            {/* выше оставить сообщение валидации */}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Введите отчество</Form.Label>
            <Form.Control
              style={{ width: "300px" }}
              type="text"
              placeholder=""
              value={regData.patronimyc}
              onChange={(e) => {
                setRegData({ ...regData, patronimyc: e.target.value });
              }}
            />
            <Form.Text className="text-muted"></Form.Text>{" "}
            {/* выше оставить сообщение валидации */}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Введите серию и номер паспорта</Form.Label>
            <Form.Control
              style={{ width: "300px" }}
              type="text"
              placeholder=""
              value={regData.pasportData}
              onChange={(e) => {
                setRegData({ ...regData, pasportData: e.target.value });
              }}
            />
            <Form.Text className="text-muted"></Form.Text>{" "}
            {/* выше оставить сообщение валидации */}
          </Form.Group>

          <Link className="mybtn" onClick={onReg}>
            зарегестрироваться
          </Link>
          <span className={classes.span}>
            уже есть аккаунт? <Link to={"auth/login"}>автризуйтесь</Link>
          </span>
        </Form>
      </div>
    </div>
  );
};

export default Reg;
