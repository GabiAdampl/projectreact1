import React from 'react';
import './App.css'; // Importuj cały styl CSS

import Nav from './Nav';
import Header from './Header';
import Employees from './Employees';
import Services from './Services';
import Footer from './Footer';

const App = () => {
	return (
		<div>
			<Nav />
			<Header />
			<Employees />
			<Services />
			<Footer />
		</div>
	);
};

export default App;
