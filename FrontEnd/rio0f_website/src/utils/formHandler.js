import {Form} from "antd";

export const makeField = Component => ({input, meta, children, hasFeedback, label, ...rest}) => {
    const hasError = meta.touched && meta.invalid;
    return (
        <Form.Item
            label={label}
            validateStatus={hasError ? "error" : "success"}
            hasFeedback={hasFeedback && hasError}
            help={hasError && meta.error}
        >
            <Component {...input} {...rest} children={children}/>
        </Form.Item>
    );
};