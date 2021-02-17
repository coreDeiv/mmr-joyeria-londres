'use strict';

// Se usa Vanilla javascript con sintaxis de Ecmascript 7
document.addEventListener ('DOMContentLoaded', function(event) {
  
  function _class (name) {
    return document.getElementsByClassName(name);
  }

  let tabPanes = _class("mmr-tabs_header")[0].getElementsByTagName("div");

  for ( let i = 0; i < tabPanes.length; i++) {

    tabPanes[i].addEventListener("click", () => {

      _class("mmr-tabs_header")[0].getElementsByClassName("active")[0].classList.remove("active");
      tabPanes[i].classList.add("active");

      _class("mmr-tabs_content")[0].getElementsByClassName("show")[0].classList.remove("show");
      
      _class("mmr-tabs_content")[0].getElementsByTagName("div")[i].classList.add("show");

    });

  }

});