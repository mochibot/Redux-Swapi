import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getChar } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getChar()
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      return <div>Fetching data</div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  characters: state.charsReducer.characters,
  isFetching: state.charsReducer.isFetching
})


// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getChar
  }
)(CharacterListView);
