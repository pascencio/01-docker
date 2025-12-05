# Cómo usar esta imagen

```bash
docker build -t my-image .
docker run -d --name my-container my-image
```

Para ver los logs del contenedor:

```bash
docker logs -f my-container
```

Para detener el contenedor:

```bash
docker stop my-container
```

Para borrar el contenedor:

```bash
docker rm my-container
```

Para borrar la imagen:

```bash
docker rmi my-image
```