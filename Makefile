.PHONY: run

run:
	@echo "Building distribution files..."
	@npm run build
	@echo "✓ Build complete"
	@echo ""
	@echo "Installing systemd service..."
	sudo ./scripts/install-systemd.sh
	@echo "✓ Systemd service installed"
	@echo ""
	@echo "Restarting NeurX website service..."
	sudo systemctl restart neurx-website
	@echo "✓ Service restarted"

# Watch mode - rebuild on file changes (requires nodemon)
watch:
	@echo "Watching for changes..."
	npm run watch

# Shorthand for just building
b: build

# Shorthand for deployment
d: deploy
