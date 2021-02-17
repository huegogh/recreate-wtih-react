import { ContactModal } from './ContactModal.js';

export function Contact() {
    return (
        <div className="container-fluid">

            <div className="row my-5 d-flex justify-content-center">
                <div className="col-12 col-lg-10">
                    <div className="card border-0">
                        <h2 className="card-header bgPurple text-white">Send us a message</h2>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="form-group col-12 col-md-6">
                                        <label className="font-weight-bold" for="contactName">First & Last Name</label>
                                        <input id="contactName" className="form-control" id="exampleFormControlTextarea1" rows="1"></input>
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label className="font-weight-bold" for="contactEmail">Email Address</label>
                                        <input id="contactEmail" type="email" className="form-control" id="exampleFormControlInput1"
                                            placeholder="Big.Panda@ninjapandas.com"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <label className="font-weight-bold" for="contactSubject">Subject</label>
                                        <input id="contactSubject" className="form-control" id="exampleFormControlTextarea1"></input>
                                    </div>
                                    <div className="form-group col-12">
                                        <label className="font-weight-bold" for="contactMessage">Your Message</label>
                                        <textarea id="contactMessage" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <button id="contactButton" type="button" className="btn btn-lg bgPurple text-white" data-toggle="modal" data-target="#exampleModal">
                                            Send
                                  </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

            <ContactModal />

        </div>
    );
}