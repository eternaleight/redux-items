export const isLoginDispatch = () => {
  return {
    type: 'LOGIN',
  }
}

type Action = ReturnType<typeof isLoginDispatch>

const isLoginReducer = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return !state
    default:
      return state
  }
}

export default isLoginReducer
