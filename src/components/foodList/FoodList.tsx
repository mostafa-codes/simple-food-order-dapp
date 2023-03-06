import { SiEthereum } from 'react-icons/si';
import { Link } from 'react-router-dom';
import './FoodList.scss';

const foodItems = [
  {
    name: 'Burger',
    image:
      'https://images.unsplash.com/photo-1584959370323-4bb56701e34d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fEJlZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: '0.006 ETH',
  },
  {
    name: 'Baked Beef',
    image:
      'https://images.unsplash.com/photo-1565299715199-866c917206bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fEJlZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: '0.0003 ETH',
  },
  {
    title: 'Fried Chiken',
    image:
      'https://images.unsplash.com/photo-1626082896492-766af4eb6501?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZWQlMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: '0.003 ETH',
  },
  {
    name: 'Roast Fried Chicken',
    image:
      'https://images.unsplash.com/photo-1611489142329-5f62cfa43e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFrZWQlMjBiZWVmfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: '0.004 ETH',
  },
  {
    name: 'Chicken',
    image:
      'https://images.unsplash.com/photo-1565299715199-866c917206bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fEJlZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: '0.0003 ETH',
  },
  {
    name: 'Beef Roi',
    image:
      'https://images.unsplash.com/photo-1532290462266-c6a468b6d076?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fEJlZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: '0.001 ETH',
  },
];
function FoodList() {
  return (
    <div className="food-list mt-5">
      <p className="text-left text-white section-title">Popular This week</p>
      <div className="row">
        {foodItems.map((item, index) => (
          <Link
            to="/details/1"
            className="col-6 col-lg-3 mb-3 food-item"
            key={index}
          >
            <img src={item.image} alt={item.name} />
            <div className="food-name mt-2">{item.name}</div>
            <div className="mt-1  food-price">
              <SiEthereum />
              <span className="ms-2">{item.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FoodList;
