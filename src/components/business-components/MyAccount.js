export function MyAccount() {
    return(
        <div className="container-fluid">

    <div className="row my-5 d-flex justify-content-center">
        <div className="col-12 col-lg-10">
            <div className="card border-0">
                <h2 className="card-header bgPurple text-white">Login</h2>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="form-group col-12 col-md-6">
                                <label className="font-weight-bold" for="exampleFormControlTextarea1">Username or email address*</label>
                                <input className="form-control" id="exampleFormControlTextarea1" rows="1"></input>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label className="font-weight-bold" for="exampleFormControlInput1">Password*</label>
                                <input type="password" className="form-control" id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p className="font-weight-bold">*Required</p>
                            </div>
                            <div className="col-12 mb-2">
                                <button type="submit" className="btn btn-lg bgPurple text-white px-3">Log in</button>
                            </div>
                            <div className="col-12">
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                                  </div>
                            </div>
                            <div className="col-12">
                                <a href="./password" className="text-decoration-none">Forgot your password?</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</div>
    );
}