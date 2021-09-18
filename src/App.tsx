import * as React from "react";
import axios from "axios";
import { downloadFile } from "../packages";

const App = () => {
  const download = () => {
    axios
      .get("http://localhost:7890/api/v1/download", {
        responseType: "blob",
      })
      .then((res) => {
        //   console.log(res);
        downloadFile(res.data, "测试下载");
      });
  };

  // const handleChangeFile = (file: InnerHTML) => {
  //   console.log(file.TA)
  // }
  return (
    <div>
      <button onClick={download}>下载</button>
      {/* <input type="file" onChange={handleChangeFile} /> */}
    </div>
  );
};

export default App;
