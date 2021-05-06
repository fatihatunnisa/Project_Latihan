import react, {Component} from 'react';
class Grid extends Component{
    render (){
        retrun (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-6 test">
                    </div>
                    <div className="col-md-6 col-6 test">
                    </div>
                    <div className="col-md-6 col-6 test">
                    </div>
                    <div className="col-md-6 col-6 test">
                    </div>
                </div>
            </div>
            );
    }
}
export default Grid;