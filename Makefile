.PHONY: run

run:
	@echo "Building distribution files..."
	@npm run build
	@echo "✓ Build complete"
	@echo ""
	@echo "Starting local server on PORT=${PORT:-8000}..."
	@./scripts/serve.sh ${PORT:-8000}

# Watch mode - rebuild on file changes (requires nodemon)
watch:
	@echo "Watching for changes..."
	npm run watch

# Shorthand for just building
b: build

# Shorthand for deployment
d: deploy
