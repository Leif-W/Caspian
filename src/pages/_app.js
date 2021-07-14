'use strict';

import '../styles/global.css';

const App = ({Component, pageProps}) => {
	return(
		<>
			<Component {...pageProps} />
			App
		</>
	);
};

export default App;
