import { useState } from "react";

/**
 * Form for creating a new box to add to a list.
 *
 * State:
 * - formData: Object like { height, width, backgroundColor }
 *
 * NewBoxForm -> <form/>
 */

function NewBoxForm({ addBox }) {

  const initialState = {
    height: "",
    width: "",
    backgroundColor: ""
  };
  const [formData, setFormData] = useState(initialState);

  /**
  * Send { height, width, backgroundColor } to parent and clear form.
  */

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  console.log("Our current state:", formData);

  /**
  * Update local state with current state of input elements.
  */

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <button>Add a new box!</button>
    </form>
  );

}

export default NewBoxForm;