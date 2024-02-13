import React from "react";
import { useParams } from "react-router-dom";
import ClientAssetSidebar from "../../components/layouts/Navbar/ClientAssetSidebar";

export default function AssetInfo(){
    const { deptId } = useParams();
    const { contId } = useParams();

    return(
        <>
        <ClientAssetSidebar deptId={deptId} contId={contId}/>
        dfdf
        </>
    )
}