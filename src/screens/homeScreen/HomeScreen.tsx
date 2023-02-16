import FoodList from '../../components/foodList/FoodList';
import Header from '../../components/header/Header';
import HomeCategories from '../../components/homeCategories/HomeCategories';
import './HomeScreen.scss';

function HomeScreen() {
  return (
    <div>
      <Header />
      <div className="container">
        <HomeCategories />
        <FoodList />
      </div>
    </div>
  );
}

export default HomeScreen;
