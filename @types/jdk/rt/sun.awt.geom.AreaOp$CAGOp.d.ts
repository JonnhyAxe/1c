declare namespace sun {
    namespace awt {
        namespace geom {
            abstract class AreaOp$CAGOp extends sun.awt.geom.AreaOp {
                public constructor()
                public newRow(): void
                public classify(arg0: sun.awt.geom.Edge): int
                public getState(): int
                public abstract newClassification(arg0: boolean, arg1: boolean): boolean
                public static class: java.lang.Class<any>
            }
            interface AreaOp$CAGOp$$Lambda extends sun.awt.geom.AreaOp {
                (arg0: boolean, arg1: boolean): boolean
            }
        }
    }
}