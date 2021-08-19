import React from "react";

const JumbotronComponent = () => (
  <svg width={1920} height={939} viewBox="0 0 1920 939">
    <defs>
      <style>
        {
          ".a,.f{fill:none;}.b,.d,.e{fill:#fff;}.c{fill:#ffbd27;}.d{stroke:#171616;}.e{stroke:#707070;}.f{stroke:#ffbd27;stroke-width:2px;}.g,.h,.i{fill:#fefeff;}.g{font-size:36px;}.g,.h{font-family:Sylfaen;}.h{font-size:48px;}.i{font-size:120px;font-family:Riffic;}.j{stroke:none;}.k{filter:url(#d);}.l{filter:url(#a);}"
        }
      </style>
      <filter id="a">
        <feOffset dy={-20} input="SourceAlpha" />
        <feGaussianBlur stdDeviation={25} result="b" />
        <feFlood floodOpacity={0.941} result="c" />
        <feComposite operator="out" in="SourceGraphic" in2="b" />
        <feComposite operator="in" in="c" />
        <feComposite operator="in" in2="SourceGraphic" />
      </filter>
      <filter
        id="d"
        x={912.177}
        y={359.251}
        width={406.46}
        height={260.134}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} input="SourceAlpha" />
        <feGaussianBlur stdDeviation={3} result="e" />
        <feFlood floodOpacity={0.161} />
        <feComposite operator="in" in2="e" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g transform="translate(0 -71)">
      <rect
        className="a"
        width={1920}
        height={939}
        transform="translate(0 71)"
      />
      <g className="l" transform="matrix(1, 0, 0, 1, 0, 71)">
        <path
          className="b"
          d="M922.066,719.142h829.513s-17.695-261.326-415.746-261.326S922.066,719.142,922.066,719.142Z"
          transform="translate(-169 83.18)"
        />
      </g>
      <path
        className="c"
        d="M79.658,0S32.808,179.074,247.143,248.128,311.56,516.154,311.56,516.154s-79.643,112.36-21.082,201.312,46.849,0,46.849,0S283.451,533.71,463.819,503.279,763.653,345.273,754.283,176.733,1021.323,0,1021.323,0Z"
        transform="translate(793.677 72)"
      />
      <path
        className="d"
        d="M891.1,588.869l118.813,249.508,389.114-178.22L1280.5,401.439Z"
        transform="translate(30 34.623)"
      />
      <path
        className="e"
        d="M387.708,236.721,276.592-1.012,4.153,52.467Z"
        transform="translate(996.982 841.454) rotate(-50)"
      />
      <g className="k" transform="matrix(1, 0, 0, 1, 0, 71)">
        <path
          className="e"
          d="M1308.576,437.319l-114.4,240.5L922.737,623.478Z"
          transform="translate(0 -71)"
        />
      </g>
      <g className="f" transform="translate(116 649)">
        <rect className="j" width={570} height={94} rx={47} />
        <rect className="a" x={1} y={1} width={568} height={92} rx={46} />
      </g>
      <text className="g" transform="translate(245 709)">
        <tspan x={0} y={0}>
          {"Create Template"}
        </tspan>
      </text>
      <text className="h" transform="translate(117 496)">
        <tspan x={0} y={48}>
          {"Lorem ipsum dolor sit amet."}
        </tspan>
      </text>
      <text className="i" transform="translate(117 328)">
        <tspan x={0} y={117}>
          {"Ditto"}
        </tspan>
      </text>
    </g>
  </svg>
);

export default JumbotronComponent;
