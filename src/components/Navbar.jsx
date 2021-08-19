import React from "react";

const NavbarComponent = () => (
  <svg width={1920} height={72} viewBox="0 0 1920 72">
    <defs>
      <style>
        {
          ".a{fill:#ffbd27;}.b{fill:#36207f;font-size:24px;font-family:Sylfaen;}.c{fill:#15151d;font-size:32px;font-family:Riffic;}"
        }
      </style>
    </defs>
    <rect className="a" width={1920} height={72} />
    <text className="b" transform="translate(1722 45)">
      <tspan x={0} y={0}>
        {"Login / Register"}
      </tspan>
    </text>
    <text className="c" transform="translate(25 16)">
      <tspan x={0} y={31}>
        {"Ditto"}
      </tspan>
    </text>
  </svg>
);

export default NavbarComponent;
