const React = require('react')
const Default = require('./layout/Default')

class Show extends React.Component {
    render(){
        const log = this.props.log
        return(
            <Default title={log.title}>
                <nav className="nav nav-tabs nav-fill">
                    <a className="nav-link btn btn-outline-primary" href="/logs">Main Page</a>
                    <a className="nav-link btn btn-outline-primary" href={`/logs/${log._id}/edit`}>Edit</a>
                </nav>
                <div className="form-group">
                    <div className='bg-dark text-light border border-light rounded'>
                        <p className=''>{log.entry}</p>
                        {log.shipIsBroken === true? <small className='text-danger'>The ship is broken</small>:<small className='text-success'>The ship is fine</small>}
                    </div>
                    <footer className='font-italic text-primary small'>Earthdate: {log.createdAt.toString()}</footer>
                    {log.createdAt.toString() !== log.updatedAt.toString()? <footer className='font-italic text-warning small'>Updated on {log.updatedAt.toString()}</footer>: <footer></footer> }
                </div>
                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                    <input className="btn btn-danger btn-sm" type="submit" value='DELETE LOG' />
                </form>
            </Default>
        )
    }
}

module.exports = Show