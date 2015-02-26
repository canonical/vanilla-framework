install:
	type ${'gulp'} || sudo npm install -g gulp
	type ${'scss-lint'} || sudo gem install scss-lint
	npm install

.PHONY: install 
