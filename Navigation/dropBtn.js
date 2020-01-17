import React from 'react';
import './dropBtn.css';



const dropBtn = () => (
    document.getElementById("myDropdown").classList.toggle("show"));



window.onClick = function(e) {
  if (!e.target.matches('.dropBtn__down')) {
    let myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}


export default dropBtn; 