import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import AppointmentTable from "./AppointmentTable";
import decodeToken from "../../utils/decodeToken";


export default function TodayAppointmentTable () {

    const [rows, setRows] = useState([]);

    const fetchData = useCallback( async () => {
        const email = decodeToken(localStorage.getItem('user')).user.email;
        const url = `${baseUrl}/api/appointment/today/${email}`;
        const res = await axios.get(url);
        setRows(res.data);
    }, [])

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AppointmentTable rows={rows} kind='Today' />
    )
}