declare namespace java {
    namespace awt {
        namespace geom {
            class AreaIterator implements java.awt.geom.PathIterator {
                public constructor(arg0: java.util.Vector, arg1: java.awt.geom.AffineTransform)
                public getWindingRule(): int
                public isDone(): boolean
                public next(): void
                public currentSegment(arg0: float[]): int
                public currentSegment(arg0: double[]): int
                public static class: java.lang.Class<any>
            }
        }
    }
}