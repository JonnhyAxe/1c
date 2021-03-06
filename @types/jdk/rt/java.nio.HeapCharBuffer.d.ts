declare namespace java {
    namespace nio {
        class HeapCharBuffer extends java.nio.CharBuffer {
            protected constructor(arg0: char[], arg1: int, arg2: int, arg3: int, arg4: int, arg5: int)
            public slice(): java.nio.CharBuffer
            public duplicate(): java.nio.CharBuffer
            public asReadOnlyBuffer(): java.nio.CharBuffer
            protected ix(arg0: int): int
            public get(): char
            public get(arg0: int): char
            public get(arg0: char[], arg1: int, arg2: int): java.nio.CharBuffer
            public isDirect(): boolean
            public isReadOnly(): boolean
            public put(arg0: char): java.nio.CharBuffer
            public put(arg0: int, arg1: char): java.nio.CharBuffer
            public put(arg0: char[], arg1: int, arg2: int): java.nio.CharBuffer
            public put(arg0: java.nio.CharBuffer): java.nio.CharBuffer
            public compact(): java.nio.CharBuffer
            public subSequence(arg0: int, arg1: int): java.nio.CharBuffer
            public order(): java.nio.ByteOrder
            public subSequence(arg0: int, arg1: int): java.lang.CharSequence
            public static class: java.lang.Class<any>
        }
    }
}