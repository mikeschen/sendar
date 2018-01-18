import React, { Component } from 'react';
import { connect } from 'react-redux';

class RoutesList extends Component {
    renderRoutes(routeData) {
        console.log("route date", routeData);
        
        return (
            <tr>
                <td>here { routeData.routes.name }</td>
            </tr>
        );
    }

    render () {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Progression</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.routes.map(this.renderRoutes) }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ routes }) {
    return { routes }
}

export default connect(mapStateToProps)(RoutesList);