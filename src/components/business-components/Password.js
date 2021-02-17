export function Password() {
    return (
        <div class="container-fluid">

            <div class="row my-5 d-flex justify-content-center">
                <div class="col-12 col-lg-10">
                    <div class="card border-0">
                        <p class="card-header bgPurple text-white">Forgot your password?</p>
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="form-group col-12 col-md-6">
                                        <label class="font-weight-bold" for="exampleFormControlTextarea1">Please enter your username or email address.<br />You will receive a link to create a new password via email.</label>
                                        <input class="form-control" id="passwordInput" rows="1" />
                                    </div>

                                </div>
                                <div class="row">

                                    <div class="col-12 mb-2">
                                        <button id="passwordButton" type="button" class="btn btn-lg bgPurple text-white px-3" data-toggle="modal" data-target="#exampleModal">
                                            Reset Password
                                      </button>
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