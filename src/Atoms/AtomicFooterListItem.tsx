import React from 'react';
import styles from "./Signup.module.css";

interface AtomicFooterListItemProps {
    text: string;
  }

  const AtomicFooterListItem: React.FC<AtomicFooterListItemProps> = ({ text }) => {
  return (
    <li className={styles.login__li__footer_list_text}>
      {text}
    </li>
  );
};

export default AtomicFooterListItem;
