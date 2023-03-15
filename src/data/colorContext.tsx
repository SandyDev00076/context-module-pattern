import { createContext, useContext, useReducer } from "react";

type State = {
  color: string;
};

type Action = {
  type: "change";
  payload: string;
};

const colorReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "change":
      return {
        color: action.payload,
      };
    default:
      throw new Error("action type can only be change");
  }
};

type Dispatch = (action: Action) => void;

type ColorContextType = {
  state: State;
  dispatch: Dispatch;
};

const defaultValue: State = {
  color: "black",
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

interface ColorProviderProps {
  children: React.ReactNode;
}

const ColorProvider = ({ children }: ColorProviderProps) => {
  const [state, dispatch] = useReducer(colorReducer, defaultValue);

  const value = {
    state,
    dispatch,
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);

  if (!context)
    throw new Error("Please wrap the application with ColorProvider");

  return context; // { state, dispatch }
};

export const updateColor = (dispatch: Dispatch, color: string) => {
  dispatch({ type: "change", payload: color });
};

export default ColorProvider;
