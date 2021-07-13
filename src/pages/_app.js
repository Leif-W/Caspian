'use strict';

const App = ({Component, pageProps}) => {
	return(
		<>
			<Component {...pageProps} />
			App
		</>
	);
};

export default App;
