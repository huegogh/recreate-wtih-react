import { ClassesModal } from './ClassesModal.js';
export function Classes() {
    return (
        <div className="container-fluid">

            <div className="row my-5 d-flex justify-content-center">
                <div className="col-12 col-lg-10">
                    <div className="card border-0">
                        <h2 className="card-header bgPurple text-white">Classes | Lodi,CA</h2>
                        <div className="card-body">
                            <div className="row d-flex justify-content-around font-weight-bold">
                                <div className="col-10 col-md-4">
                                    <p className="font-weight-bold lead textPurple mb-0">Ninja Panda HQ</p>
                                    <p>5 1/2 W Pine Street Suite 2,<br />Lodi CA 95240</p>
                                </div>
                                <div className="col-10 col-md-4">
                                    <p className=" font-weight-bold lead textPurple mb-0">World of Wonders Museum</p>
                                    <p>2 North Sacramento Street,<br />Lodi CA 95240</p>
                                </div>
                            </div>
                            <hr className="" />
                            <div className="row d-flex justify-content-between">

                                {['Name', 'Summary', 'Location', 'Price'].map(x =>
                                    <div className="col-12 col-md-2">
                                    <p className="font-weight-bold lead textPurple">
                                        {x}
                                </p>
                                </div>
                                    )}
        
                                <div className="col-2"></div>
                            </div>
                            <hr className="mt-0" />
                            <div className="row d-flex justify-content-between">
                                <div className="col-12 col-md-2">
                                    <p className="font-weight-bold">Intro to CTF</p>
                                </div>
                                <div className="col-12 col-md-2">
                                    <p>Introduction to Capture the flag<br />(High School Students)</p>
                                </div>
                                <div className="col-12 col-md-2">
                                    <p className="font-weight-bold">HQ</p>
                                </div>
                                <div className="col-12 col-md-2">
                                    $20.00
                            </div>
                                <div className="col-12 col-md-2 py-3 py-md-0">
                                    <button type="button" className="btn bgPurple text-white" data-toggle="modal" data-target="#exampleModal">
                                        Buy
                                  </button>
                                </div>
                            </div>
                            <div className="d-block d-md-none"><hr /></div>
                            <div className="row d-flex justify-content-between">
                                <div className="col-12 col-md-2">
                                    <p className="font-weight-bold">MIT's Scratch</p>
                                </div>
                                <div className="col-12 col-md-2">
                                    <p>Introduction to MIT's Scratch Programming Language<br />(all ages)</p>
                                </div>
                                <div className="col-12 col-md-2">
                                    <p className="font-weight-bold">WOW</p>
                                </div>
                                <div className="col-12 col-md-2">
                                    $15.00
                            </div>
                                <div className="col-12 col-md-2 py-3 py-md-0">
                                    <button type="button" className="btn bgPurple text-white" data-toggle="modal" data-target="#exampleModal">
                                        Buy
                                  </button>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-between">
                                <div className="col-12 col-md-2">
                                    <p className="font-weight-bold">AMA | Game Programmer</p>
                                </div>
                                <div className="col-12 col-md-2">
                                    <p>Meet a real Game Programmer<br />(All Ages)</p>
                                </div>
                                <div className="col-12 col-md-2">
                                    <p className="font-weight-bold">HQ</p>
                                </div>
                                <div className="col-12 col-md-2">
                                    FREE
                            </div>
                                <div className="col-12 col-md-2 py-3 py-md-0">
                                    <button type="button" className="btn bgPurple text-white" data-toggle="modal" data-target="#exampleModal">
                                        Buy
                                  </button>
                                </div>
                            </div>
                            <div className="d-block d-md-none"><hr /></div>
                        </div>
                    </div>
                </div>
            </div>

            <ClassesModal />

        </div>
    );
}