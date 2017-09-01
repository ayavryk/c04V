import * as React from 'react';
import { hashHistory, Link } from 'react-router';
import Dialog from 'ui/dialog';
declare var appConfig: any;

const css = require('./mainMenu.css');

class MainMenu extends React.Component<any, any> {

    public confirm = null;

    public openConfirm = (gogo) => {
        this.confirm.open({
            title: 'Подтверждение выхода',
            text: 'Вы внесли изменения в данные. Выйти без сохранения?',
            buttons: [
              { icon: 'cancel', name: 'Не сохранять', onClick: gogo },
              { icon: 'default', name: 'Остаться' },
            ],
        });
    }

    // переход на внешнюю ссылку
    private out(link) {
        const gogo = () => {
            location.href = link;
        };
        if (!this.props.isChanged) {
            gogo();
        } else {
            this.openConfirm(gogo);
        }
    }

    // переход на внутреннюю ссылку
    private jump(e, item) {
        if (!this.props.isChanged) {return; }
        const gogo = () => {
            hashHistory.push(item.route);
        };
        this.openConfirm(gogo);
        e.preventDefault();
    }

    private menuItems() {
        const mainMenuPoints = appConfig.menu.filter(item => !!item.main);
        if (this.props.additionPoint) {
            mainMenuPoints.push(this.props.additionPoint);
        }
        const menu = mainMenuPoints.map((item, index) => {
            const active = (item.route !== '' && location.hash.indexOf(item.route) >= 0) ? css.active : '';
            const className = active + ' ' + css.item + ' ';
            return (
              <Link
                onClick = {e => this.jump(e, item)}
                key={index}
                className={className}
                to={item.route}
              >{item.title}
              </Link>);
        }, this);
        return menu;
    }
// onClick = {e => this.jump(e, {route: appConfig.host})}
    public authMenu() {
        return (
        <div className={css.authMenu}>
                <i className={'fa fa-home '} aria-hidden="true"
                    onClick = {() => this.out(appConfig.host)} />
                <i className={'fa fa-lock '} aria-hidden="true"
                    onClick = {() => this.out(appConfig.auth.logout)} />
        </div>);
    }

    public render() {
        const lightColor = this.props.lightColor ? css.lightColor : '';
        return (
            <div>
              <div className={css.menu + ' ' + lightColor}>
                <div className={'editWrapper ' + css.mainMenuWrapper}>
                        <span className={css.item} onClick={this.props.extMemuShow}>
                          <i className={'fa fa-bars ' + css.extIcons} aria-hidden="true"/>
                        </span>                        
                      {this.menuItems()}
                      {this.authMenu()}
                  </div>
              </div>
              <Dialog ref={e => this.confirm = e} />
          </div>
        );
    }
};

export default MainMenu;
