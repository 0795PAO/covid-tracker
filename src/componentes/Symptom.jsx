import React from "react"
import "./symptom.css";

const Symptom = () => {
    return (
        <>
            <div className="symptom-wrapper padding-v100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title text-center">
                                <h5 className="has-animation" data-delay="0">Symptom</h5>
                                <h2 className="has-animation" data-delay="50">Basic Symptom Against Corona virus</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="symptom owl-carousel owl-theme owl-loaded owl-drag">
                            <div className="owl-stage-outer">
                                <div className="owl-stage">
                                    <div className="owl-item">
                                        <div className="owl-items">
                                            <div className="symptom-content has-animation">
                                                <span>
                                                    <img src=""></img>
                                                </span>
                                                <h4 className="mb-3">Fever</h4>
                                                <p>"Fever you feel hot to touch on your chest or back (you do not need to measure your temperature). It is also may appear in 2-10 day."</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item">
                                        <div className="owl-items">
                                            <div className="symptom-content has-animation" data-delay="50">
                                                <span>
                                                    <img src=""></img>
                                                </span>
                                                <h4 className="mb-3">Cougt</h4>
                                                <p>"Continuous coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours.if you usually have a cough, it may be worse than usual."</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item">
                                        <div className="owl-items">
                                            <div className="symptom-content has-animation" data-delay="100">
                                                <span>
                                                    <img src=""></img>
                                                </span>
                                                <h4 className="mb-3">Confusion</h4>
                                                <p>"Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing or shortness of breath a lot."</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item">
                                        <div className="owl-items">
                                            <div className="symptom-content has-animation" data-delay="150">
                                                <span>
                                                    <img src=""></img>
                                                </span>
                                                <h4 className="mb-3">Aches and pains</h4>
                                                <p>"Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 100."</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item">
                                        <div className="owl-items">
                                            <div className="symptom-content has-animation" data-delay="200">
                                                <span>
                                                    <img src=""></img>
                                                </span>
                                                <h4 className="mb-3">Runny nose</h4>
                                                <p>"People of all ages who experience fever and/or  cough associated withdifficulty breathing/shortness of breath."</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item">
                                        <div className="owl-items">
                                            <div className="symptom-content has-animation" data-delay="250">
                                                <span>
                                                    <img src=""></img>
                                                </span>
                                                <h4 className="mb-3">Runny nose</h4>
                                                <p>"Older people, and those with underlying medical problems like high blood pressure, heart and lung problems, diabetes, or cancer."</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-nav disabled">
                                <button type="button" role="presentation" className="owl-prev">
                                    <span aria-label="Previous">{'>'}</span>
                                </button>
                            </div>
                            <div className="owl-dots disabled"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Symptom;
