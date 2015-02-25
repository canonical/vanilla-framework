SASSDOC = 'sassdoc --verbose'
SASSDOCIFY = node_modules/sassdocify/bin/sassdocify

install:
	type ${'gulp'} || sudo npm install -g gulp
	type ${'scss-lint'} || sudo gem install scss-lint
	npm install

sassdocify:
	type ${SASSDOCIFY} || npm install
	${SASSDOCIFY} scss

publish:
	git -C .pages push origin gh-pages --force

clean:
	rm -rf .pages .sassdoc

.PHONY: sassdocify web-style-guide publish clean