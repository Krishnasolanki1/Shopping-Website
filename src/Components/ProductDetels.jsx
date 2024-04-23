import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router";
import { addCart, removeCart, removesingleItem } from "../redux/Slice";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function ProductCartDetails(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [getdata, setdata] = useState([]);
  const productdata = useSelector((state) => state.addCart.cart);

  useEffect(() => {
    let data = productdata.filter((e) => e.id === id);
    setdata(data);
  }, [id, productdata]);

  const incremant = (e) => dispatch(addCart(e));
  const decrement = (e) => dispatch(removesingleItem(e));
  const remove = (e) => { dispatch(removeCart(e)); navigate('/'); }

  return (
    <div className="container mt-5">
      <h2 className="text-center" style={{ color: "white" }}> Cart Details Page</h2>
      <section className="container mt-3">
        <div className="iteamsdetails">
          {getdata.map((item, index) => (
            <div key={index}>
              <div className="items_img">
                <img src={item.image} height="330px" alt="on img" />
              </div>
              <div className="details">
                <Table>
                  <tbody>
                    <tr>
                      <td>
                        <p><strong>Category</strong> : {item.category}</p>
                        <p><strong>Price</strong> : {item.price}</p>
                        <p><strong>Title</strong> :{item.title}</p>
                        <p><strong>Total</strong> : ₹ {(item.price * item.quantity).toFixed(2)} </p>
                        <div className="quantity_button">
                          <span style={{ fontSize: "24px" }} onClick={() => { incremant(item) }} >
                            <AddCircleIcon />
                          </span>
                          <span style={{ fontSize: "20px" }}>
                            {item.quantity}
                          </span>
                          <span onClick={() => { decrement(item) }} style={{ fontSize: "24px" }} >
                            <RemoveCircleIcon />
                          </span>
                        </div>
                      </td>
                      <td>
                        <p>
                          <strong>Rating :</strong>
                          <span className="rating_star">
                            {item.rating.rate}✰
                          </span>
                        </p>
                        <p>
                          <strong>Order Review :</strong>
                          <span>
                            {item.rating.count}+ order placed from here
                            recently
                          </span>
                        </p>
                        <p>
                          <strong>Remove : </strong>
                          <span>
                            <i className="fas fa-trash" onClick={() => { remove(item.id) }}  ></i>
                          </span>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          ))}
          {getdata.length === 0 && (
            <p className="text-center" style={{ color: "white" }}>Your cart is empty.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProductCartDetails;
