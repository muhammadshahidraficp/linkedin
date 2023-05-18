import React from 'react';
import styles from "../Pages/Login/Login.module.css";

interface AtomicFooterListItemProps {
    text: string;
    keyString: string;
  }

  const AtomicFooterListItem: React.FC<AtomicFooterListItemProps> = ({ text,keyString }) => {
  return (
    <li key={keyString} className={styles.login__li__footer_list_text}>
      {text}
    </li>
  );
};

export default AtomicFooterListItem;
