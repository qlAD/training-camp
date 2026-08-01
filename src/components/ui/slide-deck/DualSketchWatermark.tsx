// 双 SVG 建筑速写水印：右上学院 sketch + 左下社团 sketch
// 跨期复用的门户框架组件，功能与视觉保持原 SlideDeckView 内联实现一致
export const DualSketchWatermark: React.FC = () => (
  <>
    <div className="absolute top-2 -right-6 w-52 h-52 opacity-30 invert pointer-events-none select-none transform rotate-12">
      <img
        src="/school-sketch.svg"
        alt="软件学院 Sketch 课件水印"
        className="w-full h-full object-contain brightness-125"
      />
    </div>
    <div className="absolute -bottom-6 left-2 w-44 h-44 opacity-35 invert pointer-events-none select-none transform -rotate-12">
      <img
        src="/club-sketch.svg"
        alt="社团 Sketch 课件水印"
        className="w-full h-full object-contain brightness-125"
      />
    </div>
  </>
);
