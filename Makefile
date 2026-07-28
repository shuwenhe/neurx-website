.PHONY: help build deploy run push clean

help:
	@echo "NeurX Website - Deployment Commands"
	@echo "===================================="
	@echo "make build      - Build dist files locally"
	@echo "make deploy     - Build and push to Git"
	@echo "make run        - Build, commit, push, and deploy (full deployment)"
	@echo "make push       - Push current changes to Git (with build)"
	@echo "make clean      - Clean dist directory"
	@echo ""

build:
	@echo "Building distribution files..."
	npm run build
	@echo "✓ Build complete"

deploy: build
	@echo "Deploying to local server and Git..."
	@git config user.name "shuwenhe" && git config user.email "1201220707@pku.edu.cn"
	@git add .
	@if git diff-index --quiet HEAD --; then \
		echo "✓ No changes to commit"; \
	else \
		git commit -m "chore: auto-build and deploy" && echo "✓ Committed"; \
	fi
	@git push && echo "✓ Pushed to GitHub"
	@echo ""
	@echo "🚀 Deployment complete!"
	@echo "Website updated: https://github.com/shuwenhe/neurx-website"

run: deploy
	@echo "✓ All done! Changes live on both local and remote servers"

local-deploy:
	@echo "Building for local deploy..."
	@npm run build
	@echo "Starting local server on PORT=${PORT:-8000}..."
	@./scripts/serve.sh ${PORT:-8000}

local-stop:
	@./scripts/stop-serve.sh

push: build deploy

clean:
	@echo "Cleaning dist directory..."
	@rm -rf dist/
	@echo "✓ Clean complete"

# Watch mode - rebuild on file changes (requires nodemon)
watch:
	@echo "Watching for changes..."
	npm run watch

# Shorthand for just building
b: build

# Shorthand for deployment
d: deploy
