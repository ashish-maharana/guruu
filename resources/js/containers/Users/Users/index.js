/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { name, reducer, actions } from "./slice";
import makeUsers from "./selectors";
import {useInjectReducer, useInjectSaga} from "redux-injectors";
import saga from './saga';
import Layout from "../../Layout";

export function useUsers({ limit = 20, offset = 0 } = {}) {
    useInjectReducer({ key: name, reducer });
    useInjectSaga({ key: name, saga });

    const dispatch = useDispatch();
    const store = useSelector(makeUsers(), shallowEqual);

    useEffect(() => {
        if (!store?.data?.length && !store?.loading) {
            dispatch(
                actions.fetch({
                    offset,
                    limit,
                })
            );
        }
    }, []);

    return store;
}

export default function Users() {
    const users = useUsers();
    const dispatch = useDispatch();


    const columns = React.useMemo(
        () => [
            {
                name: "First Name",
                selector: (row) => row["first_name"],
                sortable: true,
            },
            {
                name: "Last Name",
                selector: (row) => row["last_name"],
                sortable: true,
            },
            {
                name: "Email",
                selector: (row) => row["email"],
                sortable: true,
            },
            {
                name: "Phone",
                selector: (row) => row["mobile_number"],
                sortable: true,
            },

            {
                name: "Action",
                cell: (row) => {
                    return (
                        <div className={"text-center d-inline-block table-action"}>
                            <Link to={`/users/edit/${row.id}`} className={"mx-1 d-inline-block"}>
                                <i className="bx bx-edit"/>{" "}
                            </Link>
                            <Link
                                to="#"
                                onClick={() => deleteRow(row.id)}
                                className={"mx-1 text-danger d-inline-block"}
                            >
                                <i className="bx bx-trash"/>
                            </Link>
                        </div>
                    );
                },
            },
        ],
        []
    );

    const deleteRow = (id) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="custom-ui">
                        <h1>Are you sure?</h1>
                        <p>You want to delete this user?</p>
                        <button onClick={onClose}>No</button>
                        <button
                            onClick={() => {
                                dispatch(actions.deleteUsers(id));
                                onClose();
                            }}
                        >
                            Yes, Delete it!
                        </button>
                    </div>
                );
            },
        });
    };

    return (
        <Layout>
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 my-3">
                            <Link className="btn btn-primary btn-md" to="/users/add">
                                Add User
                            </Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <DataTable
                                    title="Users"
                                    columns={columns}
                                    data={users.data}
                                    defaultSortField="first_name"
                                    pagination
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
