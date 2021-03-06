declare namespace sun {
    namespace java2d {
        namespace pipe {
            class RenderBuffer {
                protected static readonly SIZEOF_BYTE: long
                protected static readonly SIZEOF_SHORT: long
                protected static readonly SIZEOF_INT: long
                protected static readonly SIZEOF_FLOAT: long
                protected static readonly SIZEOF_LONG: long
                protected static readonly SIZEOF_DOUBLE: long
                protected readonly unsafe: sun.misc.Unsafe
                protected readonly baseAddress: long
                protected readonly endAddress: long
                protected curAddress: long
                protected readonly capacity: int
                protected constructor(arg0: int)
                public static allocate(arg0: int): sun.java2d.pipe.RenderBuffer
                public getAddress(): long
                public capacity(): int
                public remaining(): int
                public position(): int
                public position(arg0: long): void
                public clear(): void
                public skip(arg0: long): sun.java2d.pipe.RenderBuffer
                public putByte(arg0: byte): sun.java2d.pipe.RenderBuffer
                public put(arg0: byte[]): sun.java2d.pipe.RenderBuffer
                public put(arg0: byte[], arg1: int, arg2: int): sun.java2d.pipe.RenderBuffer
                public putShort(arg0: short): sun.java2d.pipe.RenderBuffer
                public put(arg0: short[]): sun.java2d.pipe.RenderBuffer
                public put(arg0: short[], arg1: int, arg2: int): sun.java2d.pipe.RenderBuffer
                public putInt(arg0: int, arg1: int): sun.java2d.pipe.RenderBuffer
                public putInt(arg0: int): sun.java2d.pipe.RenderBuffer
                public put(arg0: int[]): sun.java2d.pipe.RenderBuffer
                public put(arg0: int[], arg1: int, arg2: int): sun.java2d.pipe.RenderBuffer
                public putFloat(arg0: float): sun.java2d.pipe.RenderBuffer
                public put(arg0: float[]): sun.java2d.pipe.RenderBuffer
                public put(arg0: float[], arg1: int, arg2: int): sun.java2d.pipe.RenderBuffer
                public putLong(arg0: long): sun.java2d.pipe.RenderBuffer
                public put(arg0: long[]): sun.java2d.pipe.RenderBuffer
                public put(arg0: long[], arg1: int, arg2: int): sun.java2d.pipe.RenderBuffer
                public putDouble(arg0: double): sun.java2d.pipe.RenderBuffer
                public static class: java.lang.Class<any>
            }
        }
    }
}