import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const Details = () => {
    const { uid } = useParams();
    console.log("uid from useParams", uid);

    return (
    <div>test Details UID:{uid}</div>
    )
}

export default Details;