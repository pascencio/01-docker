#!/bin/bash
echo "Este es el entrypoint y voy a ejecutar el comando: $@"
exec "$@"