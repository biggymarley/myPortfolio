import Main from "./Content/Main";
import "./index.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  once: true
});
function App() {
  return <Main />;
}

export default App;
