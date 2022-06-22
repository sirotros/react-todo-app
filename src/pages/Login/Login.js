import React from "react";
import s from "./Login.module.scss";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { loginAction } from "../../redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const registerSchema = yup.object({
  identifier: yup.string().required().min(3),
  password: yup.string().required().min(6),
});
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const login = async (values) => {
    await dispatch(loginAction(values))
    navigate("/")
  };
  return (
    <div>
      <Card padding>
        <h1>Login </h1>

        <div>
          <Formik
            initialValues={{ identifier: "", password: "" }}
            onSubmit={login}
            validationSchema={registerSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  as={Input}
                  label="Username or email"
                  placeholder="Enter your username or email..."
                  name="identifier"
                />
                <Field
                  as={Input}
                  label="Password"
                  placeholder="Enter your password..."
                  name="password"
                  type="password"
                />

                <Button
                  type="submit"
                  className="btn"
                  isLoading={isSubmitting}
                  color="red"
                  variant="outline"
                >
                  Register
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Card>
    </div>
  );
}

export default Login;
