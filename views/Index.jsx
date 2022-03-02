const React = require('react')
const Default = require('./layout/Default')

class Index extends React.Component{
    render(){
        const logs = this.props.logs
        return(
            <Default title={'Captain\'s Log'}>         
                <nav className="nav nav-tabs justify-content-center">
                    <a className="nav-link btn-outline-primary" href="/logs/new">New Log</a>
                </nav>
                <table className='table table-striped table-hover table-md'>
                    <thead className='thead-dark text-center'>
                        <tr>
                            <th>#</th>
                            <th>Entry By</th>
                            <th>Title</th>
                            <th>Earthdate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            logs.map((log, i) => {
                                return(
                                    <tr key={log._id} className='text-center'>
                                        <td className="text-light">{i + 1}</td>
                                        <td className='text-light'>{log.name}</td>
                                        <td><a className='badge badge-pill badge-dark' href={`/logs/${log._id}`}>{log.title}</a></td>
                                        <td className='small text-primary'>{log.createdAt.toString()}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </Default>
        )
    }
}

module.exports = Index