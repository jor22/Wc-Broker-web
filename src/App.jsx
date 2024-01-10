import React from 'react';
import Buttonpanel from './components/Buttonpanel';
import NavBar from './components/NavBar';
import Insurrance from './components/Insurrance';
import About from './components/About';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Companies from './components/Companies';
import Footer from './components/Footer';
import FAB from './components/Fab';
import NavBarMobile from './components/NavBarMobile';

const App = () => {
	return (
		<>
			<NavBar />
			<NavBarMobile />
			<Carousel />
			<section
				id='insurrance'
				style={{
					margin: '0',
				}}
			>
				<Buttonpanel />
			</section>
			<FAB />
			<section
				id='about'
				style={{
					margin: '0',
				}}
			>
				<About />
				<Insurrance />
				<Companies />
			</section>
			<section
				id='contact'
				style={{
					margin: '0',
				}}
			>
				<Contact />
			</section>
			<Footer />
		</>
	);
};

export default App;
