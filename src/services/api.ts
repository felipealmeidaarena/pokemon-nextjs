import { createServer } from "miragejs"

export default function api() {
  createServer({
    routes() {
      this.urlPrefix = 'https://localhost:3001'

      this.get("/api/pokemons", () => ({
        pokemons: [
          {
            name: "Ivysaur",
            id: 2,
            elementsAvatarUrl: [
              {
                imageUrl: "https://poke-apiv2.vercel.app/assets/Icons/grassIcon.svg",
                type: "Grass",
              },
              {
                imageUrl: "https://poke-apiv2.vercel.app/assets/Icons/poisonIcon.svg",
                type: "Poison",
              }
            ],
            avatarUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
          },
        ],
      }))
    }
  })
}