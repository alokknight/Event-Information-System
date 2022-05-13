import React from 'react'
// import { Link, Navigate } from 'react-router-dom'
// import axios from 'axios';

export default function Sponsers() {
    return (
        <>
            <React.Fragment>
                {/* <div> */}
                {/* <section className='sponser mt-3'>
                <section id="sponsers">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Our Sponsers</h2>
                            <p className='text-justify text-info '>These are our target Sponsers</p>
                        </div>
                    </div>
                </section>
                <div className="container">
                <div className="row">
                    <div className="col text-center mb-5">
                        <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/H_M.png"  width = '200px' height='200px' alt="H & M Clothing Brand" />
                        <h2 className="h-secondary text-center my-3 text-warning ">H & M</h2>
                        <p className="text-center font-monospace ">One of the biggest clothing brands</p>
                    </div>
                    <div className="col text-center mb-5">
                        <img src="https://scontent.flko7-2.fna.fbcdn.net/v/t1.6435-9/45166188_1150974575079117_342009306637402112_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=BJpXGdQwWjUAX-EHSSC&_nc_ht=scontent.flko7-2.fna&oh=00_AT9jfvYh3auAE8m8NDM-rXLz0wU-Z9QrBsN9BcsLgq1Jog&oe=6299D09B" width = '200px' height='200px' alt="" />
                        <h2 className="h-secondary text-center my-3 text-warning ">10 Park Street Cafe and Kitchen</h2>
                        <p className="text-center font-monospace ">One of the best cafe in Gorakhpur</p>
                    </div>
                    <div className="col text-center mb-5">
                        <img src="https://scontent.flko7-1.fna.fbcdn.net/v/t1.6435-9/92242633_3347099411984805_367407741771186176_n.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QMrmlTfeMrAAX8MLLEd&_nc_ht=scontent.flko7-1.fna&oh=00_AT-4z7CGyUx71BnPuTGeMyTTa2rPTbN0pzdMlWG3uYdmkw&oe=6296FE27"  width = '200px' height='200px' alt="" />
                        <h2 className="h-secondary text-center my-3 text-warning ">Raddisson Blu Hotel and Restaurant</h2>
                        <p className="text-center font-monospace ">One of the biggest restaurant chains of India</p>
                    </div>
                    <div className="col text-center" >
                        <img src="https://scontent.flko7-1.fna.fbcdn.net/v/t1.18169-9/480217_369331406445336_329005628_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=yNh-NkBteSAAX-b0oFZ&_nc_ht=scontent.flko7-1.fna&oh=00_AT9nUvRGqdUPkeZiXqg1Vjkqebg_7Ud5wOKdbsoyFA2PQg&oe=62973137" width = '200px' height='200px' alt="" />
                        <h2 className="h-secondary text-center my-3 text-warning ">Forest Club, Gorakhpur</h2>
                        <p className="text-center font-monospace ">One of the best Event Venues in Gorakhpur</p>
                    </div>
                </div>
                </div>
            </section> */}





                {/* <section>
                <section id="client">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Our Clients</h2>
                            <p className='text-justify text-info '><i>These societies and companies are our potential customers.</i></p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">

                            <div className="col text-center mb-5">
                                <img src="https://scontent.flko7-2.fna.fbcdn.net/v/t31.18172-8/21688037_485211875178315_670914897082879798_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=973b4a&_nc_ohc=bsBaC1CVKfMAX-5IkWQ&_nc_ht=scontent.flko7-2.fna&oh=00_AT-_6XFsFA4GPsIYHaGc4Djvsa_6OzEj0RPkgoGCtTYixQ&oe=62995ED8" width = '200px' height='200px' alt="SYNOD" />
                                <h2 className="h-secondary text-center my-3 text-warning ">Cultural Synod</h2>
                            </div>
                            <div className="col text-center mb-5">

                                <img src="https://scontent.flko7-2.fna.fbcdn.net/v/t1.18169-9/10600493_501667106641350_5763888643399186087_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=mtodUFUuegcAX9oKdl2&_nc_ht=scontent.flko7-2.fna&oh=00_AT8VLyjnTBhTiwtRmSYCg3c_W2xYHKwePpgttQ1iUHKkaw&oe=6299090E" width = '200px' height='200px' alt="CES" />
                                <h2 className="h-secondary text-center my-3 text-warning ">CES</h2>
                            </div>
                            <div className="col text-center mb-5">
                                <img src="https://scontent.flko7-1.fna.fbcdn.net/v/t1.6435-9/205195999_4092556167448153_4474343235500797574_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=omCgocouA9sAX_cPxfa&_nc_ht=scontent.flko7-1.fna&oh=00_AT9vWHSpgvtCy_HTKmz7gNIlfQ3nielLAas_gTCStyyYNA&oe=6298659B"  width = '200px' height='200px' alt="Robotics" />
                                <h2 className="h-secondary text-center my-3 text-warning ">Robotics Club</h2>
                            </div>
                            <div className="col text-center" >
                                <img src="https://scontent.flko7-2.fna.fbcdn.net/v/t1.6435-9/120166394_3972374436112168_4198298997577003655_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5VpOE9S7NbgAX-PmXDR&_nc_ht=scontent.flko7-2.fna&oh=00_AT_kLOSmy9MKypbvXeGbOYbmuusSGFMqgcOT82kplITq_A&oe=62995A08"  width = '200px' height='200px' alt="Sports" />
                                <h2 className="h-secondary text-center my-3 text-warning ">Sports_MMMUT</h2>

                            </div>
                        </div>
                </div>
                </section>
            </section> */}
                {/* </div> */}
                {/* className="backgroundColorChange" */}
                <div className="mt-5">
                    <section>
                        <section id="sponsers">
                            <div className="container" data-aos="fade-up">
                                <div className="section-header">
                                    <h2>Our Sponsers</h2>
                                    <p>These are our target Sponsers</p>
                                </div>
                            </div>
                        </section>
                        <div className="container">
                        {/* <div class="card" style="width: 18rem;">
                            <img src="..." class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div> */}
                            <div className="row my-2 mx-2 d-flex flex-sm-row flex-column">
                                <div className="col text-center">
                                    {/* <img src={require("./Images/image.png")} alt="" /> */}
                                    <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/H_M.png" width='200px' height='200px' alt="H & M Clothing Brand" />
                                    <h2 className="h-secondary text-center my-2 text-warning ">H & M</h2>
                                    <p className="text-center font-monospace ">One of the biggest clothing brands</p>
                                </div>
                                <div className="col text-center mb-5">
                                    {/* <img src={require("./Images/image.png")} alt="" /> */}
                                    <img src="https://scontent.flko7-2.fna.fbcdn.net/v/t1.6435-9/45166188_1150974575079117_342009306637402112_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=BJpXGdQwWjUAX-EHSSC&_nc_ht=scontent.flko7-2.fna&oh=00_AT9jfvYh3auAE8m8NDM-rXLz0wU-Z9QrBsN9BcsLgq1Jog&oe=6299D09B" width='200px' height='200px' alt="" />
                                    <h2 className="h-secondary text-center my-2 text-warning ">10 Park Street Cafe and Kitchen</h2>
                                    <p className="text-center font-monospace ">One of the best cafe in Gorakhpur</p>
                                </div>
                                <div className="col text-center mb-5">
                                    {/* <img src={require("./Images/image.png")} alt="" /> */}
                                    <img src="https://scontent.flko7-1.fna.fbcdn.net/v/t1.6435-9/92242633_3347099411984805_367407741771186176_n.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QMrmlTfeMrAAX8MLLEd&_nc_ht=scontent.flko7-1.fna&oh=00_AT-4z7CGyUx71BnPuTGeMyTTa2rPTbN0pzdMlWG3uYdmkw&oe=6296FE27" width='200px' height='200px' alt="" />
                                    <h2 className="h-secondary text-center my-2 text-warning ">Raddisson Blu Hotel and Restaurant</h2>
                                    <p className="text-center font-monospace ">One of the biggest restaurant chains of India</p>
                                </div>
                                <div className="col text-center mb-5">
                                    {/* <img src={require("./Images/image.png")} alt="" /> */}
                                    <img src="https://scontent.flko7-1.fna.fbcdn.net/v/t1.18169-9/480217_369331406445336_329005628_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=yNh-NkBteSAAX-b0oFZ&_nc_ht=scontent.flko7-1.fna&oh=00_AT9nUvRGqdUPkeZiXqg1Vjkqebg_7Ud5wOKdbsoyFA2PQg&oe=62973137" width='200px' height='200px' alt="" />
                                    <h2 className="h-secondary text-center my-2 text-warning ">Forest Club, Gorakhpur</h2>
                                    <p className="text-center font-monospace ">One of the best Event Venues in Gorakhpur</p>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                        <section id="client">
                            <div className="container" data-aos="fade-up">
                                <div className="section-header">
                                    <h2>Our Clients</h2>
                                    <p>These societies and companies are our potential customers.</p>
                                </div>
                            </div>
                        </section>
                        <div>
                            <div className="container">
                                <div className="row my-2 mx-2 d-flex flex-sm-row flex-column">
                                    <div className="col text-center mb-5">
                                        <img src="https://scontent.flko7-2.fna.fbcdn.net/v/t31.18172-8/21688037_485211875178315_670914897082879798_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=973b4a&_nc_ohc=bsBaC1CVKfMAX-5IkWQ&_nc_ht=scontent.flko7-2.fna&oh=00_AT-_6XFsFA4GPsIYHaGc4Djvsa_6OzEj0RPkgoGCtTYixQ&oe=62995ED8" width='200px' height='200px' alt="SYNOD" />
                                        {/* <h2 className="h-secondary text-center my-3 text-warning ">Cultural Synod</h2> */}
                                    </div>
                                    <div className="col text-center mb-5">
                                        <img src="https://scontent.flko7-2.fna.fbcdn.net/v/t1.18169-9/10600493_501667106641350_5763888643399186087_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=mtodUFUuegcAX9oKdl2&_nc_ht=scontent.flko7-2.fna&oh=00_AT8VLyjnTBhTiwtRmSYCg3c_W2xYHKwePpgttQ1iUHKkaw&oe=6299090E" width='200px' height='200px' alt="CES" />
                                        {/* <h2 className="h-secondary text-center my-3 text-warning ">CES</h2> */}
                                    </div>
                                    <div className="col text-center mb-5">
                                        <img src="https://scontent.flko7-1.fna.fbcdn.net/v/t1.6435-9/205195999_4092556167448153_4474343235500797574_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=omCgocouA9sAX_cPxfa&_nc_ht=scontent.flko7-1.fna&oh=00_AT9vWHSpgvtCy_HTKmz7gNIlfQ3nielLAas_gTCStyyYNA&oe=6298659B" width='200px' height='200px' alt="Robotics" />
                                        {/* <h2 className="h-secondary text-center my-3 text-warning ">Robotics Club</h2> */}
                                    </div>
                                    <div className="col text-center mb-5">
                                        <img src="https://scontent.flko7-2.fna.fbcdn.net/v/t1.6435-9/120166394_3972374436112168_4198298997577003655_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5VpOE9S7NbgAX-PmXDR&_nc_ht=scontent.flko7-2.fna&oh=00_AT_kLOSmy9MKypbvXeGbOYbmuusSGFMqgcOT82kplITq_A&oe=62995A08" width='200px' height='200px' alt="Sports" />
                                        {/* <h2 className="h-secondary text-center my-3 text-warning ">Sports_MMMUT</h2> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </React.Fragment>
        </>
    )
}
