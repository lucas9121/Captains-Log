const React = require('react')

class Index extends React.Component{
    render(){
        const logs = this.props.logs
        return(
            <div>
                <h1>Captain's Logs</h1>
                <nav>
                    <a href="/logs/new">New Log</a>
                </nav>
                {/* <ul>
                    {
                        logs.map((log) => {
                            return(
                                // <li>{log.title}</li>
                                <li>Message here</li>
                            )
                        })
                    }
                </ul> */}
            </div>
        )
    }
}

module.exports = Index