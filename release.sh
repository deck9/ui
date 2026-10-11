#!/bin/bash
set -euo pipefail

if [ "$#" -eq 0 ]; then
  echo "Usage: ./release.sh <patch|minor|major|preminor|prerelease|...> [npm version options]" >&2
  echo "Example: ./release.sh preminor --preid next" >&2
  exit 1
fi

git pull --ff-only
npm run build

PACKAGE_VERSION=$(npm version "$@")

# atomic: if main is rejected, the tag stays local too, so no release can publish it
git push --atomic origin HEAD "$PACKAGE_VERSION"

echo "Pushed new version $PACKAGE_VERSION"

case "$PACKAGE_VERSION" in
  *-*) gh release create "$PACKAGE_VERSION" --generate-notes --prerelease ;;
  *) gh release create "$PACKAGE_VERSION" --generate-notes ;;
esac
