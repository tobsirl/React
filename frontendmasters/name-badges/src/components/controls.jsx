import PropTypes from 'prop-types';

const ControlPanel = ({ name, onChange }) => {
  return (
    <form
      className="bg-primary-10 flex flex-row gap-4 text-white"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <label className="font-bold">Your Name</label>
        <input
          name="name"
          className="w-full"
          type="text"
          value={name}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

ControlPanel.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default ControlPanel;
