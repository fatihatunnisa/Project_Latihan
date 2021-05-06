import React, { Component } from 'react';
class Home extends Component {
    render(){
        retrun (
            <div className="slider">
                <div className="container sliderimage">
                    <div className="row">
                        <img className="img-fluid rounded slide" alt="Reponsive Image" src={require('../gambar/12.jpg')}/>
                        </div>
                        </div>
                    <div className="container notive">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="alert alert-denger denger" role="alert">
                                    <p className="text-white text-center">A simple succes alert-check it out!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="container slide">
                    <div className="row">
                    <div className="col-md-8">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ri></div>

                    </div>
                    </div>
                </div>
            )
    }
}
export default Home;