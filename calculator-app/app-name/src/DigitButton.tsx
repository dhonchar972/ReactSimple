import { ACTIONS } from "./App"

export default function DigitButton({ dispatch, digit }: {
  dispatch: React.Dispatch<object>
  digit: string
}): JSX.Element {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  )
}