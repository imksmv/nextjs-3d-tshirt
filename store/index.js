import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#2F74B2",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.svg",
  fullDecal: "./threejs.svg",
});

export default state;
