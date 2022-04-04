import React from 'react'

function Footer() {
    const footerYear= new Date().getFullYear()
  return (
    <footer className='footer px-4   text-primart-content footer-center'>       
     <div>
            <p>Copyright &copy; {footerYear} All Rights Reserved</p>
        </div>
   </footer>
  )
}

export default Footer