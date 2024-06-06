import { useContext, createContext} from 'react';

 export const AppContext = createContext();
 export const useAllContext = () => useContext(AppContext);

const ContextAPI = ({children}) => {
    const myName = 'John Doe';
    const age = 78;
    return (
        <AppContext.Provider value = {{ myName, age}}>
            {children}
        </AppContext.Provider>
    );
}


export default ContextAPI;