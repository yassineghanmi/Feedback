import React from 'react'

function Button({children,type,isDisabled,version,handleForm}) {
  return (
    <div>
      <button disabled={isDisabled} onClick={handleForm} type={type} className={`btn btn-${version}`}>{children}</button>
    </div>
  )
}

export default Button
