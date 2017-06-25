# seiryuu

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b481355921ea46009fe432fcffa53957)](https://www.codacy.com/app/MaxMEllon/seiryuu?utm_source=github.com&utm_medium=referral&utm_content=MaxMEllon/seiryuu&utm_campaign=badger)
[![CircleCI](https://circleci.com/gh/MaxMEllon/seiryuu/tree/master.svg?style=svg)](https://circleci.com/gh/MaxMEllon/seiryuu/tree/master)

## About

**seiryuu** is a timeline watcher of twitter, like comment in nicovideo.

![](./.github/demo.gif)

## Installation

> TODO

## For development

`.env` is necessary to development.
So, you must create .env to project root.

`.env`

```command
TWITTER_CONSUMER_KEY="xxxxxxxxxxxxxxxxxxxxxxxxx"
TWITTER_CONSUMER_SECRET_KEY="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
TWITTER_TOKEN_KEY="000000000-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
TWITTER_TOKEN_SECRET_KEY="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

Then you can execute to command as following, boot the **seiryuu**.
(dont need `yarn i` if you downloaded node_modules.)

```command
$ git clone https://github.com/MaxMEllon/seiryuu.git && cd seiryuu
$ yarn i
$ yarn run dev
```

## Dependencies

##### global dependencies

- **node** `>=` *8.0.0*
- **yarn** `>=` *0.24.5*

## How to use

> TODO

## LICENSE

**Copyright (c) 2017 "MaxMEllon" Kento TSUJI**

Licensed under the [MIT license](./LICENSE.txt)

  <p align="right"><a href="#top">:arrow_heading_up:</a></p>
