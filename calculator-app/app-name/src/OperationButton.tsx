import { ACTIONS } from "./App"

export default function OperationButton({ dispatch, operation }: {
  dispatch: React.Dispatch<object>
  operation: string
}): JSX.Element {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
    >
      {operation}
    </button>
  )
}