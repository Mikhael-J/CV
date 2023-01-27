import React from 'react'
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import $ from "jquery";

export default function Fab() {

  function click() {
    window.scrollTo(0, 0);
  }

  return (
    <React.Fragment>

      <a href="#headerPage" id="fab-link">

        <BsFillArrowUpCircleFill id='fab-arrow-up'/>

      </a>

    </React.Fragment>



  )
}            
