# Tony Node

Tony execution and REPL for Node.js.

Tony is a functional, strongly typed, high level, general purpose programming language. Tony employs refinement types, allowing its type checker to catch domain-specific bugs at compile time.

Other core components of Tony can be found through the following links:

* [Formal specification](https://github.com/tony-lang/spec)
* [Compiler and Type Inference algorithm](https://github.com/tony-lang/tony)
* [CLI](https://github.com/tony-lang/cli)

## Installation

The `tony-node` package is published on [NPM](https://www.npmjs.com/package/tony-node).

You may install it

* using [Yarn](https://yarnpkg.com/) (preferred)

    ```
    $ yarn global add tony-node
    ```

* or using [NPM](https://docs.npmjs.com/cli/v6/commands/npm)

    ```
    $ npm install -g tony-node
    ```

## Usage

Import Tony Node with

```ts
import * as TonyNode from 'tony-node'
```

### `exec`

`exec` takes a

## Development

To start development you first have to fork this repository and locally clone your fork.

Use `yarn start` to listen to changes and rebuild dynamically.

### Testing

To run the tests:

    $ yarn test

To let TypeScript check types:

    $ yarn tsc

The linter can be run as follows:

    $ yarn lint

We use [Prettier](https://prettier.io/) for automated code formatting:

    $ yarn prettier

You can find all commands run by the CI workflow in `.github/workflows/ci.yml`.

## Contributing

We warmly welcome everyone who is intersted in contributing. Please reference our [contributing guidelines](CONTRIBUTING.md) and our [Code of Conduct](CODE_OF_CONDUCT.md).

## Releases

[Here](https://github.com/tony-lang/node/releases/) you can find details on all past releases.
Unreleased breaking changes that are on the current master can be found [here](CHANGELOG.md).

Tony follows Semantic Versioning 2.0 as defined at http://semver.org. Reference our [security policy](SECURITY.md).

### Publishing

1. Review breaking changes and deprecations in `CHANGELOG.md`.
1. Change the version in `package.json`.
1. Reset `CHANGELOG.md`.
1. Create a pull request to merge the changes into `master`.
1. After the pull request was merged, create a new release listing the breaking changes, deprecations and commits on `master` since the last release.
1. The release workflow will publish the package to NPM.
