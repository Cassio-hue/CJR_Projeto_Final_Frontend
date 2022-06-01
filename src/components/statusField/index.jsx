import React from "react";
import { StatusStatus, StatusPendentetxt, StatusCanceladotxt } from "./status_style";

export function StatusOrder (){
    return (
        <StatusStatus>
            status order
        </StatusStatus>
    );

}

export function StatusEntregue (){
    return (
        <StatusStatus>
            entregue
        </StatusStatus>
    );

}

export function StatusPendente (){
    return (
        <StatusPendentetxt>
            pendente
        </StatusPendentetxt>
    );

}
export function StatusCancelado (){
    return (
        <StatusCanceladotxt>
            cancelado
        </StatusCanceladotxt>
    );

}