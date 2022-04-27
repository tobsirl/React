export default function Box({ on }) {
  const styles = {
    backgroundColor: on ? '#222222' : '#cccccc',
  };

  return <div className="box" style={styles}></div>;
}
