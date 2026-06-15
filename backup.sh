#!/bin/bash

echo "Iniciando respaldo..."

mkdir -p backup

cp README.md backup/README_backup.md
cp index.html backup/index_backup.html
cp usuarios.html backup/usuarios_backup.html

echo "Respaldo completado correctamente."
