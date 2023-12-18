# eslint-plugin-no-styled-components

Prevent imports and usages of styled-components

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-styled-components`:

```sh
npm install eslint-plugin-no-styled-components --save-dev
```

## Usage

Add `no-styled-components` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-styled-components"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-styled-components/imports": 2, // <-- 2 is error, 1 is warning, 0 is off
        "no-styled-components/usages": 1
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


