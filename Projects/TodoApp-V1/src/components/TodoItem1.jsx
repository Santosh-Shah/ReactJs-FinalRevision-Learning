function TodoItem1() {
  let todoDate = "4/10/2023";

  return (
    <div class="container">
      <div class="row ss-row">
        <div class="col-6">Buy Milk</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger ss-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
