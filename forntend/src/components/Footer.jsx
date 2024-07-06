import React from 'react'

function Footer() {
  return (
    <>
    <footer className="footer footer-center bg-base-100 text-base-content rounded p-10 gap-6 mt-0 py-5	 dark:bg-slate-900 dark:text-white  	">
  <nav className="grid grid-flow-col gap-8">
    <a className="link link-hover" href='/'>Home</a>
    <a className="link link-hover" href='/ManageBook'>Manage Book</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
    </div>
  </nav>
  <a className=" text-2xl font-bold cursor-pointer " href='/'>My Read</a>
  <aside>
    <p className='my-0'>Copyright © ${new Date().getFullYear()} - All right reserved by MY read</p>
  </aside>
</footer>
    </>
)
}

export default Footer