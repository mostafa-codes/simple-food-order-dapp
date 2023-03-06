import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import './DetailsScreen.scss';
const ImageUrl =
  'https://images.unsplash.com/photo-1532290462266-c6a468b6d076?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fEJlZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
function DetailsScreen() {
  const { id } = useParams();
  return (
    <div className="details">
      <img className="details-image" src={ImageUrl} alt="details" />
      <div
        className="details-header container
        d-flex justify-content-between"
      >
        <Link to="/" className="header-action">
          <BsArrowLeftShort />
        </Link>
        <div className="header-action">
          <AiOutlineHeart />
        </div>
      </div>
      <div className="details-content  d-flex flex-column container">
        <h3 className="details-name">Beef Roi</h3>
        <div className="details-actions d-flex justify-content-between">
          <div className="reviews my-auto">
            <AiOutlineStar />
            <span className="ms-2">4.3</span>
          </div>
          <div className="count-actions my-auto">
            <button className="btn">+</button>0
            <button className="btn">-</button>
          </div>
        </div>
        <div className="details-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          culpa accusamus facilis eaque natus tempora explicabo voluptatibus
          perspiciatis ut dolorem.
        </div>
        <div
          className="add-to-cart d-flex 
            justify-content-between mt-auto"
        >
          <div className="details-price">
            <div className="details-badge">price</div>
            <div>0.0032 ETH</div>
          </div>
          <button className="btn me-0 primary-button">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default DetailsScreen;
