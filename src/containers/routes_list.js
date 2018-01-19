import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/google_map';
import Loader from '../components/loader';
import { getStars } from '../helpers';

class RoutesList extends Component {

    renderRoutes(routeData) {
        console.log("route data", routeData);
        const id = routeData.id;
        const url = routeData.url;
        const name = routeData.name;
        const image = routeData.imgSqSmall;
        const rating = routeData.rating;
        const starRating = getStars(routeData.stars);
        const starVotes = routeData.starVotes;
        const lat = routeData.latitude;
        const lon = routeData.longitude;

        return (
            
            <tr key={id}>
                <td> 
                    <a href={ url}>
                        <img src={ image } alt="No Photo of " />
                        <div>{ name }</div>
                    </a>
                </td>
                <td> { rating }</td>
                <td>         
                    <div className="stars-outer">
                        <div className="stars-inner" style={{width: starRating}}></div>
                    </div>
                    <div>
                        { starVotes } Votes
                    </div>
                </td>
                <td>
                    <GoogleMap lat={lat} lon={lon} />
                </td>
            </tr>
            
        );
    }

    render () {
        
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