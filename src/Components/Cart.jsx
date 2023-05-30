import React from "react";
import { connect } from "react-redux";

export const Cart = (props) => {
    console.log(props);
  const delItem = (id) => {
    props.deleteItem(id);
  };

  const { category } = props;

  return (
    <div className="container mt-5 py-5">
      <h1 className="mt-5">Cart</h1>
      <div className="row">
        <div className="col-md-8">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {category.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>
                      {" "}
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => delItem(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total</h5>
              <p className="card-text">
                {" "}
                Total price:
                <strong>
                  ${" "}
                  {category
                    .reduce((acc, item) => acc + item.price, 0)
                    .toFixed(2)}
                </strong>
              </p>
              <button className="btn btn-outline-dark">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  category: state.handleCard,
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch({ type: "CLEAR_CART", payload: id }),
}
);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
