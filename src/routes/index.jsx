/* eslint-disable react/prop-types */
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";

export function Routes({ data }) {
  return (
    <BrowserRouter>
      <AppRoutes data={data} />
    </BrowserRouter>
  );
}
