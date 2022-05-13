import React, { useEffect } from 'react'
import $ from 'jquery'

function CardCarousel() {
    useEffect(()=>{
        var multipleCardCarousel = document.querySelector(
          "#carouselExampleControls"
        );
        if (window.matchMedia("(min-width: 768px)").matches) {
        //   var carousel = new Carousel(multipleCardCarousel, {
        //     interval: false,
        //   });
          var carouselWidth = $(".carousel-inner")[0].scrollWidth;
          var cardWidth = $(".carousel-item").width();
          var scrollPosition = 0;
          $("#carouselExampleControls .carousel-control-next").on("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 4) {
              scrollPosition += cardWidth;
              $("#carouselExampleControls .carousel-inner").animate(
                { scrollLeft: scrollPosition },
                600
              );
            }
          });
          $("#carouselExampleControls .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
              scrollPosition -= cardWidth;
              $("#carouselExampleControls .carousel-inner").animate(
                { scrollLeft: scrollPosition },
                600
              );
            }
          });
        } else {
          $(multipleCardCarousel).addClass("slide");
        }
      },[])
  return (
    <div>
        <div id="carouselExampleControls" className="carousel" data-bs-ride="carousel">
            <div className="carousel-inner text-center">
                <div className="carousel-item active">
                    <div className="card">
                        <div className="img-wrapper"><img src="https://images.unsplash.com/photo-1612359383347-245649cbb9d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="Gallery" /> </div>
                        <div className="card-body">
                            <h5 className="card-title">Seminar</h5>
                        
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <div className="img-wrapper"><img src="https://images.unsplash.com/photo-1506485927884-1900e37ac5ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGolMjBuaWdodHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="Gallery" /> </div>
                        <div className="card-body">
                            <h5 className="card-title">DJ Night</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <div className="img-wrapper"><img src="https://scontent.flko7-1.fna.fbcdn.net/v/t39.30808-6/275678489_3182207368667034_4909183574688601555_n.jpg?_nc_cat=106&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=W2FnDHpw0jQAX8My2sZ&_nc_ht=scontent.flko7-1.fna&oh=00_AT9Dedl-NITdMb1O5nwE7wvsazvwh0yiFrBIdjAIil8sGA&oe=627FEB29" className="d-block w-100" alt="Gallery" /> </div>
                        <div className="card-body">
                            <h5 className="card-title">Comedy Night</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <div className="img-wrapper"><img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="Gallery" /> </div>
                        <div className="card-body">
                            <h5 className="card-title">Concert</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <div className="img-wrapper"><img src="https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="Gallery" /> </div>
                        <div className="card-body">
                            <h5 className="card-title">Band</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <div className="img-wrapper"><img src="https://images.unsplash.com/photo-1474308371634-c715850e8d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JvdXAlMjBkYW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="Gallery" /> </div>
                        <div className="card-body">
                            <h5 className="card-title">Group Dance</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <div className="img-wrapper"><img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uZmVyZW5jZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="Gallery" /> </div>
                        <div className="card-body">
                            <h5 className="card-title">Conferences</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <div className="img-wrapper"><img src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="Gallery" /> </div>
                        <div className="card-body">
                            <h5 className="card-title">Parties</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <div className="img-wrapper"><img src="https://images.unsplash.com/photo-1514195037031-83d60ed3b448?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="Gallery" /> </div>
                        <div className="card-body">
                            <h5 className="card-title">Art Galleries</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default CardCarousel