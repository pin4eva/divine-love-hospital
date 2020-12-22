import React from "react";

const ApointmentModalComp = () => {
  return (
    <div className="appoint-model">
      <div className="container">
        <div className="col-12">
          <div className="row">
            <div
              className="modal fade order-model"
              id="exampleModal0"
              tabIndex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div className="modal-dialog log-sign" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel15"></h5>
                    <a
                      href="#"
                      className="download-close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span>X</span>
                    </a>
                  </div>
                  <div id="letter5">
                    <div className="letter_inner">
                      <div className="heading color-b">
                        <h2>Get an Appointment</h2>
                      </div>
                      <div className="model-project-details">
                        <div className="heading color-b">
                          <div className="tab-content">
                            <div
                              role="tabpanel"
                              className="tab-pane active tab-log"
                              id="profile2"
                            >
                              <form>
                                <div className="row">
                                  <div className="col-12 col-md-6">
                                    <div className="form-group">
                                      <label>your first name here</label>
                                      <input
                                        type="text"
                                        className="field-input"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6">
                                    <div className="form-group">
                                      <label>your Last name here</label>
                                      <input
                                        type="text"
                                        className="field-input"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6">
                                    <div className="form-group">
                                      <label>your email here</label>
                                      <input
                                        type="email"
                                        className="field-input"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6">
                                    <div className="form-group">
                                      <label>your phone number here</label>
                                      <input
                                        type="text"
                                        className="field-input"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-md-4">
                                    <div className="form-group">
                                      <label>your age here</label>
                                      <input
                                        type="text"
                                        className="field-input"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-4">
                                    <div className="form-group">
                                      <label>your gender here</label>
                                      <div className="gender-select wrap">
                                        <select>
                                          <option label=" "></option>
                                          <option value="1">male</option>
                                          <option value="2">female</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-4">
                                    <div className="form-group">
                                      <label>pick your date & time</label>
                                      <div className="datepick">
                                        <input
                                          type="date"
                                          id="datepicker"
                                          placeholder="dd/mm/yyyy hh.mm"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-12 col-md-12">
                                    <div className="form-group">
                                      <label>your message here</label>
                                      <textarea
                                        name="txtarea"
                                        className="field-input"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-btn test">
                                      <div className="btn-bar">
                                        <a
                                          href="#"
                                          className=""
                                          data-toggle="modal"
                                          data-target="#exampleModal0"
                                        >
                                          Submit
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApointmentModalComp;
