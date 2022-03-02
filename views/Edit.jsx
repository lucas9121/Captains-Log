const React = require('react')
const Default = require('./layout/Default')

class Edit extends React.Component {
    render(){
        return(
            <Default title={`Edit ${this.props.log.title}`}>
                <nav className="nav nav-tabs justify-content-center">
                <a className="nav-link btn-outline-primary" href={`/logs/${this.props.log._id}`}>Back</a>
                </nav>
                <form className='needs-validation' action={`/logs/${this.props.log._id}?_method=PUT`} method="POST">
                    <div className='row'>
                        <div className='form-group col'>
                            <label htmlFor='name' className='text-light' >Name</label>
                            <input name="name" type="text" defaultValue={this.props.log.name} className='form-control form-control-sm bg-dark text-light' id='name' required/>
                        </div>
                        <div className='form-group col'>
                            <label htmlFor="title" className='text-light'>Title</label>
                            <input name="title" type="text" defaultValue={this.props.log.title} className='form-control form-control-sm bg-dark text-light' maxLength={'15'} id='title' required/>
                            <div id='title' className="valid-feedback">Looks good!</div>
                            <div id='title' className="invalid-feedback">Please provide title</div>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="entry" className='text-light'>  Entry</label>
                        <textarea name="entry" id="entry" defaultValue={this.props.log.entry} className='form-control bg-dark text-light' maxLength={'250'} cols="40" rows="3" required></textarea>
                        <small className='text-muted'>Maximun 250 Characters</small>
                        <div id='entry' className="valid-feedback">Looks good!</div>
                        <div id='entry' className="invalid-feedback">Please provide entry</div>
                    </div>
                    <div className="form-group custom-control custom-checkbox">
                        {this.props.log.shipIsBroken? <input name="shipIsBroken" className='custom-control-input' type="checkbox" id='ship' defaultChecked/>:  <input name="shipIsBroken" className='custom-control-input' type="checkbox" id='ship'/>}
                        <label htmlFor="ship" className='custom-control-label text-light'>Ship is Broken </label>
                    </div>
                    <input className='btn btn-outline-success' type="submit" value="Submit Changes" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit