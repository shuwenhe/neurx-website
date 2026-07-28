#!/usr/bin/env bash
set -euo pipefail

SERVICE_NAME=neurx-website
UNIT_SRC="$(cd "$(dirname "$0")" && pwd)/neurx-website.service"
UNIT_DST="/etc/systemd/system/${SERVICE_NAME}.service"

SUDO=""
if [ "$(id -u)" -ne 0 ]; then
  SUDO="sudo"
fi

echo "Installing systemd unit to ${UNIT_DST}"
$SUDO cp "$UNIT_SRC" "$UNIT_DST"
$SUDO systemctl daemon-reload
$SUDO systemctl enable --now "${SERVICE_NAME}.service"

echo "Service ${SERVICE_NAME} enabled and started."
$SUDO systemctl status "${SERVICE_NAME}.service" --no-pager || true
