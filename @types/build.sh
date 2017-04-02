#!/bin/bash

DIR=$(cd $(dirname $0) && pwd)
set -xe

# build jdk

cd $DIR/jdk

line0=$(find $JAVA_HOME -name "*.jar" | grep rt.jar)
lineN=$(find $JAVA_HOME -name "*.jar" | grep -v rt.jar | grep -v sa-jdi.jar | grep -v tools.jar)

echo $line0 $lineN | sed -e 's/\ /\n/g' | parallel -I{} -j4 --no-notice --line-buffer node ../parse-jar.js {}

ls *.d.ts | xargs -I {} echo "/// <reference path=\"jdk/{}\" />" > ../jdk.d.ts

# run test

cd $DIR
tsc --noEmit --skipLibCheck test.ts