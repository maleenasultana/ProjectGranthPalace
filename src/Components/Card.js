import React from 'react'

const Card = () => {
  return (
    <div>

<div className="row">
<div className="col-sm-3">
<div className="card card-block">
  <img className="card-img-top" data-src="holder.js/100px180/" alt="100%x180" src="https://th.bing.com/th/id/OIP.o-qMG3cMo5fv0IpatAgiLgHaLY?w=126&h=194&c=7&r=0&o=5&pid=1.7" data-holder-rendered="true" style={{height: '150px', width: '120px', display: 'block',  display:'flex', direction:'column'}}/>
  <div className="card-block">
    <h4 className="card-title" >Card title</h4>
    <p className="card-text"></p>
    <a href="#" className="btn btn-primary">Button</a>
  </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Card