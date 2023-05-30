export default function Form() {
  function handleSubmit(event) {
    event.preventDefault();

    //TODO: get data from form
    const formData = new FormData(event.target);
    const rawData = Object.fromEntries(formData);

    const data = {
      ...rawData,
      box: rawData.box ? true : false,
    };

    alert("sending data:\n" + JSON.stringify(data, null, 2));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" />
      <input type="checkbox" name="box" />
      <textarea id="" cols="30" rows="10" name="area"></textarea>
      <button type="submit">submit</button>
    </form>
  );
}
