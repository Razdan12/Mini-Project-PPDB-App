import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ABOUT } from '../../GraphQl/Queries'

const NavAdmin = () => {
    const { data } = useQuery(GET_ABOUT)
    return (
        <div>

            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                    <i class="fa fa-bars"></i>
                </button>

                <ul class="navbar-nav ml-auto">


                    <li class="nav-item dropdown no-arrow d-sm-none">
                        <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-search fa-fw"></i>
                        </a>


                    </li>

                    <div class="topbar-divider d-none d-sm-block"></div>

                    {data?.users.map((about) => (
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">{about.name}</span>
                                <img class="img-profile rounded-circle"
                                    src={about.image} />
                            </a>

                        </li>
                    ))}

                </ul>

            </nav>
        </div>

    )
}

export default NavAdmin