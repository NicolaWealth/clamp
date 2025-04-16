![Tests Passing](https://github.com/NicolaWealth/clamp/actions/workflows/auto_test_main_badge.yml/badge.svg)
![Code Cov](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fnicolawealth%2Fclamp%2Fraw%2Fmain%2Fcodecov/badge.json&query=%24.message&label=Code%20Coverage&color=%24.color)

# Introduction
The `clamp` package provides functionality to force a given numerical value to be within a given range. 

# Installation
This package should be installed via npm. You must have npm installed first. The following can be run on the commandline to install the `clamp` package with npm:

`npm install @nicolawealth/clamp`

# Interface
The package exports the function `clamp(value, low, high, def)` where `low` and `high` define the acceptable range for `value` to be in. 
If `value` is `undefined` then it is reassigned to the value of `def` before clamping. If `value` is below the given range, it is reassigned to the value of `low` to clamp it.
If `value` is above the given range, it is reassigned to the value of `high` to clamp it.

# Testing
Tests can be found in `clamp.test.ts` located in `clamp/src` and should be run with sinon, mocha and nyc.
