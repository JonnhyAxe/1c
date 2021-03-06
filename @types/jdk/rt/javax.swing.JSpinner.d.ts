declare namespace javax {
    namespace swing {
        class JSpinner extends javax.swing.JComponent implements javax.accessibility.Accessible {
            public constructor(arg0: javax.swing.SpinnerModel)
            public constructor()
            public getUI(): javax.swing.plaf.SpinnerUI
            public setUI(arg0: javax.swing.plaf.SpinnerUI): void
            public getUIClassID(): string
            public updateUI(): void
            protected createEditor(arg0: javax.swing.SpinnerModel): javax.swing.JComponent
            public setModel(arg0: javax.swing.SpinnerModel): void
            public getModel(): javax.swing.SpinnerModel
            public getValue(): java.lang.Object
            public setValue(arg0: java.lang.Object): void
            public getNextValue(): java.lang.Object
            public addChangeListener(arg0: javax.swing.event.ChangeListener): void
            public removeChangeListener(arg0: javax.swing.event.ChangeListener): void
            public getChangeListeners(): javax.swing.event.ChangeListener[]
            protected fireStateChanged(): void
            public getPreviousValue(): java.lang.Object
            public setEditor(arg0: javax.swing.JComponent): void
            public getEditor(): javax.swing.JComponent
            public commitEdit(): void
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
    }
}