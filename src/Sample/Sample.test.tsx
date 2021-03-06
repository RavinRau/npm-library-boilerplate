import React from "react";
import { render } from "@testing-library/react";

import Sample from "./Sample";
import { SampleProps } from "./Sample.types";

describe("Sample", () => {
    let props: SampleProps;

    beforeEach(() => {
        props = {
            theme: "primary"
        };
    });

    const renderComponent = () => render(<Sample {...props} />);

    it("should have primary className with default props", () => {
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId("test-component");

        expect(testComponent).toHaveClass("test-component-primary");
    });

    it("should have secondary className with theme set as secondary", () => {
        props.theme = "secondary";
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId("test-component");

        expect(testComponent).toHaveClass("test-component-secondary");
    });
});