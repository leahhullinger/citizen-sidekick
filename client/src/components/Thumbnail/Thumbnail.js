import React from 'react';
import styles from './Thumbnail.module.css';

export const Thumbnail = ({ src, alt }) => {
  return <img className={styles.thumbnail} src={src} alt={alt || src} />;
};
