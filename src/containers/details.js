import React, {Component} from "react";
import { connect } from "react-redux";

class Details extends Component {
    render() {
        if (!this.props.test) {
            return (<p>Выберите автомобиль...</p>);
        }
        return (
            <div>
                <h2>{this.props.test.model}</h2>
                <h1>{this.props.test.speed}</h1>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        test: state.activetest
    };
}

export default connect (mapStateToProps)(Details);