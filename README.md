# build locally
docker build . -t pupp

# run locally
docker run -it -p 9000:9000 --cap-add=SYS_ADMIN -v "$(pwd)":/app pupp bash
