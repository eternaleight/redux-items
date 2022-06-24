export const increment = (number: number) => {
  return {
    type: 'INCREMENT',
    payload: number,
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

// type Action =
//   | ReturnType<typeof increment>
//   | ReturnType<typeof decrement>

const counterReducer = (state: number = 0, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export default counterReducer
