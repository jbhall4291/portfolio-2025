export const ORBIT_POSITIONS = [
    // top row
    { className: "left-[12%] top-[10%]", rx: 7, ry: 6, duration: 8, phase: 250 },
    { className: "left-[40%] top-[9%]", rx: 7, ry: 7, duration: 8, tilt: -6 },
    { className: "left-[65%] top-[15%]", rx: 6, ry: 5, duration: 6, tilt: 18 },
    { className: "left-[87%] top-[12%]", rx: 8, ry: 6, duration: 8, clockwise: false, tilt: -10, phase: 160 },
    //  left side ones
    { className: "left-[12%] top-[25%]", rx: 9, ry: 6, duration: 8, clockwise: false },
    { className: "left-[17%] top-[40%]", rx: 6, ry: 5, duration: 6, clockwise: false, phase: 90 },
    { className: "left-[8%] top-[54%]", rx: 7, ry: 8, duration: 8, clockwise: false },

    // right side ones
    { className: "left-[92%] top-[26%]", rx: 9, ry: 7, duration: 8, tilt: 8 },
    { className: "left-[84%] top-[39%]", rx: 9, ry: 7, duration: 8, tilt: 8 },
    { className: "left-[89%] top-[55%]", rx: 6, ry: 7, duration: 5, phase: 210 },
    //bottom row
    { className: "left-[87%] top-[90%]", rx: 6, ry: 5, duration: 6 },
    { className: "left-[35%] top-[91%]", rx: 7, ry: 4, duration: 5, clockwise: false, phase: 90 },
    { className: "left-[60%] top-[94%]", rx: 5, ry: 6, duration: 7, tilt: 14 },
    { className: "left-[10%] top-[92%]", rx: 9, ry: 6, duration: 8, tilt: 3, phase: 2 },
] as const;

export const ICONS = [
    { key: "ts", src: "/tech_stack_icons/typescript.svg", alt: "TypeScript", bg: "#3178C6", pad: 6, padLg: 8 },
    { key: "js", src: "/tech_stack_icons/javascript.svg", alt: "JavaScript", bg: "#efe125", pad: 6, padLg: 8 },
    { key: "jest", src: "/tech_stack_icons/jest.svg", alt: "Jest", bg: "#99425B", pad: 9, padLg: 10 },
    { key: "react", src: "/tech_stack_icons/react.svg", alt: "React", bg: "#272930", pad: 8, padLg: 10 },
    { key: "azure", src: "/tech_stack_icons/azure.svg", alt: "Azure", bg: "white", pad: 8, padLg: 10, hasBorder: true },
    { key: "next", src: "/tech_stack_icons/next.svg", alt: "Next.js", bg: "#272930", pad: 4, padLg: 6, },
    { key: "mongoDB", src: "/tech_stack_icons/mongo.svg", alt: "MongoDB", bg: "#00ED64", pad: 10, padLg: 14 },
    { key: "c#", src: "/tech_stack_icons/csharp.svg", alt: "C#", bg: "#7b43a4", pad: 2, padLg: 12 },
    { key: "flutter", src: "/tech_stack_icons/flutter.svg", alt: "Flutter", bg: "white", pad: 8, padLg: 12, hasBorder: true },
    { key: "sql", src: "/tech_stack_icons/sql.svg", alt: "Sql", bg: "#c73e48", pad: 5, padLg: 10 },
    { key: "tailwind", src: "/tech_stack_icons/tailwind.svg", alt: "TailwindCSS", bg: "#38bdf8", pad: 10, padLg: 12 },
    { key: ".net", src: "/tech_stack_icons/net.svg", alt: ".NET", bg: "#5a3591", pad: 4, padLg: 8 },
    { key: "firebase", src: "/tech_stack_icons/firebase.svg", alt: "Firebase", bg: "white", pad: 6, padLg: 8, hasBorder: true },
    { key: "node", src: "/tech_stack_icons/node.svg", alt: "Node", bg: "#83CD29", pad: 7, padLg: 10, },
] as const;
