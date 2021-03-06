declare namespace sun {
    namespace font {
        abstract class TextLabel {
            public constructor()
            public abstract getVisualBounds(arg0: float, arg1: float): java.awt.geom.Rectangle2D
            public abstract getLogicalBounds(arg0: float, arg1: float): java.awt.geom.Rectangle2D
            public abstract getAlignBounds(arg0: float, arg1: float): java.awt.geom.Rectangle2D
            public abstract getItalicBounds(arg0: float, arg1: float): java.awt.geom.Rectangle2D
            public abstract getOutline(arg0: float, arg1: float): java.awt.Shape
            public abstract draw(arg0: java.awt.Graphics2D, arg1: float, arg2: float): void
            public getVisualBounds(): java.awt.geom.Rectangle2D
            public getLogicalBounds(): java.awt.geom.Rectangle2D
            public getAlignBounds(): java.awt.geom.Rectangle2D
            public getItalicBounds(): java.awt.geom.Rectangle2D
            public getOutline(): java.awt.Shape
            public draw(arg0: java.awt.Graphics2D): void
            public static class: java.lang.Class<any>
        }
    }
}