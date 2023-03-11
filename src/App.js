import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./App.css";

const createOrder = (data, actions) => {
  return actions.order.create({
    purchase_units: [
      {
        amount: {
          value: "0.01",
        },
      },
    ],
  });
};

const onApprove = (data, actions) => {
  return actions.order.capture();
};

function App() {
  console.log(process.env.REACT_APP_CLIENT_ID);
  // console.log(process.env.NODE_ENV);
  return (
    <div className="">
      <h1>Paypal Demo</h1>
      <PayPalScriptProvider
        options={{
          "client-id":
            "123"
        }}
      >
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          style={{ layout: "horizontal" }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
