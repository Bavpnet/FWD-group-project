import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Menu from "../../src/components/menu";

import { API_INFO_BBY_ID, API_KEY } from "../../API/dataAPI";
import Info from "./Info";

type Information = {
    description: string;
    slogan: string;
}

export default function ContactId() {
    const router = useRouter();
    const { filmId } = router.query;
    console.log(filmId);
    const API = API_INFO_BBY_ID + filmId;
    const [film, setInfo] = useState<Information>();

    useEffect(() => {
        fetch(API, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data === "") {
                    return;
                }
                setInfo(data);
                // console.log(data);
            })
            .catch(() => {});
    }, []);

    return (
        <div>
                <Menu />
            <div>
                <Info {...film} />
            </div>
        </div>
    );
}
