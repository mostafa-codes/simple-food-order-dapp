import './HomeCategories.scss';

const categoris = [
  {
    title: 'vegun',
    image:
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    title: 'vegun',
    image:
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    title: 'Beef',
    image:
      'https://images.unsplash.com/photo-1565299715199-866c917206bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fEJlZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'vegun',
    image:
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },

  {
    title: 'vegun',
    image:
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    title: 'Burger',
    image:
      'https://images.unsplash.com/photo-1613660635034-b7a09ae11463?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80',
  },
  {
    title: 'Beef',
    image:
      'https://images.unsplash.com/photo-1565299715199-866c917206bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fEJlZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
];

function HomeCategories() {
  return (
    <div className="mt-3">
      <p className="text-white text-left section-title">Food Categories</p>
      <div className="categories d-flex ">
        {categoris.map((item, index) => (
          <div className="category-item" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="category-title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCategories;
