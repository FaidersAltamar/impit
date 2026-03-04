# Configuración en Apify Console

El Actor está en el repo. Usa esta URL en Apify para que tome la carpeta correcta.

## Opción 1: URL con carpeta (recomendado)

En el campo **Git URL** de tu Actor, pega exactamente:

```
https://github.com/FaidersAltamar/impit#master:chatgpt-impit-proxy
```

Formato: `URL#branch:carpeta`

Luego haz clic en **"Build now"**.

## Opción 2: Campos separados

Si Apify muestra campos separados:
- **Git URL:** `https://github.com/FaidersAltamar/impit`
- **Branch:** `master`
- **Directory / Folder:** `chatgpt-impit-proxy`

## Importante

Sin especificar la carpeta `chatgpt-impit-proxy`, Apify usará la raíz del repo (Cargo.toml) y el build fallará.
