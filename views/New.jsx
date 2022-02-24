const React = require('react')

class New extends React.Component {
    render() {
        return(
            <div>
                <h1>Captain's Log</h1>
                <nav>
                    <a href="/logs">Back to Captains Log Index Page</a>
                </nav>
                <form action="/logs" method="POST">
                    Title: <input name="title" type="text" /> <br />
                    Entry: <textarea name="entry" id="" cols="40" rows="5"></textarea> <br />
                    Ship is Broken: <input name="shipIsBroken" type="checkbox" /> <br />
                    <input type="submit" value="Post Blog" />
                </form>
            </div>
        )
    }
}

module.exports = New