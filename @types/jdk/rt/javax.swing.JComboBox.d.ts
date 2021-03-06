declare namespace javax {
    namespace swing {
        class JComboBox<E> extends javax.swing.JComponent implements java.awt.ItemSelectable , javax.swing.event.ListDataListener , java.awt.event.ActionListener , javax.accessibility.Accessible {
            protected dataModel: javax.swing.ComboBoxModel<E>
            protected renderer: javax.swing.ListCellRenderer<E>
            protected editor: javax.swing.ComboBoxEditor
            protected maximumRowCount: int
            protected isEditable: boolean
            protected keySelectionManager: javax.swing.JComboBox$KeySelectionManager
            protected actionCommand: string
            protected lightWeightPopupEnabled: boolean
            protected selectedItemReminder: java.lang.Object
            public constructor(arg0: javax.swing.ComboBoxModel<E>)
            public constructor(arg0: E[])
            public constructor(arg0: java.util.Vector<E>)
            public constructor()
            protected installAncestorListener(): void
            public setUI(arg0: javax.swing.plaf.ComboBoxUI): void
            public updateUI(): void
            public getUIClassID(): string
            public getUI(): javax.swing.plaf.ComboBoxUI
            public setModel(arg0: javax.swing.ComboBoxModel<E>): void
            public getModel(): javax.swing.ComboBoxModel<E>
            public setLightWeightPopupEnabled(arg0: boolean): void
            public isLightWeightPopupEnabled(): boolean
            public setEditable(arg0: boolean): void
            public isEditable(): boolean
            public setMaximumRowCount(arg0: int): void
            public getMaximumRowCount(): int
            public setRenderer(arg0: javax.swing.ListCellRenderer<E> | javax.swing.ListCellRenderer$$Lambda<E>): void
            public getRenderer(): javax.swing.ListCellRenderer<E>
            public setEditor(arg0: javax.swing.ComboBoxEditor): void
            public getEditor(): javax.swing.ComboBoxEditor
            public setSelectedItem(arg0: java.lang.Object): void
            public getSelectedItem(): java.lang.Object
            public setSelectedIndex(arg0: int): void
            public getSelectedIndex(): int
            public getPrototypeDisplayValue(): E
            public setPrototypeDisplayValue(arg0: E): void
            public addItem(arg0: E): void
            public insertItemAt(arg0: E, arg1: int): void
            public removeItem(arg0: java.lang.Object): void
            public removeItemAt(arg0: int): void
            public removeAllItems(): void
            public showPopup(): void
            public hidePopup(): void
            public setPopupVisible(arg0: boolean): void
            public isPopupVisible(): boolean
            public addItemListener(arg0: java.awt.event.ItemListener): void
            public removeItemListener(arg0: java.awt.event.ItemListener): void
            public getItemListeners(): java.awt.event.ItemListener[]
            public addActionListener(arg0: java.awt.event.ActionListener): void
            public removeActionListener(arg0: java.awt.event.ActionListener): void
            public getActionListeners(): java.awt.event.ActionListener[]
            public addPopupMenuListener(arg0: javax.swing.event.PopupMenuListener): void
            public removePopupMenuListener(arg0: javax.swing.event.PopupMenuListener): void
            public getPopupMenuListeners(): javax.swing.event.PopupMenuListener[]
            public firePopupMenuWillBecomeVisible(): void
            public firePopupMenuWillBecomeInvisible(): void
            public firePopupMenuCanceled(): void
            public setActionCommand(arg0: java.lang.String | string): void
            public getActionCommand(): string
            public setAction(arg0: javax.swing.Action): void
            public getAction(): javax.swing.Action
            protected configurePropertiesFromAction(arg0: javax.swing.Action): void
            protected createActionPropertyChangeListener(arg0: javax.swing.Action): java.beans.PropertyChangeListener
            protected actionPropertyChanged(arg0: javax.swing.Action, arg1: java.lang.String | string): void
            protected fireItemStateChanged(arg0: java.awt.event.ItemEvent): void
            protected fireActionEvent(): void
            protected selectedItemChanged(): void
            public getSelectedObjects(): java.lang.Object[]
            public actionPerformed(arg0: java.awt.event.ActionEvent): void
            public contentsChanged(arg0: javax.swing.event.ListDataEvent): void
            public intervalAdded(arg0: javax.swing.event.ListDataEvent): void
            public intervalRemoved(arg0: javax.swing.event.ListDataEvent): void
            public selectWithKeyChar(arg0: char): boolean
            public setEnabled(arg0: boolean): void
            public configureEditor(arg0: javax.swing.ComboBoxEditor, arg1: java.lang.Object): void
            public processKeyEvent(arg0: java.awt.event.KeyEvent): void
            protected processKeyBinding(arg0: javax.swing.KeyStroke, arg1: java.awt.event.KeyEvent, arg2: int, arg3: boolean): boolean
            public setKeySelectionManager(arg0: javax.swing.JComboBox$KeySelectionManager | javax.swing.JComboBox$KeySelectionManager$$Lambda): void
            public getKeySelectionManager(): javax.swing.JComboBox$KeySelectionManager
            public getItemCount(): int
            public getItemAt(arg0: int): E
            protected createDefaultKeySelectionManager(): javax.swing.JComboBox$KeySelectionManager
            protected paramString(): string
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
    }
}