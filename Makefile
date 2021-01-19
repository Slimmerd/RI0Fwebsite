### DEV
build-dev:
	cd FrontEnd/ssr_ri0f_website && $(MAKE) build
	cd Backend && $(MAKE) build

run-dev:
	ENV=dev docker-compose -f docker-compose.yml up


### PROD
build-production:
	cd FrontEnd/ssr_ri0f_website && $(MAKE) build
	cd BackEnd && $(MAKE) build

run-production:
	ENV=production docker-compose -f docker-compose.yml up

stop:
	docker-compose down



