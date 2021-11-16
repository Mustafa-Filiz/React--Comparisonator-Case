import './App.css';
import AppContextProvider from './context/AppContext';
import ThemeContextProvider from './context/ThemeContext';
import AppRouter from './router/AppRouter';

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <AppContextProvider>
                    <AppRouter />
                </AppContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
