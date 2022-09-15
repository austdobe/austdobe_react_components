import React from "react";
import { render } from "@testing-library/react";

import TopNav from "./TopNav";

describe("TopNav", () => {
    test("renders the TopNav component", () => {
        render(<TopNav label="TopNav Label" />)
    })
})