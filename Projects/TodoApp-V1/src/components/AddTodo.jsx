function AddTodo() {
  return (
    <div class="container text-container">
      <div class="row ss-row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo Here"></input>
        </div>

        <div class="col-4">
          <input type="date"></input>
        </div>

        <div class="col-2">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
