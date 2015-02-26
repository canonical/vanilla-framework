install:
	@echo "Installing missing gulp deps..."
	@type gulp || sudo npm install -g gulp
	@type scss-lint || sudo gem install scss-lint
	@npm install
	@echo "...done"
	@echo "please chose one of the following gulp options:"
	@gulp help

clean:
	-rm -r build
	-rm -r node_modules

.PHONY: install clean
