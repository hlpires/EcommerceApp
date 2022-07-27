
import React from 'react';
import Link from 'next/link';


const Header = ({ header }) => {
  return (
    <div>
      <div className = 'headerPosition'>
      <Link href="/"><div className = 'logo' ></div></Link>
        <div className = 'menu'>
          <div className ='menuitem1'></div>
          <div className ='menuitem2'></div>
        </div>
      </div>
    </div>
  )
}

export default Header