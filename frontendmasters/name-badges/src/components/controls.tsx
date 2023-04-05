import React from 'react';

const ControlPanel = (props: { name: string, onChange: React.ChangeEvent<HTMLInputElement> }) => {
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
          value={props.name}
          onChange={props.onChange}
        />
      </div>
    </form>
  );
};

export default ControlPanel;
