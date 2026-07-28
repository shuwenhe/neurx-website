#!/usr/bin/env bash
set -euo pipefail

SERVICE_NAME=neurx-website
UNIT_DST="/etc/systemd/system/${SERVICE_NAME}.service"

SUDO=""
if [ "$(id -u)" -ne 0 ]; then
  SUDO="sudo"
fi

echo "Stopping and disabling ${SERVICE_NAME}.service"
$SUDO systemctl stop "${SERVICE_NAME}.service" || true
$SUDO systemctl disable "${SERVICE_NAME}.service" || true
$SUDO rm -f "$UNIT_DST"
$SUDO systemctl daemon-reload

echo "Uninstalled ${SERVICE_NAME}.service"
