import { createContext, useContext, useReducer } from "react"

type State = {
    name: string,
    email: string,
    password: string | number,
    confirmPassword: string | number
}

const initialData: State = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}

type ContextType = {
    state: State,
    dispatch: (action: Action) => void
}

type FormProviderProps = {
    children: React.ReactNode
}

export enum FormActions {
    setCurrentStep,
    setName,
    setEmail,   
    setPassword,
    setConfirmPassword
}

type SetCurrentStep = {
    type: FormActions.setCurrentStep;
    payload: number;
}
type SetName = {
    type: FormActions.setName;
    payload: string;
}

type SetEmail = {
    type: FormActions.setEmail;
    payload: string;
}

type SetPassword = {
    type: FormActions.setPassword;
    payload: string;
}
type SetConfirmPassword = {
    type: FormActions.setConfirmPassword;
    payload: string;
}
type Action = SetName | SetEmail | SetPassword | SetCurrentStep | SetConfirmPassword

const formReducer = (state: State, action: Action) => {
    switch(action.type){
        case FormActions.setName:
            return {...state, name: action.payload}
        case FormActions.setEmail:
            return {...state, email: action.payload}
        case FormActions.setPassword:
            return {...state, password: action.payload}
        case FormActions.setConfirmPassword:
            return {...state, confirmPassword: action.payload}
        default:
            return state
    }
}

const FormContext = createContext<ContextType | undefined>(undefined)

export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData)
    const value = {state, dispatch}
    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useForm = (): ContextType => {
    const context = useContext(FormContext)
    if(context === undefined){
        throw new Error('useForm must be used within a FormProvider')
    }
    return ( context )
}