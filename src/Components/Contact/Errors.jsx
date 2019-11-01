import React from 'react';
import styles from './Contact.module.scss';

const Errors = ({ touched, name, content }) => {
    return (
        <div className={styles.errorContainer}>
            {touched && name && <p className={styles.errorContent}>{content}</p>}
        </div>
    )
}
export default Errors;