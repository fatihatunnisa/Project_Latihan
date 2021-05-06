import react, {Component} from 'react';

class Login extends Component {
    render (){
        retrun (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2>Login</h2>
                            <form>
                            <div className="form-group">
                            <label for="exampleInputEmail">Username</label>
                            <input type="email" className="form-control" placeholder="Masukan Username Anda" required/>
                            </div>
                            <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="Masukan Password Anda" required/>
                            </div>
                            <button type ="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
                            </form>
                    </div>
                </div>
            </div>
            );
    }
}
export default Login;