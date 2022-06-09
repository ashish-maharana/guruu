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
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { name, reducer, actions } from "./slice";
import makePermissions from "./selectors";
import {useInjectReducer, useInjectSaga} from "redux-injectors";
import saga from './saga';
import Layout from "../../Layout";

export function usePermissions({ limit = 20, offset = 0 } = {}) {
    useInjectReducer({ key: name, reducer });
    useInjectSaga({ key: name, saga });

    const dispatch = useDispatch();
    const store = useSelector(makePermissions(), shallowEqual);

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

export default function Permissions() {
    const permission = usePermissions();
    const dispatch = useDispatch();

    const columns = React.useMemo(
        () => [
            {
                name: "Permission Name",
                selector: (row) => row["name"],
                sortable: true,
            },

            {
                name: "Action",
                cell: (row) => {
                    return (
                        <div className={"text-center d-inline-block table-action"}>
                            <Link to={`/permissions/edit/${row.id}`} className={"m-1"}>
                                <i className="bx bx-edit"/>{" "}
                            </Link>
                            <Link
                                to="#"
                                onClick={() => deleteRow(row.id)}
                                className={"text-danger m-1"}
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
                        <p>You want to delete this permission?</p>
                        <button onClick={onClose}>No</button>
                        <button
                            onClick={() => {
                                dispatch(actions.deletePermissions(id));
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
            <div className="py-5 inner-pg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-xl-12">
                            <div className="row">
                                <div className="col-md-6 my-3">
                                    <Link className="btn btn-primary btn-md" to="/permissions/add">
                                        Add Permission
                                    </Link>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <DataTable
                                            title="Permissions"
                                            columns={columns}
                                            data={permission.data}
                                            defaultSortField="name"
                                            pagination
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
