declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicSplitPaneUI extends javax.swing.plaf.SplitPaneUI {
                    protected static readonly NON_CONTINUOUS_DIVIDER: string
                    protected static KEYBOARD_DIVIDER_MOVE_OFFSET: int
                    protected splitPane: javax.swing.JSplitPane
                    protected layoutManager: javax.swing.plaf.basic.BasicSplitPaneUI$BasicHorizontalLayoutManager
                    protected divider: javax.swing.plaf.basic.BasicSplitPaneDivider
                    protected propertyChangeListener: java.beans.PropertyChangeListener
                    protected focusListener: java.awt.event.FocusListener
                    protected dividerSize: int
                    protected nonContinuousLayoutDivider: java.awt.Component
                    protected draggingHW: boolean
                    protected beginDragDividerLocation: int
                    protected upKey: javax.swing.KeyStroke
                    protected downKey: javax.swing.KeyStroke
                    protected leftKey: javax.swing.KeyStroke
                    protected rightKey: javax.swing.KeyStroke
                    protected homeKey: javax.swing.KeyStroke
                    protected endKey: javax.swing.KeyStroke
                    protected dividerResizeToggleKey: javax.swing.KeyStroke
                    protected keyboardUpLeftListener: java.awt.event.ActionListener
                    protected keyboardDownRightListener: java.awt.event.ActionListener
                    protected keyboardHomeListener: java.awt.event.ActionListener
                    protected keyboardEndListener: java.awt.event.ActionListener
                    protected keyboardResizeToggleListener: java.awt.event.ActionListener
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    public installUI(arg0: javax.swing.JComponent): void
                    protected installDefaults(): void
                    protected installListeners(): void
                    protected installKeyboardActions(): void
                    public uninstallUI(arg0: javax.swing.JComponent): void
                    protected uninstallDefaults(): void
                    protected uninstallListeners(): void
                    protected uninstallKeyboardActions(): void
                    protected createPropertyChangeListener(): java.beans.PropertyChangeListener
                    protected createFocusListener(): java.awt.event.FocusListener
                    protected createKeyboardUpLeftListener(): java.awt.event.ActionListener
                    protected createKeyboardDownRightListener(): java.awt.event.ActionListener
                    protected createKeyboardHomeListener(): java.awt.event.ActionListener
                    protected createKeyboardEndListener(): java.awt.event.ActionListener
                    protected createKeyboardResizeToggleListener(): java.awt.event.ActionListener
                    public getOrientation(): int
                    public setOrientation(arg0: int): void
                    public isContinuousLayout(): boolean
                    public setContinuousLayout(arg0: boolean): void
                    public getLastDragLocation(): int
                    public setLastDragLocation(arg0: int): void
                    public getDivider(): javax.swing.plaf.basic.BasicSplitPaneDivider
                    protected createDefaultNonContinuousLayoutDivider(): java.awt.Component
                    protected setNonContinuousLayoutDivider(arg0: java.awt.Component): void
                    protected setNonContinuousLayoutDivider(arg0: java.awt.Component, arg1: boolean): void
                    public getNonContinuousLayoutDivider(): java.awt.Component
                    public getSplitPane(): javax.swing.JSplitPane
                    public createDefaultDivider(): javax.swing.plaf.basic.BasicSplitPaneDivider
                    public resetToPreferredSizes(arg0: javax.swing.JSplitPane): void
                    public setDividerLocation(arg0: javax.swing.JSplitPane, arg1: int): void
                    public getDividerLocation(arg0: javax.swing.JSplitPane): int
                    public getMinimumDividerLocation(arg0: javax.swing.JSplitPane): int
                    public getMaximumDividerLocation(arg0: javax.swing.JSplitPane): int
                    public finishedPaintingChildren(arg0: javax.swing.JSplitPane, arg1: java.awt.Graphics): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getInsets(arg0: javax.swing.JComponent): java.awt.Insets
                    protected resetLayoutManager(): void
                    protected startDragging(): void
                    protected dragDividerTo(arg0: int): void
                    protected finishDraggingTo(arg0: int): void
                    protected getDividerBorderSize(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}