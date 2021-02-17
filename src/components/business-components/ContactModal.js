export function ContactModal() {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title" id="exampleModalLabel">Message Sent</p>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div id="newsletterConfirmation" className="modal-body">
                        Thank you for writing to us!
        </div>
                    <div className="modal-footer">
                        <a type="button" className="btn btn-secondary" href="../index.html">Back to the homepage</a>
                    </div>
                </div>
            </div>
        </div>
    );
}