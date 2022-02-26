const React = require('react')

class Show extends React.Component {
    render(){
        const log = this.props.log
        // console.log('Show page!!!!!!!!!!!!!!!!!!!!!')
        // console.log(log)
        // console.log(log.shipIsBroken)
        // console.log(log.createdAt)
        return(
            <div>
                <h1>{log.title}</h1>
                <nav>
                    <a href="/logs">Main Page</a> <br />
                    <a href={`/logs/${log._id}/edit`}>Edit this log</a>
                </nav>
                <p>{log.entry}</p>
                <p>Is the ship broken? {log.shipIsBroken === true? 'Yes':'No'}</p>
                <p>Created At: {log.createdAt.toString()}</p>
                <p>Updated At: {log.updatedAt.toString()}</p>
            </div>
        )
    }
}

module.exports = Show