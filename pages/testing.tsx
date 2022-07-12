import React, { useEffect, useState } from "react";
import Head from 'next/head'
import Router, { useRouter } from 'next/router';
import Link from 'next/link'
import Read from "../src/components/read"
import { getAuth, updatePassword } from "firebase/auth";

import { app, database } from '../firebaseConfig'
import {
    collection,
    addDoc,
    getDoc,
    doc,
    DocumentReference
} from 'firebase/firestore'
import Menu from "../src/components/menu";
export default function test() {
    const router =useRouter();
    useEffect(() => {
        router.push('/');       
      }, [])
    return (
        <div>
            <Menu/>
        </div>
    );
}