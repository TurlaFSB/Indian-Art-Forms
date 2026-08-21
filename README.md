# THE LIVING CANVAS — Premium Museum Edition

## Assignment
Interactive Art Map (10 Marks) — CO1

**Objective:** Explore the geographic spread and influence of different art styles across India.

## What this project does

This is designed as a digital museum exhibition rather than a normal map page.

### Major experience layers

1. Cinematic entrance
2. Curatorial introduction
3. Geographic India atlas
4. Search
5. Region filter
6. Art-form filter
7. Era filter
8. Curator routes
9. Random discovery mode
10. Animated historical timeline
11. Curatorial theory / interpretation
12. Materiality section
13. Collection index
14. Detailed location exhibition
15. Object records
16. Full-screen object viewer
17. Source/provenance links
18. Responsive mobile layout

## Location coverage

27 locations are represented across North, North-West, West, Central, East and South India, including:

Bhimbetka, Dholavira, Sanchi, Ajanta, Ellora, Mahabalipuram, Hampi, Khajuraho, Konark, Puri, Madhubani, Jaipur, Varanasi, Delhi, Kolkata, Santiniketan, Ahmedabad, Mumbai, Chennai, Thanjavur, Kerala, Mysore, Srinagar, Hyderabad, Goa, Chandigarh and Bastar.

## Theory

The project deliberately introduces art-historical lenses:

- Materiality
- Patronage
- Sacred space
- Colonial encounter
- Indian modernisms
- Living traditions

The point is to show that the map is not merely geographic. Location affects materials, institutions, circulation, ritual, community and artistic language.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The India geography is rendered using `react-simple-maps` with a geographic dataset loaded from world-atlas. The map is therefore projection-based rather than a manually drawn polygon.

## Image licensing

The included remote image URLs are demonstration imagery used for the visual prototype. For a final academic submission, replace them with properly licensed/open-access photographs and preserve the source records in the object/location data.
