import { Fragment } from 'react';

const Title = props => (
    <Fragment>
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{props.title}</div>
    </Fragment>
);

export default Title;