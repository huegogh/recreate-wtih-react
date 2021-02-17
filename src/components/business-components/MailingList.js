export function MailingList() {
    return(
        <div className="row my-5 d-flex justify-content-center">
                <div className="col-10">
                    <div className="card border-0">
                        <p className="card-header bgPurple text-white">Join our Mailing List</p>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label className="font-weight-bold" for="newsletterName">First & Last
                                            Name</label>
                                            <input className="form-control" id="newsletterName" rows="1"></input>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label className="font-weight-bold" for="newsletterEmail">Email
                                            Address</label>
                                            <input type="email" className="form-control" id="newsletterEmail"
                                                placeholder="Big.Panda@ninjapandas.com"></input>
                                        </div>
                                    </div>
                                </div>
                            <button id="newsletterButton" type="button" className="btn bgPurple text-white"
                                    data-toggle="modal" data-target="#exampleModal">
                                    Keep me upated!
                            </button>
                            </form>
                        </div>
                        <div className="height100">
                            <img src="./images/computer.jpeg" alt="" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
    );
}