import React, { Component } from "react";
// import FileCard from "../../components/Card/FileCard/FileCard";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

// import { axiosUpdateFile } from "../../ducks/actions";
import styles from "./Folder.module.css";

class Folder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFile: "",
      isEditId: "",
      notes: {
        title: "",
        date: "",
        notes: "",
        transcript: ""
      }
    };
  }

  onInitiateEdit = file =>
    this.setState({
      isEditId: file.id,
      notes: {
        title: file.title,
        date: file.date,
        notes: file.notes,
        transcript: file.transcript
      }
    });

  // onUpdateFile = id => {
  //   axiosUpdateFile(id, this.state.notes)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // };

  handleInputUpdate = e =>
    this.setState({
      notes: { ...this.state.notes, [e.target.name]: e.target.value }
    });

  render() {
    const { folders, match, files } = this.props;
    const folder =
      folders && folders.find(folder => folder.id === Number(match.params.id));
    const folderFiles =
      files && files.filter(file => file.folder_id === folder.id);
    return (
      !!folder && (
        <div className={styles.foldercontainer}>
          <div className={styles.wrapper}>
            <h2>{folder.folder_name}</h2>
            <h4 className={styles.subhead}>Uploads</h4>
            {folderFiles.map(file => {
              return (
                <p
                  className={styles.link}
                  key={file.id}
                  onClick={() => this.setState({ activeFile: file.id })}
                >
                  {file.title}
                </p>
              );
            })}
          </div>
          <div className={styles.footer}>
            <Link to="/user">
              <Button>Back</Button>
            </Link>
          </div>
        </div>
      )
    );
  }
}

export default Folder;
