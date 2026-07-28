#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-8000}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)/dist"

if [ ! -d "$ROOT" ]; then
  echo "dist not found, run npm run build first" >&2
  exit 1
fi

# Kill any process listening on the port
pids=$(ss -ltnp 2>/dev/null | awk -v port=":$PORT" '$4 ~ port {sub(/.*pid=/,"",$7); sub(/,fd=.*/,"",$7); print $7}' | sort -u)
if [ -n "$pids" ]; then
  echo "Killing existing process(es): $pids"
  kill $pids || true
fi

nohup python3 -m http.server "$PORT" -d "$ROOT" >"$ROOT/server.log" 2>&1 &
echo $! > "$ROOT/server.pid"
echo "Server started with PID $(cat $ROOT/server.pid) on port $PORT"
