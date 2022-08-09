import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import AppointmentTableContent from "./AppointmentTableContent";
import decodeToken from "../../utils/decodeToken";
import { userService } from "../../services";

export default function ComingAppointmentTable() {

    const [rows, setRows] = useState([]);
    const fetchData = useCallback(async () => {
        const account = decodeToken(userService.userValue.token);
        const url = `${baseUrl}/api/appointment/patient/coming/${account.user.email}`;
        const res = await axios.get(url);
        setRows(res.data);
    }, [])
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AppointmentTableContent rows={rows} kind='Coming' />
    )
}