'use strict';

const App = ({Component, pageProps}) => {
	return(
		<div>
			<Component {...pageProps} />
			App
		</div>
	);
};

export default App;
