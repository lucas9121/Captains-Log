const React = require('react')

class Index extends React.Component{
    render(){
        const logs = this.props.logs
        // console.log('new log!!!!!!!!!!!!!!!!!!!!!!!!!')
        // console.log(logs)
        // console.log(logs.title)
        return(
            <div>
                <h1>Captain's Logs</h1>
                <nav>
                    <a href="/logs/new">New Log</a>
                </nav>
                <ul>
                    {
                        logs.map((log) => {
                            return(
                                <div>
                                   <li><a href={`/logs/${log._id}`}>{log.title}</a></li>
                                   <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value={`DELETE ${log.title.toUpperCase()}`} />
                                    </form>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index