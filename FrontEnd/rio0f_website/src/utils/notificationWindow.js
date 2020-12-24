import {notification} from 'antd';

export const notificationWindow = (type, title, description, placement, duration) => {
    notification[type]({
        message: title,
        description:
        description,
        placement,
        duration: duration,
    });
};