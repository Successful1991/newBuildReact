develop:
	npm run dev

install:
	npm install

build:
	rm -rf dist
    NODE_ENV=production npx webpack
prettier:
	npx prettier --write src
test:
	npm test --watch

lint:
	npx eslint .

template:
	node create-component $(name) $(type)

templatePage:
	node create-page $(name)