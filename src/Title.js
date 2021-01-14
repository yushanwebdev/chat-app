import { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";

class Title extends PureComponent {
    render() {
        console.log("Title rendered.");
        return(
            <Fragment>
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{this.props.title}</div>
            </Fragment> 
        )
    }
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title;