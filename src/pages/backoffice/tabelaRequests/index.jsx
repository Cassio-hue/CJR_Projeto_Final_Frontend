import React from "react";

import { HeaderzitoBack } from "../../../components/headerFiles";
import Footador from "../../../components/footerFiles";
import { TableRequests } from "../../../components/tableFiles";

export default function TablerequestsPage() {
  return (
    <>
      <HeaderzitoBack type={1} />
      <TableRequests />
      <Footador />
    </>
  );
}
