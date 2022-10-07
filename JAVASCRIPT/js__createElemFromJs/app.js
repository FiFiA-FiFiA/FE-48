const Create__Element = function(element__Obj) {
  const element = document.createElement(element__Obj.tagName);

  if (element__Obj.text) {
    element.innerText = element__Obj.text;
  }

  if (element__Obj.classList) {
    for (let i = 0; i < element__Obj.classList.length; i++) {
      element.classList.add(element__Obj.classList[i]);
    }
  }

  if (element__Obj.attrList) {
    for (let i = 0; i < element__Obj.attrList.length; i++) {
      element.setAttribute(
        element__Obj.attrList[i].attrName,
        element__Obj.attrList[i].attrValue,
      );
    }
  }

  return element;
}