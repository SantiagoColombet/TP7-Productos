import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Productos({ producto }) {

  return (
    <div class="card" style={{ width: '18rem' }}>
        <img src={producto.image} class="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{producto.title}</h5>
        <p className="card-text">{producto.description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    
  )
}

export default Productos