#!/bin/bash

# Run npm version and save the output
PACKAGE_VERSION=$(npm version $1)

git push
git push origin $PACKAGE_VERSION

echo Pushed new version $PACKAGE_VERSION

gh release create $PACKAGE_VERSION \
  --generate-notes