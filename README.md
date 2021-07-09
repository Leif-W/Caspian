# Caspian

## The world's largest endorheic lake.

### What's an endorheic lake?

It's a body of water that goes nowhere.

### Why?  What is this all about?

As a clone demo of a popular marketplace named after the world's largest continental moving body of water, this seemed an appropriate antithesis.

# Using

## Package managers

### Overview of options

* npm v7 (current) fails to install yarn, firebase, firebase-admin, and many others
* npm v6 (unmaintained) seems to work without errors
* yarn v1 installs everything ok, if you can get it outside npm, but convoluted process to upgrade to v1.23, which is no longer developed
* yarn v2 has unmet peer dependencies for firebase and firebase-admin, and convoluted process to update to v2
* yarn v3 throws too many errors and fails hard, and convoluted process to upgrade to v3
* pnpm has unmet peer dependencies, is very fast, and uses less disk space, supports US and British Colonialism by using the stolen Indian Ocean TLD .io

### Which to choose?

At the time of writing, only npm v6, and yarn v1 install all dependencies without warnings or errors.  However, pnpm has a warning, but otherwise is simpler, faster and uses less disk space.  So let's try pnpm.

# Contributing

## Git

### .gitignore

From time to time, the .gitignore file may need to be updated.  Tools evolve, and various cruft will inevitably be left behind as you work on this app.  However, do not edit the .gitignore file manually.  Instead, for now, edit the `util/gitignore.js` file (_Custom Rules_ section in the `footerText` variable), then run the script with `node util/gitignore.js` or `pnpm gitignore`.  This is a crude script based upon the Toptal .gitignore API, https.get, and fs.writeFileSync, which may be replaced with something more elegant in the future.

### Commit messages

Format: `[type](scope): short description`

Example: `⚪(info): Create README.md`

Use emoji to represent types.

Types:

- 🟢 - fea - a new feature added
- 🟡 - ref - refactor code
- 🟠 - fix - a normal bug fix
- 🔴 - cri - a critical bug fix
- 🟣 - sty - style update
- 🔵 - tes - tests
- ⚪ - doc - documentation
- 🟤 - cho - maintenance chores
- ⚫ - rem - an old feature removed

* TODO: Improve emoji.  Can you suggest other emoji schemes?
* TODO: Define scopes.  Maybe use other emoji for scopes?
