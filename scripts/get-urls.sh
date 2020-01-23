bundle exec jekyll serve --source docs --destination docs/_site --port ${PORT} -H 0.0.0.0 &
sleep 5
node scripts/get-urls.js > urls.txt
