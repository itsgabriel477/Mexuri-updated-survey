import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [brandName, setBrandName] = useState("");

    return (
        <FormContext.Provider value={{ brandName, setBrandName }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormData = () => useContext(FormContext);
