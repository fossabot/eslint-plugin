"use strict";

const { mkdir, writeFile } = require("fs/promises");
const { join } = require("path");

const plain = require("../src/configs/plain");
const node = require("../src/configs/node");
const react = require("../src/configs/react");
const vueJS = require("../src/configs/vue+js");
const vueTS = require("../src/configs/vue+ts");
const nuxtJS = require("../src/configs/nuxt+js");
const nuxtTS = require("../src/configs/nuxt+ts");
const _jest = require("../src/configs/jest"); // do not name this variable "jest" to avoid name conflict on test

const distDir = join(__dirname, "../dist/");

(async () => {
  await mkdir(distDir, { recursive: true });
  await Promise.all([
    writeFile(join(distDir, "plain.json"), JSON.stringify(plain, null, 2)),
    writeFile(join(distDir, "node.json"), JSON.stringify(node, null, 2)),
    writeFile(join(distDir, "react.json"), JSON.stringify(react, null, 2)),
    writeFile(join(distDir, "vue+js.json"), JSON.stringify(vueJS, null, 2)),
    writeFile(join(distDir, "vue+ts.json"), JSON.stringify(vueTS, null, 2)),
    writeFile(join(distDir, "nuxt+js.json"), JSON.stringify(nuxtJS, null, 2)),
    writeFile(join(distDir, "nuxt+ts.json"), JSON.stringify(nuxtTS, null, 2)),
    writeFile(join(distDir, "jest.json"), JSON.stringify(_jest, null, 2)),
  ]);

  console.log("JSONs are successfully generated");
})();
