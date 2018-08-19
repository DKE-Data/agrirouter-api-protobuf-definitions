#!/usr/bin/env bash
if [ "$TRAVIS_BRANCH" = 'develop' ] && [ "$TRAVIS_PULL_REQUEST" == 'false' ]; then
    mvn deploy -P snapshot --settings cd/mavensettings.xml
else
    mvn deploy -P snapshot --settings cd/mavensettings.xml
    # printf "Skipping deployment for branch [$TRAVIS_BRANCH], deployment of SNAPSHOTs only for development branches."
fi

