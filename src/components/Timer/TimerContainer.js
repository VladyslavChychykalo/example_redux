import { connect } from "react-redux";
import * as timerActions from "../../redux/timer/timerActions";
import Timer from "./Timer";
import * as timerSelectors from "../../redux/timer/timerSelectors";
import { compose } from "redux";
import withRenderLog from "../hoc/withRenderLog";

const mapStateToProps = state => ({
  value: timerSelectors.getValue(state),
  step: timerSelectors.getStep(state)
});

const mapDispatchToProps = dispatch => ({
  onIncrement: step => dispatch(timerActions.increment(step)),
  onDecrement: step => dispatch(timerActions.decrement(step))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRenderLog
)(Timer);
