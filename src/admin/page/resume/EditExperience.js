import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { EDIT_EXPERIENCE } from "../../../GraphQl/Mutation";
import Swal from "sweetalert2";
import Loading from '../../../component/Loading'

const EditExperience = (props) => {

    console.log(props.idx)

    const [description, setDeskripsi] = useState("");
    const [experience, setExperience] = useState("");
    const [first, setFirst] = useState("");
    const [Last, setLast] = useState("");
    const [sub, setSub] = useState("");
    const [work, setWork] = useState("");

    const [EditExp, { Loading: updateLoading }] = useMutation(EDIT_EXPERIENCE);

    if (updateLoading) {
        return < Loading />;
    }

    console.log(props.idx);

    const updateExp = async (e) => {
        e.preventDefault();
        await EditExp({
            variables: {
                id: props.idx,
                description: description,
                experience: experience,
                first_year: first,
                last_year: Last,
                sub_description: sub,
                workplace: work
            },
        });
        Swal.fire("Sukses", "Data Berhasil Disimpan !", "success");
    };

    return (
        <div>
            <div class="card p-4">
                <div class="mb-3">
                    <label class="form-label">Experience</label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => {
                            setExperience(e.target.value);
                        }}
                        required
                    />
                </div>

                <div class="mb-3">
                    <label class="form-label">Workplace</label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => {
                            setWork(e.target.value);
                        }}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label">Deskription</label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => {
                            setDeskripsi(e.target.value);
                        }}
                        required
                    />
                </div>

                <div class="mb-3">
                    <label class="form-label">Tahun Awal</label>
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
                    <label class="form-label">Tahun AKhir</label>
                    <textarea
                        class="form-control"
                        onChange={(e) => {
                            setLast(e.target.value);
                        }}
                        required
                    />
                </div>

                <button class="btn btn-primary" onClick={updateExp}>
                    Simpan
                </button>
            </div>

            <script src="./assets/js/sb-admin-2.min.js"></script>
        </div>
    );
};

export default EditExperience;
