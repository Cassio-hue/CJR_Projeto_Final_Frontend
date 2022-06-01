import React from "react";

import { HeaderzitoBack } from '../../../components/headerFiles'
import Footador from '../../../components/footerFiles'
import { TableRefeicoes } from '../../../components/tableFiles'

export default function TablemealsPage () {
    return (
        <>
            <HeaderzitoBack type={1}/>
            <TableRefeicoes />
            <Footador />
        </>
    )
}