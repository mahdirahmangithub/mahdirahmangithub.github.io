function createSelectionComponent(size) {
  const numPoints = 8;
  const center = size / 2;

  const variations = [
    { x: 14, y: 16, rMod: 2.5, dur: "16s", stroke: "var(--text_hint_dark)", from: 0, to: 360 },
    { x: 14, y: 12, rMod: 2.2, dur: "14s", stroke: "var(--text_hint_dark)", from: -50, to: 310 },
    { x: 13, y: 11, rMod: 2.3, dur: "12s", stroke: "var(--text_hint_dark)", from: 180, to: 540 },
    { x: 12, y: 13, rMod: 2.3, dur: "12s", stroke: "var(--text_hint_dark)", from: 360, to: 0 },
    { x: 14, y: 12, rMod: 2.5, dur: "12s", stroke: "var(--text_hint_dark)", from: 230, to: -130 },
    { x: 13, y: 11, rMod: 2.2, dur: "14s", stroke: "var(--text_hint_dark)", from: 180, to: -180 },
    { x: 6, y: 10, rMod: 2.3, dur: "30s", stroke: "var(--text_hint_dark)", from: 360, to: 0 },
    ];

  function from(v) {
    return `${v.from} ${center} ${center}`;
  }

  function to(v) {
    return `${v.to} ${center} ${center}`;
  }

  function positions(radius) {
    const angle = (i) => i * (2 * Math.PI / numPoints);
    let i = 0;
    return Array(numPoints)
      .fill(0)
      .map((_) => ({
        x: parseInt(center + radius * Math.cos(angle(i))),
        y: parseInt(center + radius * Math.sin(angle(i++))),
      }));
  }
  function getPathData(v) {
      const points = positions(size / v.rMod);
      points.push(points[0]);
    
      const Q = {
        x: parseInt((points[0].x + points[1].x) / 2 + size / v.x),
        y: parseInt((points[0].y + points[1].y) / 2 + size / v.y),
      };
    
      return points.reduce((path, pt, i) => {
        if (i === 0) {
          return path + `M${pt.x} ${pt.y}`;
        } else if (i === 1) {
          return path + `Q ${Q.x} ${Q.y} ${pt.x} ${pt.y}`;
        } else {
          return path + `T ${pt.x} ${pt.y}`;
        }
      }, "");
    }
    

  const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.setAttribute("width", `${size}`);
  svgElement.setAttribute("height", `${size}`);

  variations.forEach((v) => {
    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", getPathData(v));
    pathElement.setAttribute("stroke", v.stroke);
    pathElement.setAttribute("stroke-width", "1");

    const animateTransformElement = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
    animateTransformElement.setAttribute("attributeName", "transform");
    animateTransformElement.setAttribute("type", "rotate");
    animateTransformElement.setAttribute("dur", v.dur);
    animateTransformElement.setAttribute("repeatCount", "indefinite");
    animateTransformElement.setAttribute("from", from(v));
    animateTransformElement.setAttribute("to", to(v));

    pathElement.appendChild(animateTransformElement);
    svgElement.appendChild(pathElement);
  });

  return svgElement;
}

const containerElement = document.createElement("div");
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

const size = viewportWidth < 720 ? 600 : 1200;

containerElement.classList.add("portal_container");
containerElement.appendChild(createSelectionComponent(size));

console.log()



const appElement = document.getElementById("portal");
appElement.appendChild(containerElement);
