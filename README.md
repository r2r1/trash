https://docs.docker.com/engine/install/ubuntu/

https://docs.docker.com/engine/install/linux-postinstall/

https://nodejs.org/ru/docs/guides/nodejs-docker-webapp/

https://ru.vuejs.org/v2/cookbook/dockerize-vuejs-app.html


	docker build . -t om-pwa


	docker run -it -p 127.0.0.1:8080:8080/tcp --rm --name om-pwa -d om-pwa

	docker ps

	docker logs <container_id>

	docker stop <container_id>

	docker exec -it <container_id> /bin/bash


	docker images

	docker image rm <repository>


docker compose
https://dev.to/jiprochazka/starting-up-a-new-vue-3-project-with-vite-and-docker-3355