import React from "react";
import NavAdmin from "../../component/NavAdmin";
import Sidebar from "../../component/Sidebar";

const EditPortfolio = () => {
  return (
    <div>
      <div class="col-lg-12 mb-4">
        <div class="col-sm-12 p-2">
          <div class="card p-4">
            <div class="mb-3">
              <label for="title" class="form-label">
                Keterangan
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="subTitle" class="form-label">
                Image
              </label>
              <input className="form-control" type="file" id="photo" />
            </div>
            <div class="mb-3">
              <label for="deskripsi" class="form-label">
                Deskripsi
              </label>
              <textarea class="form-control"></textarea>
            </div>

            <button class="btn btn-primary">Simpan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPortfolio;
