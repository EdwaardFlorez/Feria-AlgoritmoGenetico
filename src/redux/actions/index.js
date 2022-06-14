import FlaskApi from "../apis/FlaskApi";

const executionAction = (coordinates) => {
  return async function (dispatch, getState) {
    const response = await FlaskApi.post("/islands", coordinates);
    dispatch({ type: "GENETIC", payload: response });
  };
};

export default executionAction;

/* export const selectSong = (Song) => {
  return {
    type: "SONG_SELECTED",
    payload: Song,
  };
}; */
