export const navigationQuery = `*[_type == "navigation"][0]{
  featuredLocations[] {
    label,
    "href": link->slug.current,
    "children": subnav[] {
      "label": link->name,
      "href": link->slug.current
    }
  },
  existingCustomers[] {
    label,
    "href": link->slug.current,
    "children": subnav[] {
      "label": link->name,
      "href": link->slug.current
    }
  }
}`;

export const globalQuery = `
  "globals": *[_type == "globals"][0],
  "navigation": ${navigationQuery}
`;
