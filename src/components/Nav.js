import React from 'react'
import {AppBar, Drawer, MenuItem} from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

/**
 * ナビゲーションコンポーネントクラス。
 */
class Nav extends React.Component {

    /**
     * コンストラクタ。
     */
    constructor() {
        super()
        this.state = {
            open: false
        }
        this.handleToggle = this.handleToggle.bind(this)
    }

    /**
     * トグル処理。
     *
     * メニューの開閉を行う。
     */
    handleToggle() {
        this.setState({open: !this.state.open}) 
    }
 
    /**
     * レンダリング処理。
     */
    render() {
        return (
        <MuiThemeProvider>
        <div>
            <Drawer
                open={this.state.open}
                docked={false}
                width={200}
                onRequestChange={this.handleToggle}
            >
                <MenuItem>ログアウト</MenuItem>
            </Drawer>
            <AppBar title="ToDo リスト"
                onLeftIconButtonClick={this.handleToggle}>
            </AppBar>
        </div>
        </MuiThemeProvider>
        )
    }
}

export default Nav;
