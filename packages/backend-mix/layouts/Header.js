import * as React from 'react';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import Setting from 'material-ui-icons/Settings';
import MenuIcon from 'material-ui-icons/Menu';
import FullScreen from 'material-ui-icons/Fullscreen';
import Search from 'material-ui-icons/Search';
import Tv from 'material-ui-icons/Tv';
import IconButton from 'material-ui/IconButton';
import withStyles from 'material-ui/styles/withStyles';
const styles = {
    header: {
        'align-items': 'center',
        background: '#3f51b5',
        boxShadow: '0px 1px 4px 0 rgba(0, 0, 0, 0.3)',
        display: 'flex',
        'justify-content': 'space-between',
    },
    headerLeft: {
        'align-items': 'center',
        display: 'flex',
    },
    logo: {
        marginLeft: '30px',
        width: '88px',
    },
    root: {
        background: '#3f51b5',
        color: '#fff',
        paddingLeft: '15px',
        height: '70px',
        'justify-content': 'flex-start',
    },
    menuBtn: {
        'align-self': 'stretch',
        background: '#3949a3',
        borderRadius: 0,
        height: 'auto',
        fontSize: '24px',
        marginLeft: '60px',
    },
    navBtn: {
        flex: 'none',
        padding: '0 3px',
        width: 'auto',
        fontSize: '14px',
    },
    btnLabel: {
        color: '#fff',
        fontSize: '14px',
    },
    selectedLabel: {
        color: '#ffffff',
    },
    selectRoot: {
        background: '#3949a3',
    },
    navUser: {
        'align-items': 'center',
        display: 'flex',
        float: 'right',
        'justify-content': 'center',
    },
    iconBtn: {
        fontSize: '18px',
        width: '28px',
    },
};
class HeaderLayout extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            current: 1,
            navs: [
                {
                    name: '全局',
                    path: '/all',
                },
                {
                    name: 'CMS',
                    path: '/cms',
                },
                {
                    name: '商城',
                    path: '/mall',
                },
                {
                    name: '用户中心',
                    path: '/user',
                },
                {
                    name: '微信',
                    path: '/weChat',
                },
                {
                    name: '论坛',
                    path: '/bbs',
                }
            ],
            value: 0,
            user: {
                name: '后台管理员',
            },
            fullScreen: false,
        };
        this.handleChange = (event, value) => {
            this.setState({ value });
        };
        this.handleFullScreen = () => {
            this.setState({ fullScreen: !this.state.fullScreen });
            if (this.state.fullScreen) {
                const el = document;
                let cfs;
                if (el.webkitCancelFullScreen) {
                    cfs = el.webkitCancelFullScreen;
                }
                else if (el['mozCancelFullScreen']) {
                    cfs = el['mozCancelFullScreen'];
                }
                else if (el['exitFullScreen']) {
                    cfs = el['exitFullScreen'];
                }
                else if (el['cancelFullScreen']) {
                    cfs = el['cancelFullScreen'];
                }
                let wscript;
                if (typeof cfs !== 'undefined' && cfs) {
                    cfs.call(el);
                    return;
                }
                if (typeof window['ActiveXObject'] !== 'undefined') {
                    wscript = new window['ActiveXObject']('WScript.Shell');
                    if (wscript !== null) {
                        wscript.SendKeys('{F11}');
                    }
                }
            }
            else {
                const el = document.documentElement;
                const rfs = el.webkitRequestFullScreen
                    || el['mozRequestFullScreen']
                    || el['msRequestFullScreen']
                    || el['requestFullScreen'];
                let wscript;
                if (typeof rfs !== 'undefined' && rfs) {
                    rfs.call(el);
                    return;
                }
                if (typeof window['ActiveXObject'] !== 'undefined') {
                    wscript = new window['ActiveXObject']('WScript.Shell');
                    if (wscript) {
                        wscript.SendKeys('{F11}');
                    }
                }
            }
        };
    }
    render() {
        const { value } = this.state;
        return (React.createElement("div", { className: this.props.classes.header },
            React.createElement("div", { className: this.props.classes.headerLeft },
                React.createElement("img", { className: this.props.classes.logo, src: require('../assets/images/notadd_logo.png') }),
                React.createElement(IconButton, { "aria-owns": open ? 'menu-appbar' : null, "aria-haspopup": "true", className: this.props.classes.menuBtn, color: "contrast" },
                    React.createElement(MenuIcon, null)),
                React.createElement(IconButton, { "aria-owns": open ? 'menu-appbar' : null, "aria-haspopup": "true", style: { background: 'none', marginLeft: '0' }, className: this.props.classes.menuBtn, onClick: this.handleFullScreen, color: "contrast" },
                    React.createElement(FullScreen, null)),
                React.createElement(IconButton, { "aria-owns": open ? 'menu-appbar' : null, "aria-haspopup": "true", style: { background: 'none', marginLeft: '0' }, className: this.props.classes.menuBtn, color: "contrast" },
                    React.createElement(Search, null)),
                React.createElement(BottomNavigation, { value: value, onChange: this.handleChange, showLabels: true, className: this.props.classes.root }, this.state.navs.map((item, index) => {
                    return (React.createElement(BottomNavigationButton, { classes: {
                            root: this.props.classes.navBtn,
                            label: this.props.classes.btnLabel,
                            selected: this.props.classes.selectRoot,
                            selectedLabel: this.props.classes.selectedLabel,
                        }, key: index, label: item.name }));
                }))),
            React.createElement("div", { className: this.props.classes.navUser },
                React.createElement(IconButton, { "aria-owns": open ? 'menu-appbar' : null, "aria-haspopup": "true", className: this.props.classes.iconBtn, style: { marginRight: '30px' }, color: "contrast" },
                    React.createElement(Tv, null)),
                React.createElement(IconButton, { "aria-owns": open ? 'menu-appbar' : null, "aria-haspopup": "true", className: this.props.classes.iconBtn, style: { marginRight: '10px' }, color: "contrast" },
                    React.createElement(Setting, null)))));
    }
}
export default withStyles(styles)(HeaderLayout);
