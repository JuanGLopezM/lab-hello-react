import './App.css';

import logo from "./images/logo.png";
import menu from "./images/menu.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import icon5 from "./images/logo512.png";


import LogoImg from "./components/LogoImg";
import MenuImg from "./components/MenuImg";
import HeaderText from "./components/HeaderText";
import AwesomeButton from "./components/AwesomeButton";



function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="headerImages">
          <LogoImg image={logo} />
         
          <img src={icon5} alt="logo" className="icon5Position1"/>
          
          <MenuImg image={menu} />
        </div>
        <img src={icon5} alt="logo" className="icon5Position2"/>
        <div className="headerContent">
        
          <HeaderText />
          <img src={icon5} alt="logo" className="icon5Position3"/>
          <AwesomeButton />
        </div>
      </header>
      <section className="section">
        <div>
					<img src={icon1} alt="icon1" />
					<h2 className="sectionH1"> Declarative</h2>
					<p className="sectionP">
						React makes it<br /> painless to create<br /> interactive UIs
					</p>
				</div>
				<div>
					<img src={icon2} alt="icon2" />
					<h2 className="sectionH1">Components</h2>
					<p className="sectionP">
						Build encapsulated<br /> components that<br /> manage their state.
					</p>
				</div>
				<div>
					<img src={icon3} alt="icon3" />
					<h2 className="sectionH1">Single-Way</h2>
					<p className="sectionP">
						A set of immutable<br />values are passed to<br /> the component's.
					</p>
				</div>
				<div>
					<img src={icon4} alt="icon4" />
					<h2 className="sectionH1">JSX</h2>
					<p className="sectionP">
						Statically-typed,<br /> designed to run on<br /> modern browsers.
					</p>
				</div>
      </section>
    </div>
  );
}
export default App;