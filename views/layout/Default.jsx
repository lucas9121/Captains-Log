const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" 
                        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" 
                        crossOrigin="anonymous">
                    </link>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <div className='container-lg'>
                        <h1 className='text-center text-primary'>{this.props.title}</h1>
                        <img src="https://i0.wp.com/thenerdsofcolor.org/wp-content/uploads/2015/05/trek-logo.jpg?resize=1600%2C768&ssl=1" className='img-fluid rounded' alt="Star Trek Logo" />
                        {this.props.children}
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout