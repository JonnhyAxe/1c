declare namespace sun {
    namespace security {
        namespace ssl {
            class ByteBufferInputStream extends java.io.InputStream {
                public read(): int
                public read(arg0: byte[]): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public skip(arg0: long): long
                public available(): int
                public close(): void
                public mark(arg0: int): void
                public reset(): void
                public markSupported(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}