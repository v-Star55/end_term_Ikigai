import { ACTIONS } from "../Pages/Calculator"
import "./calciStyle.css"

export default function OperationButton({ dispatch, operation }) {
  return (
    <button className="operationbutton"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  )
}
