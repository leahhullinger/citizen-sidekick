import React from 'react';
import styles from './DashboardMain.module.css';
import User from '../../components/User';

export const DashboardMain = ({ files }) => {
  // onAddFolderClick = folderName => {
  //   axiosAddFolder(folderName)
  //     .then(response => {
  //       this.props.dispatchAddFolderToState(response.data.folder);
  //     })
  //     .catch(err => console.log(err));
  // };

  // onDeleteFolder = id => {
  //   console.log(id);
  //   axiosDeleteFolder(id).then(response => {
  //     console.log(response);
  //     this.props.dispatchDeleteFolder(id);
  //   });
  // };

  return (
    <div className={styles.mainContainer}>
      <div>
        <h4>Recent Files</h4>
        <User>
          {({ data: { currentUser } }) => {
            if (!currentUser) {
              return null;
            }
            return <p>{currentUser.name}</p>;
          }}
        </User>
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
