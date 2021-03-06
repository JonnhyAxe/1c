declare namespace sun {
    namespace swing {
        namespace plaf {
            namespace synth {
                abstract class SynthFileChooserUI extends javax.swing.plaf.basic.BasicFileChooserUI implements javax.swing.plaf.synth.SynthUI {
                    public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    public constructor(arg0: javax.swing.JFileChooser)
                    public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
                    protected getContext(arg0: javax.swing.JComponent, arg1: int): javax.swing.plaf.synth.SynthContext
                    public installUI(arg0: javax.swing.JComponent): void
                    public installComponents(arg0: javax.swing.JFileChooser): void
                    public uninstallComponents(arg0: javax.swing.JFileChooser): void
                    protected installListeners(arg0: javax.swing.JFileChooser): void
                    protected abstract createActionMap(): javax.swing.ActionMap
                    protected installDefaults(arg0: javax.swing.JFileChooser): void
                    protected uninstallDefaults(arg0: javax.swing.JFileChooser): void
                    protected installIcons(arg0: javax.swing.JFileChooser): void
                    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
                    public abstract setFileName(arg0: java.lang.String | string): void
                    public abstract getFileName(): string
                    protected doSelectedFileChanged(arg0: java.beans.PropertyChangeEvent): void
                    protected doSelectedFilesChanged(arg0: java.beans.PropertyChangeEvent): void
                    protected doDirectoryChanged(arg0: java.beans.PropertyChangeEvent): void
                    protected doAccessoryChanged(arg0: java.beans.PropertyChangeEvent): void
                    protected doFileSelectionModeChanged(arg0: java.beans.PropertyChangeEvent): void
                    protected doMultiSelectionChanged(arg0: java.beans.PropertyChangeEvent): void
                    protected doControlButtonsChanged(arg0: java.beans.PropertyChangeEvent): void
                    protected doAncestorChanged(arg0: java.beans.PropertyChangeEvent): void
                    public createPropertyChangeListener(arg0: javax.swing.JFileChooser): java.beans.PropertyChangeListener
                    public getFileNameCompletionAction(): javax.swing.Action
                    protected getApproveButton(arg0: javax.swing.JFileChooser): javax.swing.JButton
                    protected getCancelButton(arg0: javax.swing.JFileChooser): javax.swing.JButton
                    public clearIconCache(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}