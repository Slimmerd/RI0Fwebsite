import {Result} from 'antd';
import useTranslation from 'next-translate/useTranslation'

const Error404 = () => {
    const {t} = useTranslation('basic')

    return (

        <Result
            status="404"
            title="404"
            subTitle={t('not_found')}
        />
    );
};

export default Error404;
