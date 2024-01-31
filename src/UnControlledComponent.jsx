import React, { useRef } from "react";

const UnControlledComponent = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <audio>
        <source src="horse.ogg" type="audio/ogg" />
        <source src="horse.mp3" type="audio/mpeg" />
      </audio>
      Your browser does not support the audio tag.
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default UnControlledComponent;
