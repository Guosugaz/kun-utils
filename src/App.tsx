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

  return (
    <div>
      <h4>测试下载</h4>
      <button onClick={download}>下载</button>
    </div>
  );
};

export default App;
