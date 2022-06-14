import React from "react";

import { connect } from "react-redux";

const Graphics = (props) => {
  return (
    <div>
      <button onClick={() => console.log(props)}>Click me</button>
    </div>
  );
};

/* state is the store object? */
const mapStateToProps = (state) => {
  return {
    genetic: state.genetic,
  };
};

export default connect(mapStateToProps)(Graphics);
