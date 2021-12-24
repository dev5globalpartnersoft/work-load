import AntdNotification from 'antd/lib/notification';
import 'antd/lib/notification/style/index.css';

export const Notification = AntdNotification;

Notification.config({
  placement: 'topRight',
  duration: 5,
});
