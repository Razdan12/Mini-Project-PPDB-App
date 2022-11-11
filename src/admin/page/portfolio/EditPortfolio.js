import React,{useState} from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PORTFOLIO } from "../../../GraphQl/Mutation";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Swal from "sweetalert2";
import { storage } from "../../../Firebase/config";

const EditPortfolio = (props) => {
  const [progress, setProgress] = useState(0);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const [upload, { loading: uploadLoading }] = useMutation(UPDATE_PORTFOLIO);

  const HandleFile = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    console.log(file);
    uploadPort(file);
  };

  const uploadPort = (file) => {
    if (!file) return;
    const sotrageRef = ref(storage, `image/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);

          Swal.fire("Sukses", "Data Berhasil Disimpan !", "success");
        });
      }
    );
    console.log(image);
  };

  const addData = async (e) => {
    e.preventDefault();
    await upload({
      variables: {
        id: props.idx,
        name: name,
        image: image,
        url: image,
      },
    });
    Swal.fire("Sukses", "Data Berhasil Disimpan !", "success");

    console.log(image);
  };

  return (
    <div>
       <div class="col-lg-12 mb-4">
              <div class="col-sm-12 p-2">
                <div class="card p-4">
                  <div class="mb-3">
                    <label for="title" class="form-label">
                      Keterangan
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <form onSubmit={HandleFile}>
                    <div class="input-group mb-3">
                      <input type="file" class="form-control" />
                      <button type="submit" class="btn btn-success">
                        Upload {progress} %
                      </button>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary"
                      onClick={addData}
                    >
                      Simpan
                    </button>
                  </form>
                </div>
              </div>
            </div>
    </div>
  );
};

export default EditPortfolio;
