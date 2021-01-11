import { Fragment } from "react";
import PropTypes from "prop-types";

const Title = props => (
    <Fragment>
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{props.title}</div>
    </Fragment>
);

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title;