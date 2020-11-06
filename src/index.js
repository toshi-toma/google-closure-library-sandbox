goog.module("index");
console.log("index.js");

// goog
goog.require("goog.dom");
goog.require('goog.dom.TagName');

// モジュール読み込み
const defaultExports = goog.require('googmodules.defaultExports');
const { log , log2 } = goog.require('googmodules.namedExports');
const declareLegacyNamespace = goog.require('googmodules.declareLegacyNamespace');
goog.require('googmodules.declareLegacyNamespace2');

console.log("defaultExports module", defaultExports);
console.log("namedExports module", log, log2);
console.log("declareLegacyNamespace module", declareLegacyNamespace);
console.log("declareLegacyNamespace legacyNamespace", googmodules.declareLegacyNamespace2);

window.onload = () => {
  const root = document.getElementById("root");
  const h1 = goog.dom.createDom(goog.dom.TagName.H1);
  h1.append("Closure Library");
  goog.dom.appendChild(root, h1);
}