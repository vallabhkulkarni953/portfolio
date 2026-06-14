export const manifest = {
  screens: {
    scr_03t2kc: { name: "Home", route: "/", position: { "x": 160, "y": 220 } },
    scr_ejxfdh: { name: "Work", route: "/work", position: { "x": 1560, "y": 220 } },
    scr_yuierw: { name: "About", route: "/about", position: { "x": 2960, "y": 220 } },
    scr_y8a662: { name: "Resume", route: "/resume", position: { "x": 4360, "y": 220 } },
    scr_5y3rbd: { name: "Contact", route: "/contact", position: { "x": 5760, "y": 220 } }
  },
  sections: {
    sec_59w8kq: { name: "Portfolio Navigation", x: 0, y: 0, width: 7120, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_59w8kq", children: [
    { kind: "screen", id: "scr_03t2kc" },
    { kind: "screen", id: "scr_ejxfdh" },
    { kind: "screen", id: "scr_yuierw" },
    { kind: "screen", id: "scr_y8a662" },
    { kind: "screen", id: "scr_5y3rbd" }]
  }]

};