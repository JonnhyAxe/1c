declare namespace sun {
    namespace awt {
        namespace image {
            class IntegerInterleavedRaster extends sun.awt.image.IntegerComponentRaster {
                public constructor(arg0: java.awt.image.SampleModel, arg1: java.awt.Point)
                public constructor(arg0: java.awt.image.SampleModel, arg1: java.awt.image.DataBuffer, arg2: java.awt.Point)
                public constructor(arg0: java.awt.image.SampleModel, arg1: java.awt.image.DataBuffer, arg2: java.awt.Rectangle, arg3: java.awt.Point, arg4: sun.awt.image.IntegerInterleavedRaster)
                public getDataOffsets(): int[]
                public getDataOffset(arg0: int): int
                public getScanlineStride(): int
                public getPixelStride(): int
                public getDataStorage(): int[]
                public getDataElements(arg0: int, arg1: int, arg2: java.lang.Object): java.lang.Object
                public getDataElements(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.lang.Object): java.lang.Object
                public setDataElements(arg0: int, arg1: int, arg2: java.lang.Object): void
                public setDataElements(arg0: int, arg1: int, arg2: java.awt.image.Raster): void
                public setDataElements(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.lang.Object): void
                public createWritableChild(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int[]): java.awt.image.WritableRaster
                public createChild(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int[]): java.awt.image.Raster
                public createCompatibleWritableRaster(arg0: int, arg1: int): java.awt.image.WritableRaster
                public createCompatibleWritableRaster(): java.awt.image.WritableRaster
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}