import { Component } from "react";
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

class NotFound extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>404</h1>
                <p className={styles.message}>
                    페이지를 찾을 수 없습니다
                </p>
                <Link to="/" className={styles.button}>
                    홈으로
                </Link>
            </div>
        );
    }
}

export default NotFound;