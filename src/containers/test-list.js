import React, {Component} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { select } from '../action/index';

class TestList extends Component {
    showList () {
        return this.props.test.map ((test) => {
            return (
                  <li onClick={() => this.props.select(test)} key={test.id}>{test.model}</li>      
            );
        });
    }
    render() {
        return(<div>
                    <ol>
                        {this.showList ()}
                    </ol>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        test: state.test
    };
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TestList);