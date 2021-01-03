import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {UserLogin} from "../../../redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "antd";
import {emailField, requiredField} from "../../../utils/formValidations";

const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: #2C3E50;
`
const Form = styled.div`
  width: 540px;
  height: 650px;
  background: #FFFFFF;
  box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
  border-radius: 20px;


  input {
    width: 350px;
    height: 42px;

    background: #ECF0F1;
    border: 1px solid rgba(44, 62, 80, 0.5);
    box-sizing: border-box;
    border-radius: 5px;
  }

  button {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;

    border: none;
    margin-top: 50px;
    width: 220px;
    height: 60px;
    background: #2C3E50;
    border-radius: 10px;
    color: #ECF0F1;
    transition: background-color 0.2s ease-out 0s;
    outline: none;
    cursor: pointer;

    &:hover {

      background: hsl(210, 29%, 40%);
    }
  }

  .ant-btn > .ant-btn-loading-icon .anticon {
    padding-right: 0 !important;
  }

  .ant-btn-loading-icon {
    padding-right: 20px !important;
  }


  .input {
    width: 350px;
    margin: 0 auto;
    padding-bottom: 50px;

    .label {
      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 30px;
      line-height: 35px;
      text-align: left;
      padding-bottom: 15px;


      color: #2C3E50;
    }
  }

`
const Heading = styled.div`
  padding: 30px 0 10px 0;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  color: #2C3E50;
`
const Sub = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #2C3E50;
  padding-bottom: 70px;
`


const LoginPage = (props) => {
    const {handleSubmit, submitSucceeded, pristine, submitting, reset, invalid} = props
    const fetching = useSelector((state) => state.auth.fetching)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (fetching) {
            setLoading(true)
        } else {
            setLoading(false)
        }

        if (!fetching && submitSucceeded) {
            reset()
        }
    }, [fetching, submitSucceeded, reset])

    return (
        <Background>
            <div className={'container'}>
                <Form>
                    <Heading>Авторизация</Heading>
                    <Sub>Насладись всеми прелестями админки</Sub>
                    <form>
                        <div className={'input'}>
                            <div className={'label'}>Email:</div>
                            <div>
                                <Field
                                    name="email"
                                    component="input"
                                    type="email"
                                    placeholder="Email"
                                    validate={[requiredField, emailField]}/>
                            </div>
                        </div>
                        <div className={'input'}>
                            <div className={'label'}>Пароль:</div>
                            <div>
                                <Field
                                    name="password"
                                    component="input"
                                    type="password"
                                    placeholder="Password"
                                    validate={[requiredField]}/>
                            </div>
                        </div>
                        <div>
                            <Button type="submit" loading={loading}
                                    onClick={!invalid ? handleSubmit : null}
                                    disabled={pristine || submitting || fetching || invalid}>
                                Войти
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </Background>
    );
};
const LoginForm = reduxForm({
    form: 'LoginForm' // a unique identifier for this form
})(LoginPage)

export const Login = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData) => {
        dispatch(UserLogin(formData.email, formData.password))
    }

    if (isAuth) {
        return <Redirect to={"/admin"}/>
    }

    return <div>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}


