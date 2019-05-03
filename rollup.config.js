import typescript from "rollup-plugin-typescript";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/main.ts",
  output: [
    {
      file: "./dist/frappe-gantt.cjs.js",
      format: "cjs"
    },
    {
      file: "./dist/frappe-gantt.umd.js",
      name: "FrappeGanttReact",
      format: "umd",
      globals: {
        react: "React",
        "frappe-gantt": "Gantt"
      }
    },
    {
      file: "./dist/frappe-gantt.iife.js",
      name: "FrappeGanttReact",
      format: "iife",
      globals: {
        react: "React",
        "frappe-gantt": "Gantt"
      }
    }
  ],
  external: ["react", "react-dom", "frappe-gantt"],
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
      sourceMap: "inline"
    }),
    external({
      includeDependencies: false
    }),
    url(),
    svgr(),
    resolve(),
    typescript({
      exclude: "node_modules/**",
      declaration: true,
      declarationDir: "./dist"
    }),
    babel({
      presets: ["@babel/preset-react"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      plugins: [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties",
        "transform-react-remove-prop-types"
      ],
      exclude: "node_modules/**"
    }),
    commonjs(),
    terser()
  ]
};
