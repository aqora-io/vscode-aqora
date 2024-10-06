
# Aqora for VSCode

![Aqora Logo](images/icon_white.png)

## Overview

**Aqora** is a Visual Studio Code extension that integrates the Aqora CLI directly into your editor. This extension simplifies workflows related to quantum computing projects by providing easy access to the Aqora platform's functionalities, such as managing templates, project uploads, and testing, without leaving the VSCode environment.

## Features

- **Clone Templates:** Quickly clone a project template from the Aqora platform.
- **Login via OAuth2:** Log in to Aqora using secure OAuth2 authentication.
- **Test Projects:** Run tests on your Aqora projects directly from the editor.
- **Upload Projects:** Upload your quantum computing projects to the Aqora platform with a single command.

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or using the keyboard shortcut `Ctrl+Shift+X`.
3. Search for "Aqora" in the marketplace.
4. Click the "Install" button.

Alternatively, you can install the extension manually by cloning the repository and running the extension:

```bash
git clone https://github.com/aqora-io/vscode-aqora
cd vscode-aqora
npm install
```

## Usage

### Commands

Aqora extension provides the following commands, accessible via the Command Palette (`Ctrl+Shift+P`):

1. **Aqora: Clone a template from aqora.io.**
   - Use this command to clone a competition template from Aqora.
   
2. **Aqora: Login into aqora via OAuth2.**
   - Securely log in to your Aqora account using OAuth2.
   
3. **Aqora: Test your aqora project.**
   - Run tests on your Aqora project directly from VSCode.
   
4. **Aqora: Upload your project to Aqora platform.**
   - Easily upload your project to the Aqora platform for further processing or sharing.

## Issues

If you encounter any problems or bugs, please report them at the [GitHub issues page](https://github.com/aqora-io/vscode-aqora/issues).

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

Please follow [Conventional
Commits](https://www.conventionalcommits.org/en/v1.0.0/), which allows our
project to have beautiful changelogs based on your commit messages. We strongly
encourage you to install [Cocogitto](https://docs.cocogitto.io/):

```bash
$ cargo install cocogitto cargo-edit
$ cog install-hook --all
```

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/aqora-io/vscode-aqora/blob/main/LICENSE) file for details.

## Repository

For more details, check out the [GitHub repository](https://github.com/aqora-io/vscode-aqora).

