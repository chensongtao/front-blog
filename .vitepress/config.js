import { defineConfig } from "vitepress";
import { genNavSide } from "../dym-import";

const path = require("path");

const { nav, sidebar } = genNavSide();

export default defineConfig({
  title: "chensongtao Blog",
  srcDir: "./articles",
  description: "write something!",
  ignoreDeadLinks: true,
  appearance: "light",
  base: "/front-blog/",
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../components"),
        "@pic": path.resolve(__dirname, "public/assets"),
        "@use": path.resolve(__dirname, "../use"),
      },
      extensions: [".vue", ".js", ".json"],
    },
  },
  themeConfig: {
    nav,
    sidebar,
    logo: "https://p3-passport.byteimg.com/img/user-avatar/464e00b478bc3c604aad6b2518137d5a~180x180.awebp",
    socialLinks: [
      { icon: "github", link: "https://github.com/chensongtao/front-blog" },
    ],
  },
});
