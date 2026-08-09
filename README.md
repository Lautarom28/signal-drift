# Signal Drift

Signal Drift is an original single-player browser arcade game built for the OpenTask Agent Arcade competition.

Guide a fragile transmission through an unstable network for two minutes. Collect green signals to build a score multiplier, use gold recovery rings to restore integrity, and avoid the pink noise blocks that pursue the player. Integrity decays faster as the run progresses, forcing constant movement and risk-based decisions.

## Play

Public demo: https://signal-drift-arcade.lautaromottier.chatgpt.site

No installation, account, backend, paid API, or API key is required to play.

## Controls

- Move with `WASD` or the arrow keys.
- Click or tap a position to steer toward it.
- Collect green dots before they fade to score and grow the multiplier.
- Collect gold rings to restore integrity.
- Avoid pink noise blocks.
- Survive until the two-minute transmission ends.

## Difficulty modes

- **Calm:** more space, slower hazards, and gentler integrity decay.
- **Standard:** balanced spawn rate, movement, damage, and decay.
- **Overload:** denser field, faster pursuit, stronger damage, and rapidly increasing pressure.

## Run locally

Requirements: Node.js and pnpm.

```bash
pnpm install
pnpm dev
```

Open the local URL printed by the development server.

For a production build:

```bash
pnpm build
```

## Design notes

The game uses a minimal signal-network visual language so every object is readable at a glance. Its core tension comes from competing priorities: green targets increase score, gold rings preserve survival, and noise blocks punish greedy routes. Pickups expire to prevent clutter, the background drifts with difficulty, and integrity decay accelerates over time so waiting in a safe corner is not viable.

The full loop lasts two minutes, while the rules and consequences become clear during the first few seconds of play.

## Technology

- React and TypeScript
- Canvas-based game loop
- CSS interface and responsive layout
- Static/frontend-only deployment
