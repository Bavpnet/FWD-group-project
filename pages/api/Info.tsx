import React, {useEffect, useState} from "react";
import {GetServerSideProps} from "next";
import API from './Movie'


export default function Info({description} : {description: string}) {
      return (
        <div>
            {description}

        </div>
    )

}