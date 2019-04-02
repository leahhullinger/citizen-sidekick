import React, { Component } from 'react';
import { CollapsibleList, SimpleListItem } from '../../ui/List';
import { Select, SelectHelperText } from '../../components/Form/Select/Select';
import { TextField } from '../../ui/TextFields';

import { Thumbnail } from '../../components/Thumbnail/Thumbnail';
import { UploadForm } from './upload-form';

import styles from './upload-preview.module.css';

export const UploadPreview = ({ file, folders }) => {
  return (
    <div>
      <CollapsibleList
        startOpen
        handle={
          <SimpleListItem
            graphic="insert_drive_file"
            metaIcon="arrow_right"
            text={file.filename}
            key={file.filename}
          />
        }
      >
        <div className={styles.uploadPreviewContainer}>
          <Thumbnail src={file.s3_url} alt="upload preview" />
          <div className={styles.formSection}>
            <UploadForm file={file} folders={folders} />
          </div>
        </div>
      </CollapsibleList>
    </div>
  );
};
