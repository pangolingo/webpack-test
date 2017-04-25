import React from 'react';

class PageHeadline extends React.Component {
    render(){
        return <h1>{this.props.text}</h1>;
    }
}

PageHeadline.propTypes = {
    text: React.PropTypes.string.isRequired
}

export default PageHeadline