import React from 'react'

const Carousel = () => {
  return (
//     <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//     <ol className="carousel-indicators">
//       <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//       <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//       <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//     </ol>
//     <div className="carousel-inner">
//       <div className="carousel-item active">
//         <img style={{width:"100%",height:"700px"}} src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg" className="d-block w-100" alt="..." />
//       </div>
//       <div className="carousel-item">
//         <img style={{width:"100%",height:"700px"}} src="https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=2000" className="d-block w-100" alt="..." />
//       </div>
//       <div className="carousel-item">
//         <img style={{width:"100%",height:"700px"}} src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000" className="d-block w-100" alt="..." />
//       </div>
//     </div>
//     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span className="sr-only"></span>
//     </a>
//     <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//       <span className="carousel-control-next-icon" aria-hidden="true"></span>
//       <span className="sr-only"></span>
//     </a>
//   </div>
<div id="carouselExampleFade" className="carousel slide carousel-fade" style={{height:"20vh !important"}}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg" className="d-block w-100" style={{height:"90vh"}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=2000" className="d-block w-100" style={{height:"90vh"}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000" className="d-block w-100" style={{height:"90vh"}} alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" style={{marginTop:"260px"}}>
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" style={{marginTop:"260px"}}>
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

  )
}

export default Carousel