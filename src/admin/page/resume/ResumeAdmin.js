import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_EDUCATIONS,
  GET_EXPERIENCE,
  GET_SKILLS,
} from "../../../GraphQl/Queries";
import {
  DELETE_EDUCATION,
  DELETE_EXP,
  DELETE_SKL,
} from "../../../GraphQl/Mutation";
import NavAdmin from "../../component/NavAdmin";
import Sidebar from "../../component/Sidebar";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Loading from "../../../component/Loading";
import {

  BsFillTrashFill,
  BsFillPlusCircleFill,
} from "react-icons/bs";
import EditEducation from "./EditEducation";
import Visibility from "../Visibility";
import EditExperience from "./EditExperience";
import EditSkill from "./EditSkill";

const ResumeAdmin = () => {

  const { data: dataEdu, loading: dataLoading } = useQuery(GET_EDUCATIONS);
  const { data: dataExp, loading: LoadingExp } = useQuery(GET_EXPERIENCE);
  const { data: dataSkl, loading: LoadingSkl } = useQuery(GET_SKILLS);
  const [deleteEdu, { loading: LoadingDelete }] = useMutation(
    DELETE_EDUCATION,
    { refetchQueries: [GET_EDUCATIONS] }
  );
  const [deleteExp, { loading: deleteExpe }] = useMutation(DELETE_EXP, {
    refetchQueries: [GET_EXPERIENCE],
  });
  const [deleteSkl, { loading: deleteSkle }] = useMutation(DELETE_SKL, {
    refetchQueries: [GET_SKILLS],
  });

  if (dataLoading || LoadingExp || LoadingSkl) {
    return <Loading/>;
  }

  const HandleDeleteEdu = (idx) => {
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
        deleteEdu({
          variables: {
            id: idx,
          },
        });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const HandleDeleteExp = (idx) => {
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
        deleteExp({
          variables: {
            id: idx,
          },
        });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const HandleDeleteSkl = (idx) => {
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
        });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
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
            <h1 class="h3 mb-0 text-gray-800">Resume</h1>
          </div>
          <div class="col-lg-12 mb-4">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <div class="col-sm-12 p-2">
                      <h2>Education</h2>
                      <Link to="/add-education">
                        <button type="button" class="btn btn-success mb-3">
                          <BsFillPlusCircleFill />
                        </button>
                      </Link>
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">No</th>
                            <th scope="col">Education</th>
                            <th scope="col">Tahun</th>
                            <th scope="col">Jurusan</th>
                            <th scope="col">Deskription</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {dataEdu?.educations.map((edu, i) => (
                            <tr>
                              <th scope="row">{i + 1}</th>
                              <td>{edu.education}</td>
                              <td>
                                {edu.first_year} - {edu.last_year}
                              </td>
                              <td>{edu.description}</td>
                              <td>{edu.sub_description}</td>
                              <td class="text-right">
                                <button
                                  type="button"
                                  class="btn btn-danger"
                                  onClick={() => HandleDeleteEdu(edu.id)}
                                >
                                  <BsFillTrashFill />
                                </button>
                              </td>
                              <td class="text-left">
                                <Visibility>
                                  <EditEducation idx={edu.id} />
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

            <div class="row mt-2">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <div class="col-sm-12 p-2">
                      <h2>Experience</h2>
                      <Link to="/add-experience">
                        <button type="button" class="btn btn-success mb-3">
                          <BsFillPlusCircleFill />
                        </button>
                      </Link>
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">No</th>
                            <th scope="col">Experience</th>
                            <th scope="col">Workplace</th>
                            <th scope="col">Deskription</th>
                            <th scope="col">Tahun</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {dataExp?.experience.map((exp, i) => (
                            <tr>
                              <th scope="row">{i + 1}</th>
                              <td>{exp.experience}</td>
                              <td>{exp.workplace}</td>
                              <td>{exp.description}</td>
                              <td>
                                {exp.first_year} - {exp.last_year}
                              </td>
                              <td class="text-right">
                                <button
                                  type="button"
                                  class="btn btn-danger"
                                  onClick={() => HandleDeleteExp(exp.id)}
                                >
                                  <BsFillTrashFill />
                                </button>
                              </td>
                              <td class="text-left">
                                <Visibility>
                                  <EditExperience idx={exp.id} />
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

            <div class="row mt-2">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <div class="col-sm-12 p-2">
                      <h2>Skills</h2>
                      <Link to="/add-skill">
                        <button type="button" class="btn btn-success mb-3">
                          <BsFillPlusCircleFill />
                        </button>
                      </Link>
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">No</th>
                            <th scope="col">Skill</th>
                            <th scope="col">Range</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {dataSkl?.skills.map((skl, i) => (
                            <tr>
                              <th scope="row">{i + 1}</th>
                              <td>{skl.name_skill}</td>
                              <td>{skl.range} %</td>
                              <td class="text-right">
                                <button
                                  type="button"
                                  class="btn btn-danger"
                                  onClick={() => HandleDeleteSkl(skl.id)}
                                >
                                  <BsFillTrashFill />
                                </button>
                              </td>

                              <td class="text-left">
                                <Visibility>
                                  <EditSkill idx={skl.id} />
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
    </div>
  );
};

export default ResumeAdmin;
