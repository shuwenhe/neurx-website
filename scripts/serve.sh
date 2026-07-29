#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-8000}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)/dist"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

if [ ! -d "$ROOT" ]; then
  echo "dist not found, run npm run build first" >&2
  exit 1
fi

# Kill any process listening on the port
pids=$(ss -ltnp 2>/dev/null | awk -v port=":$PORT" '$4 ~ port {sub(/.*pid=/,"",$7); sub(/,fd=.*/,"",$7); print $7}' | sort -u)
if [ -n "$pids" ]; then
  echo "Killing existing process(es): $pids"
  kill $pids || true
  sleep 1
fi

# Start Python server with custom cache headers
nohup python3 "${SCRIPT_DIR}/server.py" "$PORT" "$ROOT" >"$ROOT/server.log" 2>&1 &
echo $! > "$ROOT/server.pid"
echo "Server started with PID $(cat $ROOT/server.pid) on port $PORT"
