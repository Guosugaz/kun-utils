/*
 * @Description:
 * @Author: Guosugaz
 * @LastEditors: Guosugaz
 * @Date: 2021-09-18 13:32:33
 * @LastEditTime: 2021-09-18 17:55:04
 */
const express = require("express");
const app = express();
const fs = require("fs");

let xlsx = require("node-xlsx");

const data = [
  [1, 2, 3],
  ["foo", "bar", new Date("2014-02-19T14:30Z"), "0.3"],
];
const buffer = xlsx.build([{ name: "mySheetName", data: data }]); // Returns a buffer

// fs.writeFileSync("./the_content.xlsx", buffer, { flag: "w" });

app.use((req, res, next) => {
  res.append(
    "Access-Control-Allow-Origin",
    req.headers.origin || `${req.protocol}://${req.headers.host}`,
  );
  res.append(
    "Access-Control-Allow-Headers",
    "content-type,x-auth-token,x-user-id,author",
  );
  res.append("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT");
  res.append("Access-Control-Allow-Credentials", "true");
  if (req.method.toLowerCase() === "options") {
    res.append("Access-Control-Max-Age", 3600);
    res.end("cross");
  } else {
    next();
  }
});

app.get("/api/v1/download", (req, res) => {
  res.send(buffer);
});

app.listen(7890);
