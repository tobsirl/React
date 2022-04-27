export default function Box({ on }) {
  /**
   * Challenge: Create state controlling whether
   * this box is "on" or "off". Use the incoming
   * `props.on` to determine the initial state.
   *
   * Create an event listener so when the box is clicked,
   * it toggles from "on" to "off".
   *
   * Goal: clicking each box should toggle it on and off.
   */
  const styles = {
    backgroundColor: on ? '#222222' : 'none',
  };

  return <div className="box" style={styles}></div>;
}
