import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal({ title, price }) {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <h4>Billing details </h4>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <span>
              {basket.map((item) => (
                <span className="flx-row just-bet aln-itm-cent">
                  <p>{item.title} </p>
                  <strong>:</strong>
                  <p>$ {item.price}</p>
                </span>
              ))}

              <span className="flx-row just-bet aln-itm-cent rate">
                 <p >Price ({basket.length} items):</p>
                <strong>  {value}</strong>
              </span>
            </span>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <small className="subtotal_gift">
        <input type="Checkbox" /> This order contains a gift
      </small>

      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
