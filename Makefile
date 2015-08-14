SRC = index.js

default:
	@echo "No default task"

test:
	@./node_modules/.bin/mocha test

coverage:
	@node ./node_modules/istanbul/lib/cli cover ./node_modules/.bin/_mocha test

include node_modules/make-lint/index.mk

.PHONY: test coverage
