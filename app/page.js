import Home from "../allPages/Home.js";
import Canvas from "../canvas/Canvas.js";
import Customizer from "../allPages/Customizer.js";

export default function App() {
  return (
    <main className="app">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}
