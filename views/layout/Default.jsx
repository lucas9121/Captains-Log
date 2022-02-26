const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return(
            <html>
                {this.props.children}
            </html>
        )
    }
}

module.exports = DefaultLayout