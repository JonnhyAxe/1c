declare namespace sun {
    namespace java2d {
        namespace loops {
            abstract class XorPixelWriter extends sun.java2d.loops.PixelWriter {
                protected dstCM: java.awt.image.ColorModel
                public writePixel(arg0: int, arg1: int): void
                protected abstract xorPixel(arg0: java.lang.Object): void
                public static class: java.lang.Class<any>
            }
            interface XorPixelWriter$$Lambda extends sun.java2d.loops.PixelWriter {
                (arg0: java.lang.Object): void
            }
        }
    }
}