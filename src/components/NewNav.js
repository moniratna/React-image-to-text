import React from 'react'

export default function NewNav() {
    return (
        <nav class="navbar navbar-light bg-light justify-content-between">
        <img src="https://i.ibb.co/LpxDvR1/logo.png" className="logo" alt="" />
        <form class="form-inline">
          {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
          <button class="btn btn-outline-success my-2 my-sm-0" onClick={()=>{window.location.reload()}} type="submit">Reset</button>
        </form>
      </nav>
      
    )
}
