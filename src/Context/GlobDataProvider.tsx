import React, { ReactElement } from 'react';


export const GlobDataContext = React.createContext(
    {}
);

const GlobDataProvider = ({ children }:{
    children: ReactElement
}) => {
    return (
        <GlobDataContext.Provider
            value={{}}
        >
            {children}
        </GlobDataContext.Provider>
    );
};

export default GlobDataProvider;