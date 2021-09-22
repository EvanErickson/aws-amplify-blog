import React, { Component } from 'react';
import * as queries from './../graphql/queries';

import { API } from 'aws-amplify';

async function getPosts(){
     API.graphql({
        query: queries.listPosts
    }).then(res => {
        console.log(res)
    })
}
getPosts();

class DisplayPosts extends Component {
    render(){
        return(
            <div>Hello World</div>
        )
    }
}

export default DisplayPosts;