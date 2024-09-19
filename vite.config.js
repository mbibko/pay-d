import path from "path";
import nunjucks from "vite-plugin-nunjucks";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default {
  plugins: [
    nunjucks(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "public/img/svg")],
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  build: {
    rollupOptions: {
      input: [path.resolve(__dirname, "index.html"), path.resolve(__dirname, "test.html")],
    },
  },
};
