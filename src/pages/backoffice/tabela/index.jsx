import React from "react";

import { Headerzito, HeaderzitoBack } from '../../../components/headerFiles'
import { 
    SubmitButton,
    Input,    
} from '../../../components/inputButton'

import Footador from '../../../components/footerFiles'
import { TableUsuarios } from '../../../components/tableFiles'

export default function PerfilPage () {
    return (
        <>
            <HeaderzitoBack type={1}/>
            <TableUsuarios />
            <Footador />
        </>
    )
}