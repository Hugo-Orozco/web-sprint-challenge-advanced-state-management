import { connect } from 'react-redux';
import React from 'react';

import { addSmurf } from './../actions';

class AddForm extends React.Component {
    state = {
        name: "",
        position: "",
        nickname: "",
        description: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({
            name: "",
            position: "",
            nickname: "",
            description: ""
        });
    }

    render() {
        const { error } = this.props;

        return(<section>
            <h2>Add Smurf</h2>

            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input value={this.state.name} onChange={this.handleChange} name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position:</label><br/>
                    <input value={this.state.position} onChange={this.handleChange} name="position" id="position" />
                </div>
                <div className="form-group">
                    <label htmlFor="nickname">Nickname:</label><br/>
                    <input value={this.state.nickname} onChange={this.handleChange} name="nickname" id="nickname" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label><br/>
                    <input value={this.state.description} onChange={this.handleChange} name="description" id="description" />
                </div>
                {
                    error && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {error}</div>
                }
                
                <button>Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = state => {
    return ({
        error: state.error
    });
}
export default connect(mapStateToProps, {addSmurf})(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.