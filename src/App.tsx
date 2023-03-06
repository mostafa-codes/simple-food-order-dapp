import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import DetailsScreen from './screens/detailsScreen/DetailsScreen';
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
        <Route path="/details/:id" element={<DetailsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
