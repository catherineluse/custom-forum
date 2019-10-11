<form onSubmit={this.handleAddCommunity}>
  <h1>Community Form</h1>
  <div className="form-group">
    <label>Community Name</label>
    <input
      type="text"
      class="form-control"
      id="newCommunityName"
      onChange={this.handleChangename}
      required
    />
  </div>
  <div className="form-group">
    <label>Description</label>
    <textarea
      class="form-control"
      id="newCommunityDescription"
      rows="3"
      onChange={this.handleChangeDescription}
    ></textarea>
  </div>
  <div className="form-group">
    <button type="submit" className="btn btn-primary mr-2">
      Register
    </button>
    <button type="reset" className="btn btn-secondary">
      Reset
    </button>
  </div>
</form>;
