import React from "react";
import "./Comparativo.css";
import Rtx4060 from "./Rtx4060.png";
import Rtx4070super from "./Rtx4070super.png";
import Rtx4070TiSuper from "./Rtx4070TiSuper.png";
import Rtx4080super from "./Rtx4080super.png";
import Rtx4090 from "./Rtx4090.png";
import Rx7600xt from "./Rx7600xt.png";
import Rx7700xt from "./Rx7700xt.png";
import Rx7800xt from "./Rx7800xt.png";
import Rx7900xtx from "./Rx7900xtx.png";

const gpuData = {
  "Aorus - Nvidia RTX 4060Ti": {
    imagem: Rtx4060,
    PassMark: 22861,
    Mark3D: 13489,
    TDP: 165,
    PerformanceRelativa: 59,
    PerformanceW: 81.75,
  },
  "Aorus - Nvidia RTX 4070 Super": {
    imagem: Rtx4070super,
    PassMark: 30145,
    Mark3D: 20981,
    TDP: 220,
    PerformanceRelativa: 78,
    PerformanceW: 95.37,
  },
  "Aorus - Nvidia RTX 4070 Ti Super": {
    imagem: Rtx4070TiSuper,
    PassMark: 31711,
    Mark3D: 24266,
    TDP: 285,
    PerformanceRelativa: 82,
    PerformanceW: 85.14,
  },
  "Aorus - Nvidia RTX 4080 Super": {
    imagem: Rtx4080super,
    PassMark: 34623,
    Mark3D: 28381,
    TDP: 320,
    PerformanceRelativa: 90,
    PerformanceW: 88.69,
  },
  "Aorus - Nvidia RTX 4090": {
    imagem: Rtx4090,
    PassMark: 38574,
    Mark3D: 36517,
    TDP: 450,
    PerformanceRelativa: 100,
    PerformanceW: 81.15,
  },
  "Gigabyte - AMD Radeon 7600XT": {
    imagem: Rx7600xt,
    PassMark: 17318,
    Mark3D: 11291,
    TDP: 190,
    PerformanceRelativa: 45,
    PerformanceW: 59.43,
  },
  "Gigabyte - AMD Radeon 7700XT": {
    imagem: Rx7700xt,
    PassMark: 22279,
    Mark3D: 16999,
    TDP: 245,
    PerformanceRelativa: 58,
    PerformanceW: 69.38,
  },
  "Gigabyte - AMD Radeon 7800XT": {
    imagem: Rx7800xt,
    PassMark: 24185,
    Mark3D: 20026,
    TDP: 263,
    PerformanceRelativa: 63,
    PerformanceW: 76.14,
  },
  "Aorus - AMD Radeon 7900XTX": {
    imagem: Rx7900xtx,
    PassMark: 30960,
    Mark3D: 30578,
    TDP: 355,
    PerformanceRelativa: 80,
    PerformanceW: 86.14,
  },
};

export default function Comparativo({ selectedCards }) {
  const selectedData = selectedCards.map((titulo) => gpuData[titulo]);

  const getMaxValue = (field) =>
    Math.max(...selectedData.map((data) => data[field]));

  const maxPerformanceRelativa = getMaxValue("PerformanceRelativa");
  const maxPassMark = getMaxValue("PassMark");
  const max3DMark = getMaxValue("Mark3D");
  const maxPerformanceW = getMaxValue("PerformanceW");

  const renderProgressBar = (value, maxValue, displayPercent = false) => {
    const relativeWidth = (value / maxValue) * 100;

    return (
      <div className="performance-bar-container">
        <div className="performance-bar" style={{ width: `${relativeWidth}%` }}>
          <span className="progress-value">
            {displayPercent ? `${value}%` : value}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="comparativo-container">
      <h1 className="comparativo-title">Comparativo</h1>
      {selectedCards.map((titulo) => {
        const data = gpuData[titulo];

        return (
          <div key={titulo} className="comparativo-card">
            <img
              src={data.imagem}
              alt={titulo}
              className="comparativo-imagem"
            />
            <h3>{titulo}</h3>
            <p className="campo-nome">PassMark:</p>
            {renderProgressBar(data.PassMark, maxPassMark)}
            <p className="campo-nome">3DMark:</p>
            {renderProgressBar(data.Mark3D, max3DMark)}
            <p className="campo-nome">Performance Relativa:</p>
            {renderProgressBar(
              data.PerformanceRelativa,
              maxPerformanceRelativa,
              true
            )}
            <p className="campo-nome">Performance/W:</p>
            {renderProgressBar(data.PerformanceW, maxPerformanceW)}
            <p className="campo-nome">TDP:</p>
            <p>{data.TDP}W</p>
          </div>
        );
      })}
    </div>
  );
}

export { gpuData };
