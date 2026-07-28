#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)/dist"

if [ -f "$ROOT/server.pid" ]; then
  pid=$(cat "$ROOT/server.pid")
  echo "Stopping PID $pid"
  kill "$pid" || true
  rm -f "$ROOT/server.pid"
  exit 0
else
  echo "No server.pid found; checking common ports..."
  pids=$(ss -ltnp 2>/dev/null | awk '/:8000|:8080/ {sub(/.*pid=/,"",$7); sub(/,fd=.*/,"",$7); print $7}' | sort -u)
  if [ -n "$pids" ]; then
    echo "Killing processes: $pids"
    kill $pids || true
  else
    echo "No server process found"
  fi
fi
