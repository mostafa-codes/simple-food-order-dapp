import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomeScreen from './screens/homeScreen/HomeScreen';
import SplashScreen from './screens/splashScreen/SplashScreen';
import TransactionsScreen from './screens/transactionsScreen/TransactionsScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/splash" element={<SplashScreen />} />

        {/* Routes with layout*/}
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/transactions" element={<TransactionsScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
