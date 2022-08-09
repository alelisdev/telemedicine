import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import AppointmentTable from "./AppointmentTable";
import decodeToken from "../../utils/decodeToken";
import { userService } from "../../services";

export default function LastAppointmentTable () {

    const [rows, setRows] = useState([]);

    const fetchData = useCallback(async () => {
        const account = decodeToken(userService.userValue.token);
        const url = `${baseUrl}/api/appointment/last/${account.user.email}`;
        const res = await axios.get(url);
        setRows(res.data);
    }, [])

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AppointmentTable rows={rows} kind='Last' />
    )
}