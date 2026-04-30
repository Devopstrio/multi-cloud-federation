.PHONY: help build up down test lint migrate issue-token validate-trust simulate-federation

help:
	@echo "Multi-Cloud Federation Platform - Management Commands"
	@echo "----------------------------------------------------"
	@echo "build              : Build all service containers"
	@echo "up                 : Start all services in the background"
	@echo "down               : Stop all services"
	@echo "test               : Run all tests (Unit + Federation flows)"
	@echo "lint               : Run linting checks"
	@echo "migrate            : Run database migrations"
	@echo "issue-token        : Manually issue a federated session token"
	@echo "validate-trust     : Run cross-cloud trust boundary validation"
	@echo "simulate-federation: Run multi-cloud access simulation scenario"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api tests/federation
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

issue-token:
	docker-compose exec api python scripts/issue-token/generate.py

validate-trust:
	docker-compose exec api python scripts/validate/trust_checker.py

simulate-federation:
	docker-compose exec api python scripts/simulate/cross_cloud_access.py
