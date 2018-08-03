declare namespace java {
    namespace nio {
        namespace channels {
            class Channels {
                public static newInputStream(arg0: java.nio.channels.ReadableByteChannel | java.nio.channels.ReadableByteChannel$$Lambda): java.io.InputStream
                public static newOutputStream(arg0: java.nio.channels.WritableByteChannel | java.nio.channels.WritableByteChannel$$Lambda): java.io.OutputStream
                public static newInputStream(arg0: java.nio.channels.AsynchronousByteChannel): java.io.InputStream
                public static newOutputStream(arg0: java.nio.channels.AsynchronousByteChannel): java.io.OutputStream
                public static newChannel(arg0: java.io.InputStream): java.nio.channels.ReadableByteChannel
                public static newChannel(arg0: java.io.OutputStream): java.nio.channels.WritableByteChannel
                public static newReader(arg0: java.nio.channels.ReadableByteChannel | java.nio.channels.ReadableByteChannel$$Lambda, arg1: java.nio.charset.CharsetDecoder, arg2: int): java.io.Reader
                public static newReader(arg0: java.nio.channels.ReadableByteChannel | java.nio.channels.ReadableByteChannel$$Lambda, arg1: java.lang.String | string): java.io.Reader
                public static newWriter(arg0: java.nio.channels.WritableByteChannel | java.nio.channels.WritableByteChannel$$Lambda, arg1: java.nio.charset.CharsetEncoder, arg2: int): java.io.Writer
                public static newWriter(arg0: java.nio.channels.WritableByteChannel | java.nio.channels.WritableByteChannel$$Lambda, arg1: java.lang.String | string): java.io.Writer
                public static class: java.lang.Class<any>
            }
        }
    }
}