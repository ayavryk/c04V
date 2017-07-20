import * as React from 'react';
declare const appConfig;

interface IRichProps {
    activate?: any;
    height?: any;
    onChange?: any;
    name?: string; // TODO добавить интерфейс
    value?: string;
}
interface IRichState {
    style?: any; // TODO добавить интерфейс
    text?: string;
}

class Rich extends React.Component<IRichProps, IRichState> {

    public iframe = null;
    public editor = null;
    public fullSize = false;

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.value,
            style: this.getSize(),
        };
        this.reSize = this.reSize.bind(this);
        this.loadDataToEditor = this.loadDataToEditor.bind(this);
    };

    public getSize() {
        return this.fullSize ?
            { position: 'fixed', zIndex: 100, background: '#fff',
                left: 0, right: 0, top: 0, height: (window.outerHeight - 90) + 'px' } :
            { border: 'solid 1px #ccc', height: (this.props.height || 400) + 'px' };
    };

    public reSize = () => {
        this.setState({ style: this.getSize() });
    }

    public toggleSize = () => {
        this.fullSize = !this.fullSize;
        if (this.props.activate) {
            this.props.activate(this.fullSize);
        } else {
            console.log('not found activate props for rich');
        }
        this.reSize();

    }

    public onChange = (data) => {
        this.setState({text: data});
        this.props.onChange({ field: this.props.name, value: data });
    }

    public loadDataToEditor() {
        this.editor = this.iframe.contentWindow;
        this.editor.onMaximize = this.toggleSize.bind(this);
        this.editor.onChange = this.onChange.bind(this);
        this.editor.load(this.state.text);
    };

    public componentDidMount() {
        window.addEventListener('resize', this.reSize);
        if (this.iframe.addEventListener) {
            this.iframe.addEventListener('load', this.loadDataToEditor, false);
        }
        this.iframe.src = appConfig.editorPath;
    };

    public componentWillUnmount() {
        window.removeEventListener('resize', this.reSize);
        if (this.iframe.addEventListener) {
            this.iframe.removeEventListener('load', this.loadDataToEditor, false);
        }
    };

    public render() {
        const ref = (e) => { this.iframe = e; };
        return (
          <div style={this.state.style}>
            <iframe
              scrolling="no"
              ref={ref}
              style={{ border: 'none', width: '100%', height: '100%' }}
            />
          </div>);
    };
}
// ****************************************************
export { Rich, IRichProps }
