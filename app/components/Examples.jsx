var React = require('react')
var {Link} = require('react-router')

var Examples = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>Examples</h1>
      <p> Here are a few example location to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Santiago'>Santiago - Chile</Link>
        </li>
        <li>
          <Link to='/?location=Wellington'>Wellington - New Zealand</Link>
        </li>
        <li>
          <Link to='/?location=London'>London - UK</Link>
        </li>
        <li>
          <Link to='/?location=Sydney'>Sydney - Australia</Link>
        </li>
      </ol>
    </div>

  )
}

module.exports = Examples
