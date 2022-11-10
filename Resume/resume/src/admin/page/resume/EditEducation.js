import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { EDIT_EDUCATION } from "../../../GraphQl/Mutation";
import Swal from "sweetalert2";
import Loading from "../../../component/Loading";

const EditResume = (props) => {
  const [description, setDeskripsi] = useState("");
  const [education, setEducation] = useState("");
  const [first, setFirst] = useState("");
  const [Last, setLast] = useState("");
  const [sub, setSub] = useState("");

  const [AddEdu, { Loading: updateLoading }] = useMutation(EDIT_EDUCATION);

  if (updateLoading) {
    return <Loading />;
  }

  console.log(props.idx);

  const addEdu = async (e) => {
    e.preventDefault();
    await AddEdu({
      variables: {
        id: props.idx,
        description: description,
        education: education,
        first_year: first,
        last_year: Last,
        sub_description: sub,
      },
    });
    Swal.fire("Sukses", "Data Berhasil Disimpan !", "success");
  };

  return (
    <div>
      <div class="card p-4">
        <div class="mb-3">
          <label class="form-label">Education</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => {
              setEducation(e.target.value);
            }}
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Awal Tahun</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => {
              setFirst(e.target.value);
            }}
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Akhir Tahun</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => {
              setLast(e.target.value);
            }}
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Jurusan</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => {
              setSub(e.target.value);
            }}
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Deskription</label>
          <textarea
            class="form-control"
            onChange={(e) => {
              setDeskripsi(e.target.value);
            }}
            required
          />
        </div>

        <button class="btn btn-primary" onClick={addEdu}>
          Simpan
        </button>
      </div>

      <script src="./assets/js/sb-admin-2.min.js"></script>
    </div>
  );
};

export default EditResume;
