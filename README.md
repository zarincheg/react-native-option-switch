# react-native-option-switch
The React Native component to provide UI with option selection like radio button or yes/no choice.

Demo:

![Demo](https://raw.githubusercontent.com/zarincheg/react-native-option-switch/master/img/demo.gif)

## Install

`npm i --save react-native-option-switch`

## Params

| Param | Description |
|--------|------------|
| `options` (required) | An array of options, each option is an object with particular fields: `key`(don't use with `isBool={true}`), `title`, `value`, `isDefault` (optional).|
| `onChange` | A handler of the value change event. A function that accepts a new value as the first param.|
| `styles` | Object with custom styles for the component. You can use these fields to customize whole component (`container` field), items (`item` and `selectedItem`) and item labels (`label`).|
| `isBool` | Default is `false`. Set `true`, if you need to boolean control.|
| `isNullable` | Default is `false`. Set `true` in case of nothing to select.|