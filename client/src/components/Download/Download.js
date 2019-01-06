import React, {Component} from "react";
import {fileDownload} from 'react-file-download'

// class fileDownloadButton extends Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       textFile: null
//     }
//   }


// render(){
//   return (
//     <div
//     <Button></Button>
//   )
// }
// }


makeTextFile = function(text) {
  const data = new Blob([text], { type: "text/plain" });

  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile);
  }
  textFile = window.URL.createObjectURL(data);
  return textFile;
};
handleFileDownload = () => {
  fileDownload(data, fileName, contentType);
}

export const download = (content, fileName, contentType) => {
  var a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
};
download(jsonData, "json.txt", "text/plain");

const textFile = null,


  
