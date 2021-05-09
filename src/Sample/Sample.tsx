import React from "react";

import { SampleProps } from "./Sample.types";

import "./sample.scss";

const Sample: React.FC<SampleProps> = ({ theme }) => (
    <div
        data-testid="test-component"
        className={`test-component test-component-${theme}`}
    >
        <h1 className="heading">I'm the sample</h1>
    </div>
);

export default Sample;