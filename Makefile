install:
	@echo "Installing missing gulp deps..."
	@type npm || curl -L https://npmjs.com/install.sh | sudo sh
	@type gulp || sudo npm install -g gulp
	@type scss-lint || sudo gem install scss-lint -v 0.34.0

	@npm install
	@echo "...done"
	@echo "please chose one of the following gulp options:"
	@gulp help

clean:
	-rm -r build
	-rm -r node_modules

.PHONY: install clean
