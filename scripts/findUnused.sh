#!/usr/bin/env bash
set -e

# ------------------------------------------------------------
# Find unused files (no incoming imports) using madge
# ------------------------------------------------------------
if command -v npx >/dev/null; then
  echo "=== Unused files (madge) ==="
  # madge generates a dependency graph; files not present as a target are unused
  npx madge --json src | node -e '
    const deps = JSON.parse(require("fs").readFileSync(0, "utf8"));
    const all = Object.keys(deps);
    const used = new Set();
    for (const src in deps) {
      deps[src].forEach(t => used.add(t));
    }
    const unused = all.filter(f => !used.has(f));
    console.log(unused.join("\n"));
  '
else
  echo "npx not found – cannot run madge"
fi

# ------------------------------------------------------------
# Find unused exported symbols with ts-prune
# ------------------------------------------------------------
if command -v npx >/dev/null; then
  echo "\n=== Unused exports (ts-prune) ==="
  npx ts-prune
else
  echo "npx not found – cannot run ts-prune"
fi
