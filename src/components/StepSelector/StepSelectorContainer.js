import { connect } from "react-redux";
import * as timerActions from "../../redux/timer/timerActions";
import * as timerSelectors from "../../redux/timer/timerSelectors";
import stepSelector from "./StepSelector";

const mapStateToProps = state => ({
  value: timerSelectors.getStep(state)
});

const mapDispatchToProps = dispatch => ({
  onChange: step => dispatch(timerActions.changeStep(step.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(stepSelector);
