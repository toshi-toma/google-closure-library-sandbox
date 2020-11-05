goog.module("index");
console.log("index.js");

// goog
goog.require("goog.dom");
goog.require('goog.dom.TagName');

// モジュール読み込み
const functions = goog.require('functions');

console.log("functions module", functions);

window.onload = () => {
  const root = document.getElementById("root");
  const h1 = goog.dom.createDom(goog.dom.TagName.H1);
  h1.append("Closure Library");
  goog.dom.appendChild(root, h1);

  functions.log();
}