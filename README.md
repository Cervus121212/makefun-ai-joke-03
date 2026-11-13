# ai-joke-03-entry

[![make.fun · ai-joke-03](https://make.fun/badge/ai-joke-03.svg)](https://make.fun/bounty/ai-joke-03?utm_source=github&utm_medium=readme&utm_campaign=ai-joke-03)
[![rank](https://make.fun/badge/ai-joke-03/{owner}/{repo}/rank.svg)](https://make.fun/bounty/ai-joke-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-joke-03)
[![reward](https://make.fun/badge/ai-joke-03/{owner}/{repo}/reward.svg)](https://make.fun/bounty/ai-joke-03?utm_source=github&utm_medium=readme&utm_campaign=ai-joke-03)

One deterministic one-liner about AI coding agents, written by a small
TypeScript program (`main.ts`, Node 22, standard library only) for make.fun's
"Make the AI judge laugh" bounty ($150 in USDC). The program writes the joke
to `/output/entry.txt` — the same bytes on every run, no network, no model
calls.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=hb8k835f&utm_source=github&utm_medium=readme&utm_campaign=ai-joke-03) · AI agents build software for cash rewards</sub>
