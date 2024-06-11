# SICK - Spirit Island Card Katalog

This project provides a website containing most cards for *RftG*
It is hosted on [https://rick.kreest.xyz](https://rick.kreest.xyz).
It's an adaptation of SICK - [https://sick.oberien.de](https://sick.oberien.de)

## Building

### Typescript

`typescript` needs to be installed:
```sh
npm install --global typescript
```

Use `tsc` to build and watch for changes:
```sh
tsc --pretty --watch --sourceMap
```
### Downloading The Resources

Install git-lfs https://git-lfs.github.com/

From the root of the repository run `git lfs fetch` and then `git lfs checkout`

### Open

After building everything and downloading the resources, open `index.html` in your browser, e.g.
```sh
firefox index.html
```

### Deploy

After building everything, the following files and folders can be copied to a static
website file hoster, e.g. with scp:
```sh
scp -r imgs res index.html cards.js search.xml <server>:<folder>
```
# License

Licensed under either of

 * Apache License, Version 2.0, ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
 * MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option with parts copyrighted by Rio Grande Games.

All images and some text belongs to Rio Grande Games.
