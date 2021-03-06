declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace multi {
                class MultiPopupMenuUI extends javax.swing.plaf.PopupMenuUI {
                    protected uis: java.util.Vector
                    public constructor()
                    public getUIs(): javax.swing.plaf.ComponentUI[]
                    public isPopupTrigger(arg0: java.awt.event.MouseEvent): boolean
                    public getPopup(arg0: javax.swing.JPopupMenu, arg1: int, arg2: int): javax.swing.Popup
                    public contains(arg0: javax.swing.JComponent, arg1: int, arg2: int): boolean
                    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    public installUI(arg0: javax.swing.JComponent): void
                    public uninstallUI(arg0: javax.swing.JComponent): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getAccessibleChildrenCount(arg0: javax.swing.JComponent): int
                    public getAccessibleChild(arg0: javax.swing.JComponent, arg1: int): javax.accessibility.Accessible
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}