enum steps { //Значения означают шкалу прогресса заполнения данных
  email = 5,
  displayName = 40,
  password = 75
}

interface MessagesProps {
  step: steps,
  currentStep: steps,
  isRegistered: boolean,
  messageError: string,
  stateChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement>, 
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => void,
  setterState: React.Dispatch<React.SetStateAction<string>>,
  sendState: () => void,
  isDisabledButton: boolean,
  state: string,
  changeStep: (step: steps) => void,
  isLoading: boolean
}

export {
  steps
}

export type {
  MessagesProps
}