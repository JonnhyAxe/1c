declare namespace javax {
    namespace swing {
        namespace text {
            abstract class LayeredHighlighter implements javax.swing.text.Highlighter {
                public constructor()
                public abstract paintLayeredHighlights(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: java.awt.Shape, arg4: javax.swing.text.JTextComponent, arg5: javax.swing.text.View): void
                public static class: java.lang.Class<any>
            }
            interface LayeredHighlighter$$Lambda implements javax.swing.text.Highlighter {
                (arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: java.awt.Shape, arg4: javax.swing.text.JTextComponent, arg5: javax.swing.text.View): void
            }
        }
    }
}