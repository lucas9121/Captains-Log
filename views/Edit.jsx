const React = require('react')

class Edit extends React.Component {
    render(){
        return(
            <div>
                <form action={`/logs/${this.props.log._id}?_method=PUT`} method="POST">
                    Title: <input type="text" name="title" defaultValue={this.props.log.title} /> <br />
                    Entry: <textarea name="entry" defaultValue={this.props.log.entry} id="" cols="40" rows="5"></textarea> <br />
                    Ship is broken:
                    {this.props.log.shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked/>: <input type="checkbox" name="shipIsBroken" />} <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </div>
        )
    }
}

module.exports = Edit