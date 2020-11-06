// モジュール宣言
goog.module("googmodules.declareLegacyNamespace");
goog.module.declareLegacyNamespace();

const log = () => {
  console.log("declareLegacyNamespace");
}

exports = log;
