import React from 'react';
var GlobalContext = React.createContext();
export var useGlobalContext = () => React.useContext(GlobalContext);
var AppContext = (props) => {
  var [isClicked, setIsClicked] = React.useState(false);
  var [isHidden, setIsHidden] = React.useState(false);
  var [isChecked, setIsChecked] = React.useState(false);
  var [isDropDown, setIsDropDown] = React.useState(true);
  return (
    <GlobalContext.Provider
      value={{
        isClicked,
        isHidden,
        setIsClicked,
        setIsHidden,
        isChecked,
        setIsChecked,
        isDropDown,
        setIsDropDown,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
