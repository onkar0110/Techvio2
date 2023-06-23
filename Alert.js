import React from 'react'



function Alert(props) {
   
  return (
    <div>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alert && props.alert.msg}</strong> 
        </div>
        
      
    </div>
  )
}

export default Alert
