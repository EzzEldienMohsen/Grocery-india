import React from 'react';
var GlobalContext = React.createContext();
export var useGlobalContext = () => React.useContext(GlobalContext);
var AppContext = (props) => {
  var [isClicked, setIsClicked] = React.useState(false);
  var [isHidden, setIsHidden] = React.useState(false);
  return (
    <GlobalContext.Provider
      value={{ isClicked, isHidden, setIsClicked, setIsHidden }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
