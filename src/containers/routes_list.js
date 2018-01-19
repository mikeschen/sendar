import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStars } from '../helpers';

class RoutesList extends Component {
    renderRoutes(routeData) {
        console.log("route dataaaaaa", routeData);
        const starRating = getStars(routeData.stars);
        return (
            <tr key={routeData.id}>
                <td> 
                    <a href={ routeData.url}>
                        <img src={ routeData.imgSqSmall } alt="photo of route" />{ routeData.name }
                    </a>
                </td>
                <td> { routeData.rating }</td>
                <td>         
                    <div className="stars-outer">
                        <div className="stars-inner" style={{width: starRating}}></div>
                    </div>
                    <div>
                        { routeData.starVotes } Votes
                    </div>
                    </td>
            </tr>
        );
    }

    render () {
        console.log("heres props.routes", this.props.routes);
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Route</th>
                        <th>Rating</th>
                        <th>Average Stars</th>
                        <th>Map</th>
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