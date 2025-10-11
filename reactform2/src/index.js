import { render } from "@testing-library/react";
import { createContext } from "react";
export const mycontext = createContext()

const username = "grow"
render(
  <mycontext.Provider value={username}>
    <app/>
  </mycontext.Provider>
)
