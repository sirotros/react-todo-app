import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import Input from "../Input/Input";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { todoCreate } from "../../api";

const todoSchema = yup.object({
  title: yup.string().required().min(5).max(40),
  text: yup.string().min(5).max(200),
});
function TodoCreate() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const sendTodo = async (values) => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      return navigate("/login");
    }
    const newTodo = {title: values.title,text: values.text,complete: false,user: user.id};
    await todoCreate(newTodo);
  };
  return (
    <div>
      <Card padding>
        <h1>Create Todo</h1>

        <div>
          <Formik
            initialValues={{ title: "", text: "" }}
            onSubmit={sendTodo}
            validationSchema={todoSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  as={Input}
                  label="Title"
                  name="title"
                  placeholder="Enter your title..."
                />

                <Field
                  as={Input}
                  label="Text"
                  type="text"
                  name="text"
                  placeholder="Enter your text..."
                />

                <Button type="submit" isLoading={isSubmitting}>
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Card>
    </div>
  );
}

export default TodoCreate;
