import path from "path";
import vituum from "vituum";
import nunjucks from "@vituum/vite-plugin-nunjucks";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import postcss from "@vituum/vite-plugin-postcss";
import tailwindcss from "@vituum/vite-plugin-tailwindcss";

export default {
  base: mode === "production" ? "/pay-d-dist/" : "",
  plugins: [
    vituum({
      imports: {
        filenamePattern: {
          "+.css": [],
          "+.sass": "src/styles",
        },
      },
    }),
    nunjucks({
      root: "./src",
    }),
    tailwindcss(),
    postcss(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "public/img/svg")],
      symbolId: "icon-[dir]-[name]",
    }),
  ],
};
