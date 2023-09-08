import { Provider } from "react-redux";
import { ThemeProvider } from '@mui/material/styles';
import store from "./store";
import theme from "./theme/index";
import DogBreeds from './pages/DogBreeds';

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<DogBreeds />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
