import React, {useEffect, useState} from "react";
import {GetServerSideProps} from "next";
import API from './Movie'


export default function Info({description} : {description: number}) {
      return (
        <div>
            {description}

        </div>
    )

}