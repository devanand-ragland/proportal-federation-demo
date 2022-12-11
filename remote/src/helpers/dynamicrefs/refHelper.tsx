import React from "react";

const map = new Map();
//get & set methods to hold dynamic element refs

const setRef = function setRef(key: any) {
  if (!key) return console.warn("reactRefHelper: Cannot set ref without key ");
  const ref = React.createRef();
  map.set(key, ref);
  return ref;
};

const getRef = function getRef(key: any) {
  if (!key) return console.warn("reactRefHelper: Cannot get ref without key");
  return map.get(key);
};

const reactRefHelper = function reactRefHelper() {
  return [getRef, setRef];
};

export default reactRefHelper;
