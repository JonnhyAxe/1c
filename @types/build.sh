#!/bin/bash

dir=$(cd $(dirname $0) && pwd)
set -xe

# create a new isLambda.js

rm -f $dir/../dist/parser/isLambda.js
touch $dir/../dist/parser/isLambda.js

# build jdk

rm -rf $dir/jdk
mkdir $dir/jdk
cd $dir/jdk

jars=$(find /usr/lib/jvm/java-8-openjdk-amd64/jre/lib -name "*.jar")

node -e "require('$dir/../dist/parser/parseJAR').generateJDKDefinition('$dir/..')" $jars

find . -name "*.d.ts" | sort | xargs -I {} echo "/// <reference path=\"{}\" />" > index.d.ts

# run test

test=/tmp/1c@types_test.ts

echo "/// <reference path='$dir/jdk/index.d.ts' />" > $test
echo "/// <reference path='$dir/common/jdk.d.ts' />" >> $test
echo "/// <reference path='$dir/common/jjs.d.ts' />" >> $test
grep -h "declare namespace" rt/*.d.ts | sort | uniq | awk '{print $3}' | xargs -I {} echo "Boolean({})" >> $test

tsc --noEmit --skipLibCheck $test
