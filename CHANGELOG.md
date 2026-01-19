# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Dev (WIP)

- Fixed missing marker icons when used in frontend frameworks ([#20](https://github.com/Vectorial1024/leaflet-color-markers/issues/20))

## 3.0.0 (2026-01-18)

A major update.

- Added TypeScript support ([#11](https://github.com/Vectorial1024/leaflet-color-markers/issues/11))
- Graphics overhaul ([#18](https://github.com/Vectorial1024/leaflet-color-markers/pull/18)), containing the following:
  - Replaced PNG icons with SVG icons for HD rendering
  - Reorganized pre-existing 9 colors to become 18 colors ([#3](https://github.com/Vectorial1024/leaflet-color-markers/issues/3))
- Removed support for CJS (`require()`) ([#12](https://github.com/Vectorial1024/leaflet-color-markers/issues/12))

## 2.0.0 to 2.0.4 (2024-05-12)

Initial release at version `2.0.0`. (FAQ: why not version `1.0.0`? See [#1](https://github.com/Vectorial1024/leaflet-color-markers/issues/1))

Multiple versions exist to test/confirm NPM CI/CD pipeline. No feature changes between these versions.

### Changed

- Removed support for bower.js ([#1](https://github.com/Vectorial1024/leaflet-color-markers/issues/1))
- Properly support NodeJS ([#2](https://github.com/Vectorial1024/leaflet-color-markers/issues/2))
