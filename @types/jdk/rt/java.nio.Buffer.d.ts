declare namespace java {
    namespace nio {
        abstract class Buffer {
            public capacity(): int
            public position(): int
            public position(arg0: int): java.nio.Buffer
            public limit(): int
            public limit(arg0: int): java.nio.Buffer
            public mark(): java.nio.Buffer
            public reset(): java.nio.Buffer
            public clear(): java.nio.Buffer
            public flip(): java.nio.Buffer
            public rewind(): java.nio.Buffer
            public remaining(): int
            public hasRemaining(): boolean
            public abstract isReadOnly(): boolean
            public abstract hasArray(): boolean
            public abstract array(): java.lang.Object
            public abstract arrayOffset(): int
            public abstract isDirect(): boolean
            public static class: java.lang.Class<any>
        }
    }
}