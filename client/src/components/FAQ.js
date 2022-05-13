import React, { useState } from 'react'

export default function FAQ() {
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    })
    const [btntext, setBtnTxt] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (myStyle.color === "white") {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnTxt("Enable Dark Mode")
        }
        else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnTxt("Enable Light Mode")
        }
    }
    return (
        <div className="container topmargin" style={myStyle}>

            <section id="FAQ-container">
                <section id="FAQ">
                <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2 style={myStyle}>FAQ</h2>
                    <p>If u have any doubt contact me!!</p>
                </div>
                </div>
                </section>
            </section>

            {/* <h3 className="text-center">FAQ</h3> */}

            <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong> What should i know before planning for an Event?</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body lead">
                                <strong>The true nature of an event management solution are similar to those of a monitor:</strong> while the hands shift around the monarch, the gears inside drive the action. On the day of the event, an event planner is in charge of all the behind-the-scenes details, such as ensuring that the food is served on time that the entertainment is available, that the visitors will find a parking space, and that all of the guests are taken care of.All you should be knowing is to choose the right event planner and be ready to enjoy the awesome day.
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item" style={myStyle} >
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Why Do I Need an Event Planner?</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body lead">
                            The primary objective and responsibility of an event planner is to assist you in being focused and organised. We're here to keep you on track, recommend trustworthy suppliers, include a wealth of services, bargain on your behalf, and see that your vision is realised. If you hire us for services, we will not only schedule your case, but we will also respond quickly to any potential surprises that might arise with 24/7 support and personal guidance.
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>What Separates Us From Other Event Planners?</strong>

                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body lead">
                            It all gets close to it all: we'll manage your event as though it were our own. We'll be there to help you visualize your goals and find out what your choices are. We will provide you with end to end service and will be there to ensure a successful event, unlike larger event planning services.
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <strong> What Types of Events Does Only in My Dreams Plan?</strong>

                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body lead">
                            We are happy to help you organize any type of event. From your dream wedding with hundreds of guests to corporate/non-profit meetings and all in between, we will help. We would turn your vision a reality no matter what your desires or budget.
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <strong>How Do I Select Your Event Vendors?</strong>
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body lead">
                            Along with our considerable experience with event organising and several other activities, we have developed strong relationships with a number of high-quality vendors in Gorakhpur. A big part of our work is reviewing each vendor and making sure they're the best in their sectors and have all of the necessary approvals. We really like to partner with suppliers that are enjoyable to work with, as we think it helps the whole planning process go more seamlessly.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            <strong>Do we charge separately for your various event services?</strong>

                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div className="accordion-body lead">
                            A few of our services are included in cost, while others may be charged separately. Call us just to meet with one of our event planners to get an estimate of how much the event would cost. They will provide you with a free estimate depending on your specific requirements.
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingSeven">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            <strong>Do You Provide Last Minute Event Management Services?</strong>

                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div className="accordion-body lead">
                            Yes, is the simple answer? we are entirely comfortable functioning in a high-stress, last-minute environment, so don't hesitate to contact us if you need to organize a last-minute event. We'll let you know if it's not practical, but our motto is that "there's always a way."
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingEight">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            <strong>Can I Just Get Your Help With One Aspect Of My Event?</strong>
                            </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                            <div className="accordion-body lead">
                            Well, truly! We can manage all types of an event or include only the facilities you need for a specific event. Venue finding, onsite event management, event registration, event managed services, team bonding events, executive training sessions, and several other resources are available.
                            </div>
                        </div>
                    </div>

            </div>

            <div className="container my-3" style={myStyle}>
                <button className="btn transonclick btn-primary" onClick={toggleStyle}>{btntext}</button>
            </div>

            <br/>
        </div>

    )
}
