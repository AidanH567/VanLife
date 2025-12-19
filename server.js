import { createServer, Model } from "miragejs"

export function makeServer() {
  return createServer({
    models: {
      vans: Model,
    },

    seeds(server) {
      server.create("van", { id: "1", name: "Modest Explorer", price: 60, description: "...", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple", hostId: "123" })
      server.create("van", { id: "2", name: "Beach Bum", price: 80, description: "...", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged", hostId: "123" })
      server.create("van", { id: "3", name: "Reliable Red", price: 100, description: "...", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury", hostId: "456" })
      server.create("van", { id: "4", name: "Dreamfinder", price: 65, description: "...", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple", hostId: "789" })
      server.create("van", { id: "5", name: "The Cruiser", price: 120, description: "...", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury", hostId: "789" })
      server.create("van", { id: "6", name: "Green Wonder", price: 70, description: "...", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged", hostId: "123" })
    },

    routes() {
      this.namespace = "api"
      this.logging = false

      this.get("/vans", (schema) => schema.vans.all())
      this.get("/vans/:id", (schema, request) => schema.vans.find(request.params.id))

      this.get("/host/vans", (schema) => schema.vans.where({ hostId: "123" }))
      this.get("/host/vans/:id", (schema, request) =>
        schema.vans.findBy({ id: request.params.id, hostId: "123" })
      )
    },
  })
}
