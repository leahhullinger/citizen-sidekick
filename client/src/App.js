import React, { Component } from "react";
import { Input, Select, TextArea } from "./components/Form/Form";
import { Button, SimpleButton } from "./components/Button/Button";
import { Thumbnail } from "./components/Thumbnail/Thumbnail";
import Upload from "./views/Upload/Upload";
import { Card } from "./components/Card/Card";
import TopNav from "./components/Nav/TopNav/TopNav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Card />
        <Upload />
        <Thumbnail
          src={
            "https://mymodernmet.com/wp/wp-content/uploads/2018/12/best-photos-2018-1.jpg"
          }
        />
        <Input label="Input Label" />
        <Select />
        <TextArea label="TextArea Label" />
        <Button btnText="Button" />
        <SimpleButton btnText="Simple" />
      </div>
    );
  }
}

export default App;
