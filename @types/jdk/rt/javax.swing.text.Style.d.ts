declare namespace javax {
    namespace swing {
        namespace text {
            interface Style extends javax.swing.text.MutableAttributeSet {
                getName(): string
                addChangeListener(arg0: javax.swing.event.ChangeListener): void
                removeChangeListener(arg0: javax.swing.event.ChangeListener): void
            }
        }
    }
}