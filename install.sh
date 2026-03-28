#!/bin/bash

echo "======================================"
echo "Instalando Colegio Naciones Unidas del Mundo"
echo "======================================"
echo ""

if ! command -v node &> /dev/null
then
    echo "Node.js no está instalado. Por favor instala Node.js primero."
    echo "Visita: https://nodejs.org/"
    exit 1
fi

echo "Instalando dependencias..."
npm install

echo ""
echo "======================================"
echo "Instalación completada!"
echo "======================================"
echo ""
echo "Para iniciar el proyecto ejecuta:"
echo "  npm run dev"
echo ""
echo "El sitio estará disponible en http://localhost:5173"
echo ""
