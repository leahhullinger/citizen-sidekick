import React from 'react';
import styles from './main.module.css';
import User from '../../components/User';

export const DashboardMain = ({ files = [] }) => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <h4>Recent Files</h4>

        {files.map(file => {
          return (
            <div key={file.id} className={styles.fileList}>
              <p className={styles.title}>{file.title}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.view}>
        <h4>VIEW 2</h4>
      </div>
      <div className={styles.view}>
        <h4>VIEW </h4>
      </div>
    </div>
  );
};
