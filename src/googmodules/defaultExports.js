// モジュール宣言
goog.module("googmodules.defaultExports");


const log = () => {
  console.log("defaultExports.log");
}

const log2 = () => {
  console.log("defaultExports.log2");
}

exports = log;

/*
exports = { log, log2 };
も可能
*/