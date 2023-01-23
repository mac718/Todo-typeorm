import styles from "./ErrorNotification.module.css";

interface ErrorNotificationProps {
  message: string;
}

const ErrorNotification = ({ message }: ErrorNotificationProps) => {
  return <div className={styles.container}>{message}</div>;
};

export default ErrorNotification;
