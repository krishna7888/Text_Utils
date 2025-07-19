import React from 'react'
import PropTypes from 'prop-types';
export default function Navbaar(props) {
  return (
  <div className="nav">
    <h1 >Welcome to my Website</h1>
 <ul className='navul'>
  <li>Home </li>
  <li>{props.About}</li>
  <li>{props.Contact}</li>
 </ul>
</div>
  )
}

// This is we set default type of props
Navbaar.propTypes = {
  About: PropTypes.string,
  Contact: PropTypes.string
};

//To set the default value of props
Navbaar.defaultProps = {
  About: 'About1',
  Contact: 'Contact1'
};
