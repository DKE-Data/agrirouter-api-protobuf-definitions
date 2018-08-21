![GitHub Logo](res/img/logo.svg)

# agrirouter-api-protobuf-definitions

## Project status

![Build status](https://travis-ci.com/DKE-Data/agrirouter-api-protobuf-definitions.svg?branch=develop)

## Project description

### The agrirouter

The agrirouter is a universal data exchange platform for farmers and agricultural contractors that makes it possible to connect machinery and agricultural software, regardless of vendor or manufacturer. Agrirouter does not save data; it transfers data.

As a universal data exchange platform, agrirouter fills a gap on the way to Farming 4.0. Its underlying concept unites cross-vendor and discrimination-free data transfer. You retain full control over your data. Even data exchange with service providers (e.g. agricultural contractors) and other partners is uncomplicated: Data are very rapidly transferred via the online connection, and if you wish, is intelligently connected to other datasets.

### The current project you're looking at

This project contains the internal Google Protocol Buffer (protobuf) definitions for the communication with the agrirouter. All the definitions are part of the communcation structure of the agrirouter. For more informations see the technical integration guide which you can download from the developer section on the product website.

## External resources

Here are some external resources for the development:

* [my-agrirouter.com Website](https://my-agrirouter.com) 
* [EFDI Protobuf Definition](https://www.aef-online.org)

## Development hints

### Language specific compiling of the `*.proto` definitions

#### Java

Generating the Java classes for the given `*.proto` is quite simple. The project contain a Maven `pom.xml` which references a simple plugin to generate the classes. Just call</br>

`mvn clean package -Pgenerate-protobuf-api`

and the generated source files will be placed underneath `src/main/generated`. Additional references - like native Google APIs - are resolved by the plugin itself.

If you want to add a Maven dependency feel free to fetch the latest snapshot from Maven Central. Just add the following repository:

```xml
<repositories>
    <repository>
        <id>snapshots-repo</id>
        <url>https://oss.sonatype.org/content/repositories/snapshots</url>
            <releases>
                <enabled>false</enabled>
            </releases>
            <snapshots>
                <enabled>true</enabled>
            </snapshots>
    </repository>
</repositories>
```

After adding the snapshot repository feel free to add the Maven dependency:

```xml
<dependency>
    <groupId>com.agrirouter.proto</groupId>
    <artifactId>definitions</artifactId>
    <version>0.0.1-SNAPSHOT</version>
</dependency>
```

### C++

#### How to install Protobuf C++ Compiler

The following instructions are based on the [Google Protobuf installation guide](https://github.com/google/protobuf/blob/master/src/README.md) and are optimized for Unix based systems. For Windows it is recommended to install [Cygwin](https://www.cygwin.com/) and do the same steps as if you were on a Unix based system.

#### Download packages

You can download protoc and protobuf packages from [Google Protobuf Releases](https://github.com/google/protobuf/releases).
Make sure you download **the same versions** of protoc and protobuf otherwise the installation won't work.

E.g. *protoc-3.5.0-linux-x86_64.zip* and *protobuf-cpp-3.5.0.zip*

#### Prepare Protoc

1. Unzip package <br>
   `unzip protoc-3.* -d protoc3`
2. Move protoc to /usr/bin/ <br>
   `sudo mv protoc3/bin/protoc /usr/bin/`
3. Move included packages to /usr/include/ <br>
   `sudo mv protoc3/include/* /usr/include/`
4. Optional: make protoc executable for everyone <br>
   `sudo chmod +x /usr/bin/protoc`
5. Optional: make includes readable for everyone <br>
   `sudo chmod +r /usr/include/google/*`

#### Install Protobuf

1. Unzip package <br>
   `unzip protobuf-cpp-3.* -d protobuf3`
2. Go to folder *profobuf3* and make file configure executable <br>
   `chmod +x configure`
3. Execute following commands <br>
   `./configure` <br>
   `make` <br>
   `make check` <br>
   `sudo make install` <br>
   `sudo ldconfig` <br>
   Note: If "make check" fails, you can still install, but it is likely that some features of this library will not work correctly on your system. Proceed at your own risk.

#### Use Protoc

If you want to compile some proto files use `protoc [OPTIONS] PROTO_FILES` <br>

The `[OPTIONS]` part indicates the destination of compiled file. You can use relative and absolute paths. <br>
In the `PROTO_FILES` part you can define which protobuf files will be compiled.

E.g. the command `protoc --cpp_out=. ./*.proto` compiles every every proto file in this folder and places the compiled ones within this folder.

#### Cross compiling

If you want to use cross compiling you have to use `--host` option when executing `./configure`. <br>
E.g. `./configure --host=powerpc-linux CC=powerpc-linux-gnu-gcc CXX=powerpc-linux-gnu-g++  --with-protoc=/usr/bin/protoc` <br>

Also see [Cross-compiling hints](https://github.com/eurotech/edc-examples/wiki/Cross-compiling-protobuf-for-ARM-architecture).



