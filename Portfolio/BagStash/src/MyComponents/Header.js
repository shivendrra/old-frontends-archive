import React from 'react'

export default function Header() {
  return (
    <header>
      <div className='row'>
        <div className='col-lg-3'></div>
          <div id='mainhead' className='col-lg-6 text-center'>
            <span className='p-5'>
              <h2 id='mainHeading'>BookStash.com</h2>
              <h4 id='mainpara'>Buy used books at low prices</h4>
              <button id='mainBtn' className='btn btn-dark btn-sm'>Buy</button>
            </span>
          </div>
          <div className='col-lg-3'></div>
      </div>
    </header>
  )
}
