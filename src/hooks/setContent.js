import React from "react";
import PropTypes from "prop-types";
import {Helmet} from "react-helmet";

function SetContent({chartData: {html, script}}) {
    return (
        <>
            <Helmet>
                <script src={script} />
            </Helmet>
            <div className="content" dangerouslySetInnerHTML={{__html: html}} />
        </>
    );
}

SetContent.propTypes = {
    chartData: PropTypes.object.isRequired
}

export default SetContent;
