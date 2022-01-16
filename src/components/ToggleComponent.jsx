import useToggle from "../hooks/useToggle";

function ToggleComponent() {
  const [value, toggleValue] = useToggle();
  console.log("ToggleComponent rendered");
  return (
    <>
      <h2>{value.toString()}</h2>
      <button
        onClick={() => {
          toggleValue();
        }}>
        toggle
      </button>
      <button
        onClick={() => {
          toggleValue(true);
        }}>
        make true
      </button>
      <button
        onClick={() => {
          toggleValue("");
        }}>
        empty string
      </button>
      <button
        onClick={() => {
          toggleValue([]);
        }}>
        change to empty array
      </button>
      <button
        onClick={() => {
          toggleValue(null);
        }}>
        change to null
      </button>
    </>
  );
}

export default ToggleComponent;
