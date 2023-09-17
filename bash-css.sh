#!/bin/bash

# Verificar el ancho de pantalla actual
WIDTH=$(tput cols)

# Archivo CSS de entrada y salida
INPUT_FILE="grid.css"
OUTPUT_FILE="grid_modified.css"

# Reglas CSS para móviles y tablets
MOBILE_RULES='
@media (max-width: 599px) {
  .grid-container {
    grid-template:
      "mobile-header"  100px
      "mobile-navbar"  50px
      "mobile-main"    auto
      "mobile-sidebar" 100px
      "mobile-footer"  100px;
  }
}
'

TABLET_RULES='
@media (min-width: 600px) and (max-width: 899px) {
  .grid-container {
    grid-template:
      "tablet-header  tablet-header" 100px
      "tablet-navbar  tablet-navbar" 50px
      "tablet-sidebar  tablet-main"   auto
      "tablet-footer  tablet-footer" 100px /
      200px    auto;
  }
}
'

# Copiar el archivo de entrada al archivo de salida
cp "$INPUT_FILE" "$OUTPUT_FILE"

# Insertar las reglas CSS según el ancho de pantalla
if [ "$WIDTH" -lt 600 ]; then
  echo "$MOBILE_RULES" >> "$OUTPUT_FILE"
elif [ "$WIDTH" -ge 600 ] && [ "$WIDTH" -lt 900 ]; then
  echo "$TABLET_RULES" >> "$OUTPUT_FILE"
fi

echo "Reglas CSS modificadas según el ancho de pantalla en $OUTPUT_FILE"
