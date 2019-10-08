#!/usr/bin/env bash
if [ "$TRAVIS_BRANCH" = 'master' ] || [ "$TRAVIS_BRANCH" = 'release' ] || [ "$TRAVIS_BRANCH" = 'develop' ]; then
  if [ "$TRAVIS_PULL_REQUEST" == 'false' ]; then
    # mvn deploy -P release --settings cd/mavensettings.xml
  else
    printf "Skipping deployment for pull request on branch [$TRAVIS_BRANCH], deployment of SNAPSHOTs only for certain branches (master, release, develop)."
  fi
else
    printf "Skipping deployment for branch [$TRAVIS_BRANCH], deployment of SNAPSHOTs only for development branches."
fi
