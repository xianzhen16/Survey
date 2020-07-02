import React, { Component } from "react";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      satisfaction: ""
    };
  }

  submitFormHandler(){
    window.location.replace("/thanks");
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>University Dining Survey</h3>
        </header>
        <form onSubmit={this.submitFormHandler}>
                <div className="form-group row">
                    <label className="col-6">Were you satisfied with the service of Sherman and Usdan last semester?</label>
                    <div className="col-6">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input name="satisfaction" id="satisfaction_0" type="radio" className="custom-control-input" value="1" required="required"/>
                            <label htmlFor="satisfaction_0" className="custom-control-label">Yes</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input name="satisfaction" id="satisfaction_1" type="radio" className="custom-control-input" value="0" required="required"/>
                            <label htmlFor="satisfaction_1" className="custom-control-label">No</label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-6">Which cafeteria do you prefer to go?</label>
                    <div className="col-6">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input name="cafeteria" id="cafeteria_0" type="radio" className="custom-control-input" value="0" required="required"/>
                            <label htmlFor="cafeteria_0" className="custom-control-label">Sherman</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input name="cafeteria" id="cafeteria_1" type="radio" className="custom-control-input" value="1" required="required"/>
                            <label htmlFor="cafeteria_1" className="custom-control-label">Usdan</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input name="cafeteria" id="cafeteria_2" type="radio" className="custom-control-input" value="2" required="required"/>
                            <label htmlFor="cafeteria_2" className="custom-control-label">Other</label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-6">Using 1-5 to indicate the serving quality of the cafeterias last semester:</label>
                    <div className="col-6">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input name="quality" id="quality_0" type="radio" className="custom-control-input" value="0" required="required"/>
                            <label htmlFor="quality_0" className="custom-control-label">1</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input name="quality" id="quality_1" type="radio" className="custom-control-input" value="1" required="required"/>
                            <label htmlFor="quality_1" className="custom-control-label">2</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input name="quality" id="quality_2" type="radio" className="custom-control-input" value="2" required="required"/>
                            <label htmlFor="quality_2" className="custom-control-label">3</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input name="quality" id="quality_3" type="radio" className="custom-control-input" value="3" required="required"/>
                            <label htmlFor="quality_3" className="custom-control-label">4</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input name="quality" id="quality_4" type="radio" className="custom-control-input" value="4" required="required"/>
                            <label htmlFor="quality_4" className="custom-control-label">5</label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-6">What do you think about the quality and taste of food of the cafeterias?</label>
                    <div className="col-6">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input name="food" id="food_0" type="radio" className="custom-control-input" value="0" required="required"/>
                            <label htmlFor="food_0" className="custom-control-label">Good</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input name="food" id="food_1" type="radio" className="custom-control-input" value="1" required="required"/>
                            <label htmlFor="food_1" className="custom-control-label">Acceptable</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input name="food" id="food_2" type="radio" className="custom-control-input" value="2" required="required"/>
                            <label htmlFor="food_2" className="custom-control-label">Bad</label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-6">What do you think about the retail service in C-store and Upper Usdan?</label>
                    <div className="col-6">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input name="retail" id="retail_0" type="radio" className="custom-control-input" value="0" required="required"/>
                            <label htmlFor="retail_0" className="custom-control-label">Good</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input name="retail" id="retail_1" type="radio" className="custom-control-input" value="1" required="required"/>
                            <label htmlFor="retail_1" className="custom-control-label">Acceptable</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input name="retail" id="retail_2" type="radio" className="custom-control-input" value="2" required="required"/>
                            <label htmlFor="retail_2" className="custom-control-label">Bad</label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="offset-4 col-8">
                        <button name="submit" type="button" onClick={this.submitFormHandler} className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>

      </div>
    );
  }
}
