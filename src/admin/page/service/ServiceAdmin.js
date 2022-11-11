import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import {
    BsFillTrashFill,
    BsFillPlusCircleFill,
} from "react-icons/bs";
import { GET_SERVICE } from "../../../GraphQl/Queries";
import { DELETE_SERVICE } from "../../../GraphQl/Mutation";
import Swal from "sweetalert2";
import NavAdmin from "../../component/NavAdmin";
import Sidebar from "../../component/Sidebar";
import Loading from "../../../component/Loading";
import Visibility from "../Visibility";
import EditService from "./EditService"

const ServiceAdmin = () => {
  const { data, loading: LoadingSkl } = useQuery(GET_SERVICE);
  const [deleteSkl, { loading:LoadingDelete}] = useMutation(DELETE_SERVICE, {
    refetchQueries: [GET_SERVICE],
  });
  if (LoadingSkl){
    return (<Loading/>)
  }
  const HandleDelete = (idx) => {
    return Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSkl({
            variables: {
              id: idx,
            },
        })
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
      console.log(idx)
    });
  };

  return (
    <div>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <NavAdmin />
          </div>
          <div class="ml-4">
            <h1 class="h3 mb-0 text-gray-800">Service</h1>
          </div>
          <div class="col-lg-12 mb-4">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <div class="col-sm-12 p-2">
                      <Link to="/add-service">
                        <button type="button" class="btn btn-success mb-3">
                          <BsFillPlusCircleFill />
                        </button>
                      </Link>
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">No</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Deskripsi</th>
                            <th scope="col"> </th>
                            <th scope="col"> </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data?.service.map((skl, i) => (
                            <tr>
                              <th scope="row">{i + 1}</th>
                              <td>{skl.name}</td>
                              <td>{skl.description}</td>
                              <td class="text-right">
                                <button
                                  type="button"
                                  class="btn btn-danger"
                                  onClick={() => HandleDelete(skl.id)}
                                >
                                  <BsFillTrashFill />
                                </button>
                              </td>
                              <td class="text-left">
                                <Visibility>
                                  <EditService idx={skl.id} />
                                </Visibility>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="./assets/js/sb-admin-2.min.js"></script>
    </div>
  );
};

export default ServiceAdmin;
