import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../Layout/Layout";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Categories from "../Categories/Categories";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import CreateFood from "../CreateFood/CreateFood";
import DishesByCategory from "../DishesByCategory/DishesByCategory";

function App() {
  const [tipTotal, setTipTotal] = useState(0);

  const [products, setItems] = useState([
    {
      id: 1,
      name: "Tomato Soup",
      price: "4.00",
      description: "This is soup made with tomatoes",
    },
    {
      id: 2,
      name: "Salad",
      price: "3.00",
      description: "Salad with dressing",
    },
    {
      id: 3,
      name: "Steak",
      price: "6.00",
      description: "Lorem Ipsum",
    },
    {
      id: 4,
      name: "Soup of the day",
      price: "3.50",
      description: "Ask the waiter for more information",
    },
  ]);

  const deleteItem = (index) => {
    alert(index);
    var newList = products;
    newList.splice(index, 1);
    setItems([...newList]);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Layout title="Categories">
              <Categories products={products} />
            </Layout>
          </Route>
          <Route exact path="/checkout">
            <Layout title="Shopping Cart">
              <ShoppingCart
                products={products}
                tipTotal={tipTotal}
                setTipTotal={setTipTotal}
                deleteItem={deleteItem}
              />
            </Layout>
          </Route>
          <Route exact path="/categories">
            <Layout title="Categories">
              <Categories products={products} />
            </Layout>
          </Route>
          <Route exact path="/createfood">
            <Layout title="CreateFood">
              <CreateFood />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
