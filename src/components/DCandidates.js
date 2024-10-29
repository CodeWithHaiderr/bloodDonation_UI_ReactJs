import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidateAction";

const DCandidates = (props) => {
    // Use `useEffect` to call `fetchAllCandidates` when the component mounts
    useEffect(() => {
        props.fetchAllCandidates();
    }, []); // Empty dependency array to ensure it only runs on mount

    return (
        <div>
            FROM DCandidates
        </div>
    );
}

const mapStateToProps = state => ({
    DCandidateList : state.dCandidatesReducer.list
});

const mapActionToProps = {
    fetchAllCandidates : actions.fetchAll
};

export default connect(mapStateToProps, mapActionToProps)(DCandidates);
