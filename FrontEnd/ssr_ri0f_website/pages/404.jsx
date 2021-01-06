import {Result} from 'antd';
import {useTranslation} from "react-i18next";

const Error404 = () => {
    const {t} = useTranslation()

    return (
        <Result
            status="404"
            title="404"
            subTitle={t('not_found')}
        />
    );
};

export default Error404;
