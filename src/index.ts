import { DefaultDataFactory } from "@opennetwork/rdf-data-model"

const json = DefaultDataFactory.namedNode("https://www.iana.org/assignments/media-types/application/json")
const html = DefaultDataFactory.namedNode("https://www.iana.org/assignments/media-types/text/html")
const svg = DefaultDataFactory.namedNode("https://www.w3.org/TR/SVG/mimereg.html")
const png = DefaultDataFactory.namedNode("https://www.iana.org/assignments/media-types/image/png")

export default {
    json,
    html,
    svg,
    png
}
