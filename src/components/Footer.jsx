import React from 'react'

const Footer = () => {
  return (
    <div className="mt-10 text-xs sm:text-sm md:text-base">
      <div className="text-center">
        <h1 className="text-sm sm:text-base md:text-lg font-semibold">Mohamed Abdullah</h1>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-0 sm:mx-1 mt-4 py-2">
        <p className="text-[10px] sm:text-xs md:text-sm">
          © {new Date().getFullYear()}{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mohamed-abdullah-m">
            Mohamed Abdullah
          </a>. All rights reserved.
        </p>
        <ul className="flex items-center gap-2 justify-center mt-2 sm:mt-0 text-[10px] sm:text-xs md:text-sm">
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Mohamedabdullah222">GitHub</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mohamed-abdullah-m">LinkedIn</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/MohamedAbdullahh22">Facebook</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://Wa.me/+201019564363">WhatsApp</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mohamed_abd_3">Instagram</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
