import {Button, Form, Input, Space} from "antd";
import {Field} from "redux-form";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import {makeField} from "../../../../../../utils/formHandler";

const AInput = makeField(Input);

export const PicturesListField = ({fields}) => (
    <div>
        {fields.map((images, index) => (
            <Space
                key={index}
                style={{marginBottom: 8, width: '100%'}}
                align="baseline"
            >
                <Field
                    name={images}
                    component={AInput}
                    style={{width: '310px'}}
                    placeholder="Ссылка на фотографию"/>

                <MinusCircleOutlined onClick={() => fields.remove(index)}/>
            </Space>
        ))}
        <Form.Item>
            <Button
                type="dashed"
                onClick={() => fields.push()}
                block
                icon={<PlusOutlined/>}
            >
                Добавить ссылку на фото
            </Button>
        </Form.Item>
    </div>
)
