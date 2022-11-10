import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { EDIT_SKILL } from "../../../GraphQl/Mutation";
import Swal from "sweetalert2";
import Loading from '../../../component/Loading'


const Editskill = (props) => {
    const [skill, setSkill] = useState("");
    const [Range, setRange] = useState("");

    const [EditSkl, { Loading: updateLoading }] = useMutation(EDIT_SKILL);

    if (updateLoading) {
        return < Loading />;
    }

    console.log(props.idx);

    const updateSkl = async (e) => {
        e.preventDefault();
        await EditSkl({
            variables: {
                id: props.idx,
                name_skill: skill,
                range: Range,
                
            },
        });
        Swal.fire("Sukses", "Data Berhasil Disimpan !", "success");
    };

    return (
        <div>

            <div class="card p-4">

                <div class="mb-3">
                    <label class="form-label">Skill</label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => {
                            setSkill(e.target.value);
                        }}
                        required
                    />
                </div>

                <div class="mb-3">
                    <label class="form-label">Range</label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => {
                            setRange(e.target.value);
                        }}
                        required
                    />
                </div>



                <button class="btn btn-primary" onClick={updateSkl}>Simpan</button>
            </div>

            <script src="./assets/js/sb-admin-2.min.js"></script>
        </div>
    )
}

export default Editskill